# masterclass-booking-lambda

Backend for the final step of the booking questionnaire (`/book` →
[BookingQuestionnaire.jsx](../../components/book/BookingQuestionnaire.jsx)).
When the visitor clicks **Schedule Meeting**, the frontend opens Calendly in a new
tab and POSTs the questionnaire answers here. This function:

1. Writes the booking (plus a timestamp) to the **`masterclassBookings`** DynamoDB table.
2. Sends an **internal notification email to `contact@violedu.com`** (sender `contact@violedu.com`).
3. Sends **no email to the user** — Calendly delivers the calendar invite after they pick a slot.

## Request payload

```json
{
  "name": "Anna Petrova",
  "email": "anna@example.com",
  "age": 24,
  "yearsOfPlaying": 8,
  "countryOfResidence": "Germany",
  "learningPath": "Audition Intensive",
  "meta": {
    "level": "advanced-amateur",
    "target": "RNCM entrance — Bruch Concerto 1st mvt + scales",
    "repertoireStatus": "playable",
    "stuckOn": ["passagework", "shifting"],
    "preferredTier": "The 6-Week Audition Intensive",
    "referralSource": "youtube"
  }
}
```

## AWS setup

1. **DynamoDB** — create table `masterclassBookings` with partition key
   `requestId` (String). No sort key needed.
2. **SES** — `contact@violedu.com` must be a verified identity (it already is, since
   the contact-handler and resource-delivery lambdas use it). No DynamoDB stream / second
   lambda is required — the email is sent inline.
3. **Lambda** — Python 3.12 runtime, handler `lambda_function.lambda_handler`.
   Execution-role permissions: `dynamodb:PutItem` on the `masterclassBookings` table and
   `ses:SendEmail`.
4. **API Gateway** — POST route with Lambda-proxy integration + CORS (the function also
   returns CORS headers itself). Deploy, then set the frontend env var:

   ```
   NEXT_PUBLIC_BOOKING_API_URL=https://<your-new-id>.execute-api.eu-central-1.amazonaws.com/<stage>
   ```

   Until that env var is set, the frontend falls back to the old `submitLessonRequest`
   endpoint, so deploy + point the env var before relying on the new flow.
