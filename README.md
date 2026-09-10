# Violedu — The 6-Week Audition Intensive

Marketing + funnel site for the Violedu audition & exam intensive for violinists, built with
**Next.js** (App Router). Several flows are backed by **AWS Lambda + DynamoDB + SES**
behind HTTP API Gateway endpoints.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Structure

- `app/` — routes (`/`, `/about`, `/book`, `/free-resources`, `/masterclass`, `/privacy`,
  `/terms`, `/unsubscribe`).
- `components/` — UI components (Header, Footer, NewsletterSignup, UnsubscribeConfirm, …).
- `aws/` — one folder per Lambda, each with its own `README.md`:
  - `masterclass-booking-lambda` — `/book` questionnaire.
  - `masterclass-contact-handler-lambda` — contact / help widget.
  - `resource-delivery-lambda` — free-resource worksheet delivery.
  - `newsletter-signup-lambda` — footer newsletter signup + unsubscribe.

All AWS resources live in **eu-central-1**. Use the **`violedu-admin`** AWS CLI profile for
create/update operations (the default profile is read-only for most services).

## ⚠️ Before launching the new site

The site currently runs only on **localhost**, and one backend bakes that URL into the
emails it sends. **Update these before go-live**, or links in customer emails will point at
`localhost`:

| What | Where | Change |
| --- | --- | --- |
| **`BASE_URL`** | [aws/newsletter-signup-lambda/lambda_function.py](aws/newsletter-signup-lambda/lambda_function.py) | `http://localhost:3000` → production origin (e.g. `https://www.violedu.com`), then **redeploy the lambda**. Drives both the **"Explore violedu"** button and the **Unsubscribe** link in every email that reuses it. |

Redeploy the newsletter lambda after editing (from `aws/newsletter-signup-lambda/`):

```bash
powershell -Command "Compress-Archive -Path lambda_function.py -DestinationPath function.zip -Force"
aws lambda update-function-code --function-name newsletter-signup \
  --zip-file fileb://function.zip --profile violedu-admin --region eu-central-1
```

### Also worth doing at launch (optional)

- **Frontend API URLs** are hardcoded to the live endpoints and work as-is; override per
  environment with `NEXT_PUBLIC_NEWSLETTER_API_URL` / `NEXT_PUBLIC_BOOKING_API_URL` if the
  endpoints change.
- **Unsubscribe hardening** — the unsubscribe link carries the raw email address, so anyone
  with the URL could unsubscribe that address. Swap to a signed token for a stricter flow.
  Low risk for a mailing list, but noted.
- **CORS** — the newsletter API currently allows all origins (`*`). Tighten to the production
  domain if desired.

See each lambda's own `README.md` for per-flow details.
