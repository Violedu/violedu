'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CONTACT_API_URL =
  'https://gkae61t50l.execute-api.eu-central-1.amazonaws.com/contact';

const INITIAL_FORM = { name: '', subject: '', email: '', message: '' };

export default function HelpWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleChange = (e) => {
    const key = e.target.id.replace('hw-', '');
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setErrorMessage('');
    setSubmitting(true);

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'chat' }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setFormData(INITIAL_FORM);
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
        setTimeout(() => setSubmitted(false), 400);
      }, 1400);
    } catch (err) {
      setErrorMessage(
        "Couldn't send your message. Please try again or email contact@violedu.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Chat panel — full-screen sheet on mobile, floating card on desktop (sm+) */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Help chat"
        aria-hidden={!open}
        className={`fixed z-[60] flex flex-col overflow-hidden bg-white transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)] inset-0 w-full rounded-none sm:inset-auto sm:bottom-20 sm:right-6 sm:w-[360px] sm:max-h-[calc(100dvh-8rem)] sm:rounded-2xl sm:shadow-[0_24px_60px_-12px_rgba(60,30,160,0.45),0_0_0_1px_rgba(255,255,255,0.04)] ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header — pinned so the close button is always reachable; clears the notch */}
        <div
          className="relative shrink-0 px-5 pt-5 pb-7 bg-[linear-gradient(135deg,#7a5bff_0%,#6f4cff_55%,#5a3df0_100%)] text-white"
          style={{ paddingTop: 'calc(1.25rem + env(safe-area-inset-top))' }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="absolute right-3 inline-flex items-center justify-center w-8 h-8 rounded-full text-white/85 hover:bg-white/15 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            style={{ top: 'calc(0.75rem + env(safe-area-inset-top))' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex flex-col items-center text-center pt-2">
            <div className="relative w-14 h-14 rounded-full ring-2 ring-white/80 shadow-[0_6px_18px_-4px_rgba(0,0,0,0.35)] overflow-hidden">
              <Image
                src="/profile_kalina.png"
                alt="Kalina"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-3 text-[17px] font-semibold tracking-tight">How can we help?</h3>
            <p className="mt-1 text-[12px] text-white/85">We usually respond within 3–6 hours.</p>
          </div>
        </div>

        {/* Body — scrolls within the panel; fills the screen on mobile */}
        <div
          className="flex-1 min-h-0 overflow-y-auto px-5 pt-4 pb-5 bg-white"
          style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}
        >
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto w-10 h-10 rounded-full bg-[#6f4cff]/10 text-[#6f4cff] inline-flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="mt-3 text-[14px] font-semibold text-slate-800">Message sent</p>
              <p className="mt-1 text-[12px] text-slate-500">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Field label="Name" id="hw-name">
                <input
                  id="hw-name"
                  type="text"
                  required
                  className="hw-input"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </Field>
              <Field label="Subject" id="hw-subject">
                <input
                  id="hw-subject"
                  type="text"
                  required
                  className="hw-input"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </Field>
              <Field label="Email address" id="hw-email">
                <input
                  id="hw-email"
                  type="email"
                  required
                  className="hw-input"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </Field>
              <Field label="How can we help?" id="hw-message">
                <textarea
                  id="hw-message"
                  rows={4}
                  required
                  className="hw-input resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </Field>

              {errorMessage && (
                <p className="text-[12px] leading-snug text-rose-600" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#6f4cff] hover:bg-[#5e3eef] active:bg-[#5435de] disabled:bg-[#9b85ff] disabled:cursor-not-allowed text-white text-[13.5px] font-semibold py-2.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4cff]/40 focus-visible:ring-offset-2"
              >
                {submitting && (
                  <span
                    aria-hidden
                    className="inline-block w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin"
                  />
                )}
                {submitting ? 'Sending…' : 'Send a message'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Help launcher button — own layer, pinned bottom-right (translateZ keeps
          it glued during iOS momentum scroll) */}
      <div
        className="pointer-events-none fixed z-50 flex flex-col items-end"
        style={{
          bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
          right: 'max(1.5rem, env(safe-area-inset-right))',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close help' : 'Open help'}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#6f4cff] hover:bg-[#5e3eef] active:bg-[#5435de] text-white px-4 h-11 text-[13.5px] font-semibold shadow-[0_14px_40px_-10px_rgba(111,76,255,0.65)] transition-[transform,background-color] duration-200 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a48bff]/60"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Help
      </button>

      <style jsx>{`
        :global(.hw-input) {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e2e4ea;
          border-radius: 6px;
          padding: 8px 10px;
          font-size: 13.5px;
          color: #1f2330;
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease;
        }
        :global(.hw-input:focus-visible) {
          border-color: #6f4cff;
          box-shadow: 0 0 0 3px rgba(111, 76, 255, 0.18);
        }
      `}</style>
      </div>
    </>
  );
}

function Field({ label, id, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[12.5px] font-medium text-slate-700 mb-1">{label}</span>
      {children}
    </label>
  );
}
