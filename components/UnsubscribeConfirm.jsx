'use client';

import { useEffect, useState } from 'react';

// Same endpoint as the footer signup (see components/NewsletterSignup.jsx and
// aws/newsletter-signup-lambda). Sending { email, action: 'unsubscribe' }
// deletes the address from the newsletterSignups table.
const NEWSLETTER_API_URL =
  process.env.NEXT_PUBLIC_NEWSLETTER_API_URL ||
  'https://hjrdnyyz58.execute-api.eu-central-1.amazonaws.com/newsletter/';

export default function UnsubscribeConfirm() {
  // 'loading' | 'success' | 'error' | 'noemail'
  const [status, setStatus] = useState('loading');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const addr = (params.get('email') || '').trim();
    if (!addr) {
      setStatus('noemail');
      return;
    }
    setEmail(addr);

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(NEWSLETTER_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: addr, action: 'unsubscribe' }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        if (!cancelled) setStatus('success');
      } catch {
        if (!cancelled) setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-[140px] md:pt-[170px] pb-24 md:pb-32 overflow-hidden">
      {/* Ambient background, matching the site's section treatment */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(45% 38% at 50% 14%, rgba(111,76,255,0.24) 0%, rgba(23,21,47,0) 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[120px] -translate-x-1/2 w-[680px] h-[680px] rounded-full blur-3xl opacity-25 -z-10"
        style={{
          background:
            'radial-gradient(closest-side, rgba(168,139,250,0.40), rgba(23,21,47,0))',
        }}
      />

      <div className="container-x w-full">
        <div
          className="mx-auto w-full max-w-[560px] rounded-[24px] border border-white/8 p-9 md:p-12 text-center"
          style={{
            background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.04) inset, 0 40px 80px -40px rgba(0,0,0,0.6)',
          }}
        >
          {status === 'loading' && <Loading />}
          {status === 'success' && <Success email={email} />}
          {status === 'error' && <ErrorState email={email} />}
          {status === 'noemail' && <NoEmail />}
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="text-[#fbd5cf] text-[14px] md:text-[16px] font-semibold tracking-[0.24em] uppercase mb-6">
      {children}
    </p>
  );
}

function Badge({ tone = 'violet', children }) {
  const bg =
    tone === 'error'
      ? 'linear-gradient(160deg, #fca5a5 0%, #ef4444 100%)'
      : 'linear-gradient(160deg, #c4b5fd 0%, #6f4cff 100%)';
  return (
    <div
      className="w-14 h-14 mx-auto mb-7 grid place-items-center rounded-full"
      style={{ background: bg, boxShadow: '0 18px 40px -16px rgba(111,76,255,0.55)' }}
      aria-hidden
    >
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HomeButton({ label = 'Return to violedu' }) {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2 rounded-[12px] px-7 py-[14px] text-[14.5px] font-semibold transition duration-300 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a48bff]/60"
      style={{
        background: 'rgba(255,255,255,0.06)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.14)',
        backdropFilter: 'blur(6px)',
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function Loading() {
  return (
    <div role="status" aria-live="polite">
      <div
        className="w-14 h-14 mx-auto mb-7 grid place-items-center rounded-full"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
        aria-hidden
      >
        <span className="inline-block w-6 h-6 rounded-full border-2 border-white/25 border-t-[#c4b5fd] animate-spin" />
      </div>
      <h1 className="font-display font-semibold text-white text-[26px] md:text-[30px] tracking-[-0.02em]">
        Updating your preferences…
      </h1>
      <p className="text-ink-dim text-[15px] leading-[1.7] mt-3">
        One moment while we remove you from the list.
      </p>
    </div>
  );
}

function Success({ email }) {
  return (
    <div role="status" aria-live="polite">
      <Eyebrow>Email preferences</Eyebrow>
      <Badge tone="violet">
        <CheckIcon />
      </Badge>
      <h1 className="font-display font-semibold text-white text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.025em]">
        You&rsquo;re unsubscribed.
      </h1>
      <p className="text-ink-dim text-[15px] leading-[1.7] mt-4 max-w-[420px] mx-auto">
        {email ? (
          <>
            <span className="text-white font-medium">{email}</span> has been removed from our
            mailing list. You won&rsquo;t receive any further emails from us.
          </>
        ) : (
          <>You&rsquo;ve been removed from our mailing list and won&rsquo;t receive any further emails from us.</>
        )}
      </p>
      <p className="text-ink-muted text-[13px] leading-[1.6] mt-3">
        Changed your mind? You can opt back in anytime from our website.
      </p>
      <div className="mt-8">
        <HomeButton />
      </div>
    </div>
  );
}

function ErrorState({ email }) {
  const retryHref = `/unsubscribe${email ? `?email=${encodeURIComponent(email)}` : ''}`;
  return (
    <div role="alert">
      <Eyebrow>Email preferences</Eyebrow>
      <Badge tone="error">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 8v5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="16.5" r="1.3" fill="#fff" />
        </svg>
      </Badge>
      <h1 className="font-display font-semibold text-white text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.025em]">
        Something went wrong.
      </h1>
      <p className="text-ink-dim text-[15px] leading-[1.7] mt-4 max-w-[440px] mx-auto">
        We couldn&rsquo;t update your preferences just now. Please try again, or email{' '}
        <a
          href="mailto:contact@violedu.com"
          className="text-white hover:underline underline-offset-4"
        >
          contact@violedu.com
        </a>{' '}
        and we&rsquo;ll remove you right away.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
        <a
          href={retryHref}
          className="inline-flex items-center gap-2 rounded-[12px] px-7 py-[14px] text-[14.5px] font-semibold text-white transition duration-300 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a48bff]/60"
          style={{ background: '#6f4cff', transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}
        >
          Try again
        </a>
        <HomeButton label="Back to site" />
      </div>
    </div>
  );
}

function NoEmail() {
  return (
    <div>
      <Eyebrow>Email preferences</Eyebrow>
      <h1 className="font-display font-semibold text-white text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.025em]">
        Which address should we remove?
      </h1>
      <p className="text-ink-dim text-[15px] leading-[1.7] mt-4 max-w-[440px] mx-auto">
        This link is missing the email address to unsubscribe. Please use the
        “Unsubscribe” link at the bottom of one of our emails, or contact{' '}
        <a
          href="mailto:contact@violedu.com"
          className="text-white hover:underline underline-offset-4"
        >
          contact@violedu.com
        </a>{' '}
        and we&rsquo;ll take care of it.
      </p>
      <div className="mt-8">
        <HomeButton />
      </div>
    </div>
  );
}
