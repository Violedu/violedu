'use client';

import { useState } from 'react';

// HTTP API Gateway endpoint backed by the newsletter-signup Lambda
// (stores the email in the newsletterSignups DynamoDB table, emails the
// subscriber a welcome note and notifies contact@violedu.com).
// Keep in sync with aws/newsletter-signup-lambda. Trailing slash matters:
// the route is "POST /" under the "newsletter" stage.
const NEWSLETTER_API_URL =
  process.env.NEXT_PUBLIC_NEWSLETTER_API_URL ||
  'https://hjrdnyyz58.execute-api.eu-central-1.amazonaws.com/newsletter/';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(false);
    if (submitError) setSubmitError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError(true);
      return;
    }
    if (submitting) return;
    setSubmitError('');
    setSubmitting(true);

    try {
      const res = await fetch(NEWSLETTER_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'footer' }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        "Something went wrong. Please try again, or email contact@violedu.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="rounded-[20px] border border-white/8 p-7 md:p-8 mt-8"
      style={{ background: 'linear-gradient(180deg, #221f3f 0%, #1a1735 100%)' }}
    >
      <h3 className="text-white text-[22px] md:text-[24px] font-semibold tracking-[-0.01em] leading-[1.2]">
        Join 700+ violinists
      </h3>

      {submitted ? (
        <div
          className="mt-5 rounded-[14px] p-6 flex items-start gap-4"
          style={{
            background:
              'linear-gradient(160deg, rgba(196,181,253,0.16) 0%, rgba(111,76,255,0.07) 100%)',
            border: '1px solid rgba(168,139,250,0.30)',
          }}
          role="status"
          aria-live="polite"
        >
          <div
            className="shrink-0 w-9 h-9 grid place-items-center rounded-full"
            style={{ background: 'linear-gradient(160deg, #c4b5fd 0%, #6f4cff 100%)' }}
            aria-hidden
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-white text-[15.5px] font-semibold tracking-[-0.01em]">
              You&rsquo;re subscribed.
            </p>
            <p className="text-ink-dim text-[13.5px] mt-1 leading-[1.55]">
              Check your inbox for a welcome note — including the promotions tab, just in case.
            </p>
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={onSubmit} className="mt-5 flex flex-col sm:flex-row gap-2" noValidate>
            <input
              type="email"
              placeholder="Enter your best email"
              className="input-dark flex-1 text-[14px]"
              aria-label="email"
              aria-invalid={error || undefined}
              value={email}
              onChange={onChange}
              disabled={submitting}
              autoComplete="email"
              style={error ? { borderColor: 'rgba(248,113,113,0.55)' } : undefined}
            />
            <button
              type="submit"
              disabled={submitting}
              className="btn-violet whitespace-nowrap text-[14px] inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting && (
                <span
                  aria-hidden
                  className="inline-block w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin"
                />
              )}
              {submitting ? 'Signing Up…' : 'Sign Up Now'}
            </button>
          </form>

          {error && (
            <p className="text-[12.5px] text-[#fda4a4] mt-2.5 leading-[1.5]" role="alert">
              Please enter a valid email address.
            </p>
          )}
          {submitError && (
            <p className="text-[12.5px] text-[#fda4a4] mt-2.5 leading-[1.5]" role="alert">
              {submitError}
            </p>
          )}

          <p className="text-ink-muted text-[13px] leading-[1.55] mt-4">
            We respect your privacy and never use your email for spam.
            Subscribe with confidence, unsubscribe anytime.
          </p>
        </>
      )}
    </div>
  );
}
