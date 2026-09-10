# newsletter-signup-lambda

Backend for the **footer newsletter signup**
([components/NewsletterSignup.jsx](../../components/NewsletterSignup.jsx), rendered by
[components/Footer.jsx](../../components/Footer.jsx)). When a visitor enters their email
and clicks **Sign Up Now**, the frontend POSTs `{ email, source }` here. This function:

1. Stores the subscriber in the **`newsletterSignups`** DynamoDB table, **keyed by `email`**
   so the same address is never duplicated (a repeat signup is a no-op for the row).
2. Sends a branded **welcome email to the subscriber** (sender `contact@violedu.com`).
3. Sends an **internal notification email to `contact@violedu.com`** — only for a genuinely
   new subscriber, so re-signups don't spam the inbox.

The email HTML reuses the same visual shell/eyebrow/headline/CTA helpers as the
resource-delivery and contact lambdas.

## Request payload

**Subscribe** (footer form):

```json
{ "email": "anna@example.com", "source": "footer" }
```

→ `200 {"message":"Subscribed successfully!","new":true|false}`

**Unsubscribe** (from the /unsubscribe page, triggered by the link in the welcome email):

```json
{ "email": "anna@example.com", "action": "unsubscribe" }
```

→ `200 {"message":"Unsubscribed successfully."}` — **deletes the row** from
`newsletterSignups`. Idempotent: deleting a missing address still succeeds, so the
page always confirms cleanly. A later re-signup is treated as a fresh subscriber.

Both actions return `400` for an invalid/missing email and `500` on an unexpected error.
CORS headers are returned by the function and also configured on the API.

## Unsubscribe flow

1. The welcome email's footer has an **Unsubscribe** link →
   `{BASE_URL}/unsubscribe?email=<urlencoded address>`.
2. [app/unsubscribe/page.js](../../app/unsubscribe/page.js) +
   [components/UnsubscribeConfirm.jsx](../../components/UnsubscribeConfirm.jsx) read the
   `email` query param and **automatically** POST the unsubscribe action on load
   (JS-initiated, so email link-scanners won't accidentally unsubscribe people), then
   show a site-styled confirmation.

## ⚠️ Before launching the new site — update these

The new site currently lives only on **localhost**, so the welcome email points there.
Update both before go-live:

- **`BASE_URL`** in [lambda_function.py](lambda_function.py) — currently
  `http://localhost:3000`. Change to the production origin (e.g. `https://www.violedu.com`),
  then redeploy (see below). This is the destination of **both** the "Explore violedu"
  button and the "Unsubscribe" link in the welcome email.
- **`NEXT_PUBLIC_NEWSLETTER_API_URL`** is optional — the frontend defaults to the live
  API URL already; only set it if the endpoint changes.

> Optional hardening for launch: the unsubscribe link carries the raw email, so anyone
> with the URL could unsubscribe that address. For a stricter flow, swap to a signed
> token. Low risk for a newsletter, but worth noting.

## Live resources (all in eu-central-1, account 099358406189)

| Resource | Value |
| --- | --- |
| Lambda | `newsletter-signup` (python3.12, handler `lambda_function.lambda_handler`) |
| Execution role | `dynamodb-ses-lambda-full-access` (reused — has DynamoDB + SES) |
| DynamoDB table | `newsletterSignups`, partition key `email` (String), PAY_PER_REQUEST |
| API (HTTP API v2) | `masterclass-newsletter-api` / id `hjrdnyyz58` |
| Endpoint | `https://hjrdnyyz58.execute-api.eu-central-1.amazonaws.com/newsletter/` |
| Route / stage | `POST /` on stage `newsletter` (auto-deploy) |

> **Trailing slash matters.** The route is `POST /` under the `newsletter` stage, so the
> public URL must end in `/newsletter/`. The frontend constant already includes it.
> Override per-environment with `NEXT_PUBLIC_NEWSLETTER_API_URL` if needed.

## Deploy / update

The CLI key `email-sender-cli` (default profile) is read-only for most services; use the
**`violedu-admin`** profile for create/update. Note `violedu-admin` cannot `CreateTable`
or `DeleteItem`/`GetItem` on DynamoDB — the table was bootstrapped once through the
Lambda's own role.

```bash
# from this directory
powershell -Command "Compress-Archive -Path lambda_function.py -DestinationPath function.zip -Force"
aws lambda update-function-code \
  --function-name newsletter-signup \
  --zip-file fileb://function.zip \
  --profile violedu-admin --region eu-central-1
```

## Notes

- A test row (`ivosgeorgiev13@gmail.com`, source `footer-test`) was created during
  end-to-end verification. The CLI users can't delete DynamoDB items, so remove it from
  the AWS console if you want a clean list.
- SES is in sandbox-or-production per the existing setup; `contact@violedu.com` is already a
  verified identity (shared with the contact/resource/booking lambdas).
