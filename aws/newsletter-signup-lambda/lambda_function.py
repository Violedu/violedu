import json
import boto3
import html
from time import gmtime, strftime
from urllib.parse import quote
from botocore.exceptions import ClientError

ses_client = boto3.client('ses')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('newsletterSignups')

# --- Config -----------------------------------------------------------------
SENDER = 'contact@violedu.com'           # must be SES-verified
ADMIN_RECIPIENT = 'contact@violedu.com'  # internal notification recipient
SITE_URL = 'https://www.violedu.com/'

# ============================================================================
# !!! BEFORE LAUNCH: change BASE_URL to the production domain (e.g.
# 'https://www.violedu.com'). It is the destination of the "Explore violedu"
# button AND the "Unsubscribe" link in the welcome email. While the new site is
# only on localhost, both point at localhost so they work during development.
# ============================================================================
BASE_URL = 'https://www.violedu.com'

# Brand assets (already hosted on S3 in the old setup)
LOGO_URL = 'https://violedu-email.s3.eu-central-1.amazonaws.com/logo_white_bg.png'
ICON_YOUTUBE = 'https://violedu-email.s3.eu-central-1.amazonaws.com/iconyoutube.png'
ICON_INSTAGRAM = 'https://violedu-email.s3.eu-central-1.amazonaws.com/iconinstagram.png'
ICON_FACEBOOK = 'https://violedu-email.s3.eu-central-1.amazonaws.com/iconfacebook.png'

YOUTUBE_URL = 'https://www.youtube.com/@Violedu-dm3uk'
INSTAGRAM_URL = 'https://www.instagram.com/violedugrp/'
FACEBOOK_URL = 'https://www.facebook.com'

# CORS — allow the production site (and previews) to call this endpoint.
CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
}


# --- Entry point ------------------------------------------------------------
def lambda_handler(event, context):
    # Handle CORS preflight if it ever reaches the function.
    method = (
        event.get('requestContext', {})
        .get('http', {})
        .get('method')
        or event.get('httpMethod')
    )
    if method == 'OPTIONS':
        return _response(200, {'message': 'ok'})

    try:
        data = _parse_body(event)
        email = (data.get('email') or '').strip()
        action = (data.get('action') or '').strip().lower()

        if not _valid_email(email):
            return _response(400, {'message': 'A valid email address is required.'})

        # Unsubscribe: remove the address from the list. Idempotent — deleting a
        # missing key is a no-op, so it succeeds whether or not they were on it.
        if action == 'unsubscribe':
            table.delete_item(Key={'email': email})
            return _response(200, {'message': 'Unsubscribed successfully.'})

        source = (data.get('source') or 'footer').strip()
        now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())

        # 1. Store the subscriber. Dedupe by email: a repeat signup is a no-op
        #    for the admin notification, so we only email on a genuinely new row.
        is_new = _store_subscriber(email, source, now)

        # 2. Always confirm to the subscriber (re-confirm returning addresses too).
        send_user_email(email)

        # 3. Notify the admin only for brand-new subscribers.
        if is_new:
            send_admin_email(email, source, now)

        return _response(200, {'message': 'Subscribed successfully!', 'new': is_new})

    except Exception as e:
        print(f'Error: {e}')
        return _response(500, {'message': f'Error occurred: {str(e)}'})


# --- Helpers ----------------------------------------------------------------
def _parse_body(event):
    """Supports both Lambda-proxy (body is a JSON string) and direct test events."""
    body = event.get('body')
    if body is None:
        return event
    if isinstance(body, dict):
        return body
    return json.loads(body)


def _valid_email(email):
    if not email or '@' not in email:
        return False
    local, _, domain = email.partition('@')
    return bool(local) and '.' in domain and not domain.endswith('.')


def _response(status, body_dict):
    return {
        'statusCode': status,
        'headers': {'Content-Type': 'application/json', **CORS_HEADERS},
        'body': json.dumps(body_dict),
    }


def _store_subscriber(email, source, now):
    """Write the subscriber, keyed by email. Returns True if this is a new
    address, False if it was already on the list."""
    try:
        table.put_item(
            Item={
                'email': email,
                'source': source,
                'signedUpAt': now,
            },
            ConditionExpression='attribute_not_exists(email)',
        )
        return True
    except ClientError as e:
        if e.response['Error']['Code'] == 'ConditionalCheckFailedException':
            return False
        raise


