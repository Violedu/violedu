import json
import boto3
from time import gmtime, strftime

s3_client = boto3.client('s3')
ses_client = boto3.client('ses')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('resourceEmailList')

# --- Config -----------------------------------------------------------------
SENDER = 'contact@violedu.com'
ADMIN_RECIPIENT = 'contact@violedu.com'
BUCKET_NAME = 'violedu-resources'
LINK_EXPIRATION_SECONDS = 900  # 15 minutes
SITE_URL = 'https://www.violedu.com/'

# Brand assets (already hosted on S3 in the old setup)
LOGO_URL = 'https://violedu-email.s3.eu-central-1.amazonaws.com/logo_white_bg.png'
ICON_YOUTUBE = 'https://violedu-email.s3.eu-central-1.amazonaws.com/iconyoutube.png'
ICON_INSTAGRAM = 'https://violedu-email.s3.eu-central-1.amazonaws.com/iconinstagram.png'
ICON_FACEBOOK = 'https://violedu-email.s3.eu-central-1.amazonaws.com/iconfacebook.png'

YOUTUBE_URL = 'https://www.youtube.com/@Violedu-dm3uk'
INSTAGRAM_URL = 'https://www.instagram.com/violedugrp/'
FACEBOOK_URL = 'https://www.facebook.com'

# formId (sent from the frontend) -> human-readable worksheet title.
# The S3 key is always "{resourceName}.pdf", so worksheet_sound -> worksheet_sound.pdf
RESOURCE_TITLES = {
    'worksheet_sound': 'The Worksheet To Sound Like A Pro Violinist',
    'worksheet_memory': 'The Worksheet To Learn Music Faster',
    'worksheet_vibrato': 'The Worksheet To Master Your Vibrato',
}

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
        name = (data.get('name') or '').strip()
        email = (data.get('email') or '').strip()
        resource_name = (data.get('resourceName') or '').strip()

        if not name or not email or not resource_name:
            return _response(400, {'message': 'Missing name, email or resourceName.'})

        resource_title = RESOURCE_TITLES.get(resource_name, resource_name)
        now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())

        # 1. Generate the pre-signed download URL for the PDF.
        presigned_url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': BUCKET_NAME, 'Key': f'{resource_name}.pdf'},
            ExpiresIn=LINK_EXPIRATION_SECONDS,
        )

        # 2. Email the worksheet to the user.
        send_user_email(email, name, resource_title, presigned_url)

        # 3. Notify the admin.
        send_admin_email(email, name, resource_title)

        # 4. Log the request to DynamoDB.
        log_request_to_dynamodb(now, name, email, resource_name)

        return _response(200, {'message': 'Email sent successfully!'})

    except Exception as e:
        print(f'Error: {e}')
        return _response(500, {'message': f'Error occurred: {str(e)}'})


# --- Helpers ----------------------------------------------------------------
def _parse_body(event):
    """Supports both Lambda-proxy (body is a JSON string) and direct test events."""
    body = event.get('body')
    if body is None:
        # Direct invocation / test event where fields sit on the root.
        return event
    if isinstance(body, dict):
        return body
    return json.loads(body)


def _response(status, body_dict):
    return {
        'statusCode': status,
        'headers': {'Content-Type': 'application/json', **CORS_HEADERS},
        'body': json.dumps(body_dict),
    }


def log_request_to_dynamodb(now, name, email, resource_name):
    table.put_item(Item={
        'requestId': now,
        'name': name,
        'email': email,
        'resourceName': resource_name,
    })


# --- Email rendering --------------------------------------------------------
def _email_shell(tag_label, inner_html):
    """Wraps body content in the violedu email-preview.html visual style.

    Table-based layout for email-client compatibility (Outlook/Gmail), with the
    same palette/typography as public/email-preview.html.
    """
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


def send_user_email(email, name, resource_title, presigned_url):
    inner = f"""
      {_eyebrow('Your free worksheet')}
      {_headline('Your worksheet is ready, ' + name + '.')}
      <p style="font-size:15px;color:rgba(23,21,47,0.62);margin:0 0 40px;line-height:1.6;">
        Thanks for requesting <strong style="font-weight:600;color:#17152f;">{resource_title}</strong>.
        Tap the button below to download your PDF.
      </p>

      <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:600;margin:0 0 12px;">Download</div>
      <p style="font-size:17px;line-height:1.7;color:#17152f;padding:4px 0 4px 20px;border-left:2px solid #6f4cff;margin:0 0 32px;">
        Your download link is valid for 15 minutes. If it expires, just request the worksheet again from the site.
      </p>

      {_cta_button(presigned_url, 'Download worksheet')}

      <p style="font-size:13px;color:rgba(23,21,47,0.42);margin:40px 0 0;line-height:1.6;">
        Happy practicing,<br>The violedu team
      </p>
    """
    _send(email, 'Your requested worksheet', _email_shell('Free worksheet', inner))


def send_admin_email(email, name, resource_title):
    reply_subject = f'Re:%20{resource_title.replace(" ", "%20")}'
    inner = f"""
      {_eyebrow('New worksheet request')}
      {_headline(name)}
      <p style="font-size:15px;color:rgba(23,21,47,0.62);margin:0 0 40px;line-height:1.6;">
        From <strong style="font-weight:600;color:#17152f;">{name}</strong>
        &nbsp;&middot;&nbsp;
        <a href="mailto:{email}" style="color:#3a26a8;text-decoration:none;font-weight:500;border-bottom:1px solid rgba(111,76,255,0.25);">{email}</a>
      </p>

      <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:600;margin:0 0 12px;">Requested resource</div>
      <p style="font-size:17px;line-height:1.7;color:#17152f;padding:4px 0 4px 20px;border-left:2px solid #6f4cff;margin:0 0 32px;">
        {resource_title}
      </p>

      {_cta_button(f'mailto:{email}?subject={reply_subject}', 'Reply to ' + name)}
    """
    _send(ADMIN_RECIPIENT, 'New worksheet request', _email_shell('Resource request', inner))


def _send(to_address, subject, html):
    ses_client.send_email(
        Source=SENDER,
        Destination={'ToAddresses': [to_address]},
        Message={
            'Subject': {'Data': subject},
            'Body': {'Html': {'Data': html}},
        },
    )
