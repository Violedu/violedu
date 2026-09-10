import json
import boto3
import html
from time import gmtime, strftime

ses_client = boto3.client('ses')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('masterclassBookings')

# --- Config -----------------------------------------------------------------
SENDER = 'contact@violedu.com'        # must be SES-verified
ADMIN_RECIPIENT = 'contact@violedu.com'  # internal notification recipient
SITE_URL = 'https://www.violedu.com/'

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

# --- Human-readable labels for the questionnaire `meta` fields --------------
LEVEL_LABELS = {
    'intermediate': 'Intermediate',
    'advanced-amateur': 'Advanced amateur',
    'pre-professional': 'Pre-professional',
    'professional': 'Professional / conservatory',
}
REPERTOIRE_LABELS = {
    'choosing': 'Still choosing their program',
    'learning': 'Learning the notes now',
    'playable': 'Can play through it (needs polishing)',
    'performance-ready': 'Performance-ready (wants it audition-tight)',
}
STUCK_LABELS = {
    'intonation': 'Intonation',
    'shifting': 'Shifting & position work',
    'passagework': 'Fast passagework',
    'bow': 'Bow control & tone',
    'tempo': 'Tempo & endurance',
    'stage': 'Stage performance / nerves',
    'polish': 'Just needs polish',
}
SOURCE_LABELS = {
    'youtube': 'YouTube',
    'instagram': 'Instagram',
    'search': 'Google / search',
    'referral': 'A friend or teacher',
    'other': 'Somewhere else',
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
        country = (data.get('countryOfResidence') or '').strip()
        meta = data.get('meta') or {}

        if not name or not email or not country:
            return _response(400, {'message': 'Missing name, email or countryOfResidence.'})

        # Numbers may arrive as strings — coerce defensively.
        age = _to_int(data.get('age'))
        years_of_playing = _to_int(data.get('yearsOfPlaying'))

        now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())

        # 1. Persist the booking to DynamoDB.
        log_booking_to_dynamodb(
            now, name, email, age, years_of_playing,
            country, meta,
        )

        # 2. Notify the studio internally (no user-facing email — Calendly handles that).
        send_admin_email(
            name, email, age, years_of_playing,
            country, meta,
        )

        return _response(200, {'message': 'Booking recorded successfully!'})

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


def _response(status, body_dict):
    return {
        'statusCode': status,
        'headers': {'Content-Type': 'application/json', **CORS_HEADERS},
        'body': json.dumps(body_dict),
    }


def _to_int(value):
    """Best-effort int coercion; returns None when not parseable."""
    if value is None or value == '':
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def log_booking_to_dynamodb(now, name, email, age, years_of_playing,
                            country, meta):
    item = {
        'requestId': now,
        'name': name,
        'email': email,
        'countryOfResidence': country,
        # questionnaire answers (raw ids, preserved for analytics)
        'level': meta.get('level') or '',
        'target': meta.get('target') or '',
        'repertoireStatus': meta.get('repertoireStatus') or '',
        'stuckOn': meta.get('stuckOn') or [],
        'threeMonthGoal': meta.get('threeMonthGoal') or '',
        'preferredTier': meta.get('preferredTier') or '',
        'referralSource': meta.get('referralSource') or '',
    }
    if age is not None:
        item['age'] = age
    if years_of_playing is not None:
        item['yearsOfPlaying'] = years_of_playing

    table.put_item(Item=item)


# --- Email rendering (matches the resource-delivery / contact-handler style) -
def _email_shell(tag_label, inner_html):
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
    return f"""
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0;">
      <tr>
        <td style="background:#17152f;border-radius:999px;">
          <a href="{href}" style="display:inline-block;padding:13px 24px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;font-family:'Manrope',Arial,sans-serif;">{label} &nbsp;&rarr;</a>
        </td>
      </tr>
    </table>
    """


def _detail_rows(rows):
    """rows: list of (label, value) tuples -> a clean two-column table."""
    out = []
    for label, value in rows:
        if value in (None, '', []):
            continue
        safe_label = html.escape(str(label))
        safe_value = html.escape(str(value))
        out.append(
            f'<tr>'
            f'<td style="padding:10px 0;border-bottom:1px solid rgba(23,21,47,0.08);'
            f'font-size:11px;letter-spacing:0.12em;text-transform:uppercase;'
            f'color:rgba(23,21,47,0.45);font-weight:600;width:42%;vertical-align:top;">{safe_label}</td>'
            f'<td style="padding:10px 0;border-bottom:1px solid rgba(23,21,47,0.08);'
            f'font-size:15px;color:#17152f;font-weight:500;vertical-align:top;">{safe_value}</td>'
            f'</tr>'
        )
    return (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" '
        'style="margin:0 0 36px;">' + ''.join(out) + '</table>'
    )


def send_admin_email(name, email, age, years_of_playing,
                     country, meta):
    stuck_ids = meta.get('stuckOn') or []
    stuck_readable = ', '.join(STUCK_LABELS.get(s, s) for s in stuck_ids)

    rows = [
        ('Email', email),
        ('Age', age),
        ('Years playing', years_of_playing),
        ('Country', country),
        ('Self-described level', LEVEL_LABELS.get(meta.get('level'), meta.get('level'))),
        ('Preparing for', meta.get('target')),
        ('Repertoire status', REPERTOIRE_LABELS.get(meta.get('repertoireStatus'), meta.get('repertoireStatus'))),
        ('Hardest right now', stuck_readable),
        ('Program', meta.get('preferredTier')),
        ('Found via', SOURCE_LABELS.get(meta.get('referralSource'), meta.get('referralSource'))),
    ]

    safe_name = html.escape(name)
    reply_subject = 'Re:%20Your%20audition%20intensive%20booking'
    inner = f"""
      {_eyebrow('New masterclass booking')}
      {_headline(safe_name)}
      <p style="font-size:15px;color:rgba(23,21,47,0.62);margin:0 0 36px;line-height:1.6;">
        {safe_name} just scheduled a meeting through the booking questionnaire and was
        sent to Calendly to pick a slot. Their answers are below.
      </p>

      <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:600;margin:0 0 12px;">Booking details</div>
      {_detail_rows(rows)}

      {_cta_button(f'mailto:{html.escape(email)}?subject={reply_subject}', 'Reply to ' + safe_name)}
    """
    _send(ADMIN_RECIPIENT, f'New masterclass booking — {name}', _email_shell('Masterclass booking', inner), reply_to=email)


def _send(to_address, subject, body_html, reply_to=None):
    kwargs = {
        'Source': SENDER,
        'Destination': {'ToAddresses': [to_address]},
        'Message': {
            'Subject': {'Data': subject},
            'Body': {'Html': {'Data': body_html}},
        },
    }
    if reply_to:
        kwargs['ReplyToAddresses'] = [reply_to]
    ses_client.send_email(**kwargs)
