import boto3
import json
import html
import urllib.parse

# --- CONFIG ---------------------------------------------------------------
SENDER_EMAIL = 'contact@violedu.com'      # must be SES-verified
RECIPIENT_EMAIL = 'contact@violedu.com'   # where you receive the form
ALLOWED_ORIGIN = '*'                      # tighten to your domain later
# --------------------------------------------------------------------------

CORS_HEADERS = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Content-Type': 'application/json',
}


def _response(status, body):
    return {
        'statusCode': status,
        'headers': CORS_HEADERS,
        'body': json.dumps(body),
    }


def _build_html(name, sender_email, user_subject, message_content, eyebrow_label):
    safe_name = html.escape(name)
    safe_eyebrow = html.escape(eyebrow_label)
    safe_email = html.escape(sender_email)
    safe_subject = html.escape(user_subject)
    safe_message = html.escape(message_content).replace('\n', '<br>')

    reply_mailto = (
        f"mailto:{urllib.parse.quote(sender_email)}"
        f"?subject={urllib.parse.quote('Re: ' + user_subject)}"
    )

    font_stack = "'Manrope',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{safe_eyebrow}</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  body {{ margin: 0; padding: 0; background-color: #f3f1ec; }}
  table {{ border-collapse: collapse; }}
  a {{ color: #3a26a8; text-decoration: none; }}
</style>
</head>
<body style="margin:0;padding:0;background-color:#f3f1ec;font-family:{font_stack};color:#17152f;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f1ec;">
    <tr>
      <td align="center" style="padding:56px 24px 80px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid rgba(23,21,47,0.09);border-radius:4px;">

          <!-- HEADER -->
          <tr>
            <td style="padding:28px 40px;border-bottom:1px solid rgba(23,21,47,0.09);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <img src="https://violedu-email.s3.eu-central-1.amazonaws.com/logo_white_bg.png" alt="violedu" height="22" style="display:block;height:22px;width:auto;border:0;">
                  </td>
                  <td align="right" style="vertical-align:middle;font-family:{font_stack};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:500;">
                    Contact form
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:56px 56px 48px;font-family:{font_stack};">

              <!-- Eyebrow -->
              <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#6f4cff;font-weight:600;margin-bottom:24px;">
                <span style="display:inline-block;width:18px;height:1px;background:#6f4cff;vertical-align:middle;margin-right:10px;"></span>
                {safe_eyebrow}
              </div>

              <!-- Headline -->
              <h1 style="font-family:{font_stack};font-size:30px;line-height:1.2;letter-spacing:-0.02em;font-weight:500;color:#17152f;margin:0 0 18px;">
                {safe_subject}
              </h1>

              <!-- Meta -->
              <p style="font-size:15px;color:rgba(23,21,47,0.62);margin:0 0 40px;line-height:1.6;">
                From <strong style="font-weight:600;color:#17152f;">{safe_name}</strong>
                <span style="display:inline-block;width:3px;height:3px;border-radius:50%;background:rgba(23,21,47,0.42);vertical-align:middle;margin:0 10px 3px;"></span>
                <a href="mailto:{safe_email}" style="color:#3a26a8;text-decoration:none;font-weight:500;border-bottom:1px solid rgba(111,76,255,0.25);">{safe_email}</a>
              </p>

              <!-- Section label -->
              <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(23,21,47,0.42);font-weight:600;margin:0 0 12px;">
                Message
              </div>

              <!-- Message -->
              <div style="font-size:17px;line-height:1.7;color:#17152f;padding:4px 0 4px 20px;border-left:2px solid #6f4cff;margin:0 0 44px;">
                {safe_message}
              </div>

              <!-- CTA -->
              <a href="{reply_mailto}" style="display:inline-block;background:#17152f;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:999px;font-family:{font_stack};font-size:14px;font-weight:600;letter-spacing:-0.005em;">
                Reply to {safe_name} &nbsp;&rarr;
              </a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="border-top:1px solid rgba(23,21,47,0.09);padding:24px 40px;font-family:{font_stack};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="font-size:12px;color:rgba(23,21,47,0.42);vertical-align:middle;">
                    &copy; 2026 violedu &middot; All rights reserved
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <a href="https://www.youtube.com/@Violedu-dm3uk" style="display:inline-block;margin-left:14px;opacity:0.55;"><img src="https://violedu-email.s3.eu-central-1.amazonaws.com/iconyoutube.png" alt="YouTube" width="16" height="16" style="display:inline-block;border:0;width:16px;height:16px;vertical-align:middle;"></a>
                    <a href="https://www.instagram.com/violedugrp/" style="display:inline-block;margin-left:14px;opacity:0.55;"><img src="https://violedu-email.s3.eu-central-1.amazonaws.com/iconinstagram.png" alt="Instagram" width="16" height="16" style="display:inline-block;border:0;width:16px;height:16px;vertical-align:middle;"></a>
                    <a href="https://www.facebook.com" style="display:inline-block;margin-left:14px;opacity:0.55;"><img src="https://violedu-email.s3.eu-central-1.amazonaws.com/iconfacebook.png" alt="Facebook" width="16" height="16" style="display:inline-block;border:0;width:16px;height:16px;vertical-align:middle;"></a>
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


def lambda_handler(event, context):
    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return _response(400, 'Invalid JSON body.')

    name = (body.get('name') or '').strip()
    user_subject = (body.get('subject') or '').strip()
    sender_email = (body.get('email') or '').strip()
    message_content = (body.get('message') or '').strip()
    source = (body.get('source') or '').strip()

    if not name or not user_subject or not sender_email or not message_content:
        return _response(400, 'name, subject, email, and message are required.')

    eyebrow_label = 'New help chat message' if source == 'chat' else 'New masterclass inquiry'
    html_template = _build_html(name, sender_email, user_subject, message_content, eyebrow_label)

    ses = boto3.client('ses')
    email_subject = f'Masterclass Contact: {user_subject}'

    try:
        response = ses.send_email(
            Source=SENDER_EMAIL,
            Destination={'ToAddresses': [RECIPIENT_EMAIL]},
            Message={
                'Subject': {'Data': email_subject},
                'Body': {'Html': {'Data': html_template}},
            },
            ReplyToAddresses=[sender_email],
        )
        print(f"Email sent successfully: {response}")
        return _response(200, 'Email sent successfully')
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return _response(500, 'Failed to send email')