# --- Email rendering --------------------------------------------------------
def _email_shell(tag_label, inner_html):
    """Wraps body content in the violedu email-preview.html visual style."""
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#f3f1ec;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f1ec;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid rgba(23,21,47,0.09);border-radius:4px;font-family:'Manrope',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#17152f;">
          <!-- top bar -->
          <tr>
            <td style="padding:24px 40px;border-bottom:1px solid rgba(23,21,47,0.09);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <a href="{SITE_URL}"><img src="{LOGO_URL}" alt="violedu" height="22" style="height:22px;width:auto;display:block;border:0;"></a>
                  </td>
                  <td align="right" style="vertical-align:middle;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:500;">
                    {tag_label}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- body -->
          <tr>
            <td style="padding:48px 48px 40px;">
              {inner_html}
            </td>
          </tr>
          <!-- footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid rgba(23,21,47,0.09);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" style="vertical-align:middle;font-size:12px;color:rgba(23,21,47,0.42);">
                    &copy; 2026 violedu &middot; All rights reserved
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <a href="{YOUTUBE_URL}" style="display:inline-block;margin-left:14px;"><img src="{ICON_YOUTUBE}" alt="YouTube" width="16" height="16" style="display:inline-block;border:0;opacity:0.55;"></a>
                    <a href="{INSTAGRAM_URL}" style="display:inline-block;margin-left:14px;"><img src="{ICON_INSTAGRAM}" alt="Instagram" width="16" height="16" style="display:inline-block;border:0;opacity:0.55;"></a>
                    <a href="{FACEBOOK_URL}" style="display:inline-block;margin-left:14px;"><img src="{ICON_FACEBOOK}" alt="Facebook" width="16" height="16" style="display:inline-block;border:0;opacity:0.55;"></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""


def _eyebrow(text):
    return (
        f'<div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;'
        f'color:#6f4cff;font-weight:600;margin:0 0 24px;">{text}</div>'
    )


def _headline(text):
    return (
        f'<h1 style="font-size:30px;line-height:1.2;letter-spacing:-0.02em;font-weight:500;'
        f'color:#17152f;margin:0 0 18px;">{text}</h1>'
    )


def _cta_button(href, label):
    """Dark pill CTA, matching the .cta style in email-preview.html."""
    return f"""
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0;">
      <tr>
        <td style="background:#17152f;border-radius:999px;">
          <a href="{href}" style="display:inline-block;padding:13px 24px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;font-family:'Manrope',Arial,sans-serif;">{label} &nbsp;&rarr;</a>
        </td>
      </tr>
    </table>
    """


def send_user_email(email):
    unsubscribe_url = f'{BASE_URL}/unsubscribe?email={quote(email)}'
    inner = f"""
      {_eyebrow('Newsletter')}
      {_headline('You&rsquo;re on the list.')}
      <p style="font-size:15px;color:rgba(23,21,47,0.62);margin:0 0 40px;line-height:1.6;">
        Thanks for subscribing to the <strong style="font-weight:600;color:#17152f;">violedu newsletter</strong>.
        You&rsquo;ve joined 700+ violinists who get our practice tips, new masterclass
        announcements and free resources &mdash; straight to the inbox.
      </p>

      <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:600;margin:0 0 12px;">What to expect</div>
      <p style="font-size:17px;line-height:1.7;color:#17152f;padding:4px 0 4px 20px;border-left:2px solid #6f4cff;margin:0 0 32px;">
        No spam, ever. Just the occasional email worth opening &mdash; and you can
        unsubscribe anytime.
      </p>

      {_cta_button(BASE_URL, 'Explore violedu')}

      <p style="font-size:13px;color:rgba(23,21,47,0.42);margin:40px 0 0;line-height:1.6;">
        Happy practicing,<br>The violedu team
      </p>

      <p style="font-size:12px;color:rgba(23,21,47,0.42);margin:28px 0 0;padding:20px 0 0;border-top:1px solid rgba(23,21,47,0.09);line-height:1.6;">
        Don&rsquo;t want these emails?
        <a href="{unsubscribe_url}" style="color:#3a26a8;text-decoration:none;font-weight:500;border-bottom:1px solid rgba(111,76,255,0.25);">Unsubscribe</a>.
      </p>
    """
    _send(email, 'Welcome to the violedu newsletter', _email_shell('Newsletter', inner))


def send_admin_email(email, source, now):
    safe_email = html.escape(email)
    safe_source = html.escape(source)
    reply_subject = 'Re:%20violedu%20newsletter'
    inner = f"""
      {_eyebrow('New newsletter signup')}
      {_headline(safe_email)}
      <p style="font-size:15px;color:rgba(23,21,47,0.62);margin:0 0 40px;line-height:1.6;">
        A new visitor just subscribed to the newsletter via
        <strong style="font-weight:600;color:#17152f;">{safe_source}</strong>.
      </p>

      <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:600;margin:0 0 12px;">Subscriber</div>
      <p style="font-size:17px;line-height:1.7;color:#17152f;padding:4px 0 4px 20px;border-left:2px solid #6f4cff;margin:0 0 8px;">
        <a href="mailto:{safe_email}" style="color:#3a26a8;text-decoration:none;font-weight:500;border-bottom:1px solid rgba(111,76,255,0.25);">{safe_email}</a>
      </p>
      <p style="font-size:13px;color:rgba(23,21,47,0.42);margin:0 0 32px;">{now}</p>

      {_cta_button(f'mailto:{safe_email}?subject={reply_subject}', 'Reply')}
    """
    _send(ADMIN_RECIPIENT, 'New newsletter signup', _email_shell('Newsletter signup', inner))


def _send(to_address, subject, html_body):
    ses_client.send_email(
        Source=SENDER,
        Destination={'ToAddresses': [to_address]},
        Message={
            'Subject': {'Data': subject},
            'Body': {'Html': {'Data': html_body}},
        },
    )
