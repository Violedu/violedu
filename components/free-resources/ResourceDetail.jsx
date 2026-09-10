'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal';

// New HTTP API Gateway endpoint for worksheet delivery (set after deploying the
// resource-delivery Lambda). Keep this in sync with aws/resource-delivery-lambda.
const RESOURCE_API_URL =
  'https://5x538ykfcf.execute-api.eu-central-1.amazonaws.com/resource';

function TitleLine({ parts }) {
  return (
    <span className="block">
      {parts.map((p, i) => (
        <span key={i} className={p.accent ? 'text-[#fbd5cf]' : 'text-white'}>
          {p.text}
        </span>
      ))}
    </span>
  );
}

export default function ResourceDetail({ resource }) {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [errors, setErrors] = useState({ fullName: false, email: false });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
    if (submitError) setSubmitError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      fullName: formData.fullName.trim() === '',
      email: !formData.email || !emailRegex.test(formData.email),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean) || submitting) return;
    setSubmitError('');
    setSubmitting(true);

    try {
      const res = await fetch(RESOURCE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          resourceName: resource.formId,
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        "Something went wrong sending your worksheet. Please try again, or email contact@violedu.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Top: title + form/cover */}
      <section className="relative pt-[140px] md:pt-[170px] pb-16 md:pb-24 overflow-hidden">
        {/* Ambient bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(45% 35% at 50% 8%, rgba(111,76,255,0.26) 0%, rgba(23,21,47,0) 70%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-200px] top-[120px] w-[640px] h-[640px] rounded-full blur-3xl opacity-25 -z-10"
          style={{
            background:
              'radial-gradient(closest-side, rgba(168,139,250,0.45), rgba(23,21,47,0))',
          }}
        />

        <div className="container-x">
          {/* Breadcrumb */}
          <Reveal delay={0}>
            <Link
              href="/free-resources"
              className="inline-flex items-center gap-2 text-ink-muted hover:text-white text-[13px] mb-7 transition focus-visible:outline-none focus-visible:underline underline-offset-4"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to all resources
            </Link>
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="text-[#fbd5cf] text-[14px] md:text-[16px] font-semibold tracking-[0.24em] uppercase mb-5 text-center"
          >
            {resource.eyebrow}
          </Reveal>

          <Reveal
            as="h1"
            delay={160}
            className="font-display font-semibold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.04] tracking-[-0.025em] text-center max-w-[1000px] mx-auto"
          >
            <TitleLine parts={resource.title.line1} />
            <TitleLine parts={resource.title.line2} />
          </Reveal>

          {/* Form + cover row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center mt-16 md:mt-20">
            {/* Form */}
            <Reveal delay={260}>
              <form
                onSubmit={onSubmit}
                className="rounded-[22px] border border-white/8 p-7 md:p-9 w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto"
                style={{
                  background:
                    'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -32px rgba(0,0,0,0.55)',
                }}
                noValidate
              >
                <p className="text-ink-dim text-[15px] leading-[1.7] mb-7">
                  {resource.description}
                </p>

                {submitted ? (
                  <div
                    className="rounded-[14px] p-6 text-center"
                    style={{
                      background:
                        'linear-gradient(160deg, rgba(196,181,253,0.18) 0%, rgba(111,76,255,0.08) 100%)',
                      border: '1px solid rgba(168,139,250,0.30)',
                    }}
                  >
                    <div
                      className="w-10 h-10 mx-auto mb-3 grid place-items-center rounded-full"
                      style={{
                        background:
                          'linear-gradient(160deg, #c4b5fd 0%, #6f4cff 100%)',
                      }}
                      aria-hidden
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-display text-[18px] font-semibold tracking-[-0.01em]">
                      It&rsquo;s on its way.
                    </p>
                    <p className="text-ink-dim text-[14px] mt-1.5 leading-[1.55]">
                      Check your inbox — including the promotions tab, just in case.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Field
                      id="fullName"
                      label="Full Name"
                      value={formData.fullName}
                      onChange={onInputChange('fullName')}
                      error={errors.fullName}
                      errorText="Please enter your full name"
                      autoComplete="name"
                    />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={onInputChange('email')}
                      error={errors.email}
                      errorText="Please enter a valid email address"
                      autoComplete="email"
                    />

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-[14px] py-[14px] text-[14.5px] font-semibold transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2 hover:-translate-y-[1px] active:translate-y-0"
                      style={{
                        background: '#fbd5cf',
                        color: '#161427',
                        boxShadow:
                          '0 12px 30px -14px rgba(251,213,207,0.55), 0 1px 0 rgba(255,255,255,0.4) inset',
                        transitionTimingFunction:
                          'cubic-bezier(0.2, 0.8, 0.2, 1)',
                      }}
                    >
                      {submitting ? 'Sending…' : 'Send To My Inbox'}
                    </button>

                    {submitError && (
                      <p
                        className="text-[12px] text-[#fda4a4] mt-3 leading-[1.55]"
                        role="alert"
                      >
                        {submitError}
                      </p>
                    )}

                    <p className="text-ink-muted text-[12px] leading-[1.55] mt-3">
                      No spam — your email is only used to send the worksheet
                      and the occasional practice tip. Unsubscribe anytime.
                    </p>
                  </div>
                )}
              </form>
            </Reveal>

            {/* Cover */}
            <Reveal delay={360}>
              <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
                <div
                  aria-hidden
                  className="absolute -inset-10 -z-10 blur-3xl opacity-60"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(168,139,250,0.35), rgba(23,21,47,0))',
                  }}
                />
                <div
                  className="relative aspect-square"
                  style={{ transform: 'rotate(-6deg)' }}
                >
                  <Image
                    src={resource.cover}
                    alt={resource.metaTitle}
                    fill
                    sizes="(min-width: 1024px) 460px, 80vw"
                    className="object-contain"
                    style={{
                      filter:
                        'drop-shadow(0 40px 60px rgba(5,4,16,0.55)) drop-shadow(0 8px 16px rgba(5,4,16,0.35))',
                    }}
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Open spread */}
      <section className="relative pb-24 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(50% 40% at 50% 60%, rgba(111,76,255,0.18) 0%, rgba(23,21,47,0) 70%)',
          }}
        />
        <div className="px-4 md:px-8">
          <Reveal delay={0}>
            <div className="relative w-full max-w-[1180px] mx-auto">
              <div className="relative aspect-[5/4]">
                <Image
                  src={resource.spread}
                  alt="Inside the worksheet"
                  fill
                  sizes="(min-width: 1180px) 1180px, 95vw"
                  className="object-contain"
                  style={{
                    filter:
                      'drop-shadow(0 50px 80px rgba(5,4,16,0.65)) drop-shadow(0 10px 20px rgba(5,4,16,0.45))',
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative pb-28 md:pb-36">
        <div className="container-x text-center">
          <Reveal
            as="h2"
            delay={0}
            className="font-display font-semibold text-white text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.02em]"
          >
            {resource.finalCtaTitle}
          </Reveal>

          <Reveal delay={150} className="mt-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 rounded-[12px] px-7 py-[14px] text-[14.5px] font-semibold transition duration-300 hover:-translate-y-[1px]"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.14)',
                backdropFilter: 'blur(6px)',
                transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            >
              Download For Free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = 'text', value, onChange, error, errorText, autoComplete }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-white/85 text-[12.5px] font-semibold tracking-[0.04em] mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={error || undefined}
        className="w-full text-[14.5px] text-white rounded-[10px] px-4 py-[12px] outline-none transition focus-visible:bg-white/[0.07]"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${
            error ? 'rgba(248,113,113,0.55)' : 'rgba(255,255,255,0.10)'
          }`,
        }}
      />
      {error && (
        <p className="text-[12px] text-[#fda4a4] mt-1.5 leading-tight">
          {errorText}
        </p>
      )}
    </div>
  );
}
