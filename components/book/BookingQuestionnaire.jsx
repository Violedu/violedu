'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const CALENDLY_URL = 'https://calendly.com/contact-violedu/30min';
// New HTTP API Gateway endpoint for the masterclass-booking Lambda (writes to the
// `masterclassBookings` table + emails contact@violedu.com; no user-facing email —
// Calendly sends the invite). Keep this in sync with aws/masterclass-booking-lambda.
const API_URL =
  'https://ko1bd1gnz7.execute-api.eu-central-1.amazonaws.com';

const COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'New Zealand',
  'Ireland', 'Germany', 'Austria', 'Switzerland', 'France', 'Belgium',
  'Netherlands', 'Luxembourg', 'Denmark', 'Norway', 'Sweden', 'Finland',
  'Iceland', 'Spain', 'Portugal', 'Italy', 'Greece', 'Cyprus', 'Malta',
  'Czechia', 'Slovakia', 'Slovenia', 'Croatia', 'Hungary', 'Poland',
  'Romania', 'Bulgaria', 'Estonia', 'Latvia', 'Lithuania', 'Ukraine',
  'Serbia', 'Bosnia and Herzegovina', 'North Macedonia', 'Albania',
  'Turkey', 'Israel', 'United Arab Emirates', 'Saudi Arabia', 'Qatar',
  'Singapore', 'Japan', 'South Korea', 'China', 'Hong Kong', 'Taiwan',
  'India', 'Indonesia', 'Malaysia', 'Philippines', 'Thailand', 'Vietnam',
  'South Africa', 'Egypt', 'Morocco', 'Kenya', 'Nigeria',
  'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Uruguay',
  'Other',
];

const steps = [
  {
    id: 'level',
    type: 'choice',
    title: 'How would you describe your playing right now?',
    subtitle: "There's no wrong answer — this helps me tailor your plan.",
    options: [
      { id: 'intermediate', label: 'Intermediate', sub: 'I play through repertoire but still hit walls.', bars: 2 },
      { id: 'advanced-amateur', label: 'Advanced amateur', sub: 'Serious player, often returning after a break.', bars: 3 },
      { id: 'pre-professional', label: 'Pre-professional', sub: 'Auditions, competitions, conservatory prep.', bars: 4 },
      { id: 'professional', label: 'Professional / conservatory', sub: 'I perform or play in ensembles regularly.', bars: 5 },
    ],
  },
  {
    id: 'years',
    type: 'number',
    title: 'How many years have you been playing the violin?',
    subtitle: 'A rough estimate is fine.',
    placeholder: 'e.g. 8',
    min: 0,
    max: 80,
  },
  {
    id: 'target',
    type: 'text',
    title: 'What are you preparing for?',
    subtitle: 'Tell me the audition or exam — and what you plan to play.',
    placeholder: 'e.g. RNCM entrance audition — Bruch Concerto 1st mvt, a Bach movement, and scales',
  },
  {
    id: 'repertoireStatus',
    type: 'choice',
    title: 'Where are you with that repertoire?',
    subtitle: "Be honest — this is what we'll build your plan around.",
    options: [
      { id: 'choosing', label: 'Still choosing my program', sub: "I haven't settled on what to play yet." },
      { id: 'learning', label: 'Learning the notes now', sub: "Can't play it through end-to-end yet." },
      { id: 'playable', label: 'I can play through it', sub: 'The notes are there — it needs polishing.' },
      { id: 'performance-ready', label: 'Performance-ready', sub: 'Solid — I want it audition-tight.' },
    ],
  },
  {
    id: 'stuck',
    type: 'multi',
    title: 'Which of these feel hardest right now?',
    subtitle: "Pick as many as apply — I'll know exactly where to start.",
    options: [
      { id: 'intonation', label: 'Intonation' },
      { id: 'shifting', label: 'Shifting & position work' },
      { id: 'passagework', label: 'Fast passagework' },
      { id: 'bow', label: 'Bow control & tone' },
      { id: 'tempo', label: 'Tempo & endurance' },
      { id: 'stage', label: 'Stage performance / nerves' },
      { id: 'polish', label: 'I just need polish' },
    ],
  },
  {
    id: 'source',
    type: 'choice',
    title: 'Last thing — how did you find me?',
    subtitle: 'Just curious where to show up next.',
    options: [
      { id: 'youtube', label: 'YouTube' },
      { id: 'instagram', label: 'Instagram' },
      { id: 'search', label: 'Google / search' },
      { id: 'referral', label: 'A friend or teacher' },
      { id: 'other', label: 'Somewhere else' },
    ],
  },
  {
    id: 'personal',
    type: 'info',
    title: "Almost there — let's lock in your slot.",
    subtitle: 'I send the calendar invite to the email below.',
  },
];

export default function BookingQuestionnaire() {
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState({
    level: '',
    years: '',
    target: '',
    repertoireStatus: '',
    stuck: [],
    source: '',
    fullName: '',
    email: '',
    age: '',
    country: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const step = steps[stepIdx];
  const total = steps.length;
  const progress = ((stepIdx + 1) / total) * 100;

  const isCurrentValid = useMemo(() => {
    if (step.type === 'choice') return Boolean(answers[step.id]);
    if (step.type === 'text') return String(answers[step.id] || '').trim().length > 0;
    if (step.type === 'multi') return answers[step.id]?.length > 0;
    if (step.type === 'number') {
      const n = Number(answers[step.id]);
      return answers[step.id] !== '' && Number.isInteger(n) && n >= 0 && n <= 80;
    }
    if (step.type === 'info') return true;
    return false;
  }, [step, answers]);

  const goNext = () => {
    if (!isCurrentValid) return;
    setStepIdx((i) => Math.min(i + 1, total - 1));
  };
  const goBack = () => {
    if (stepIdx === 0) {
      if (typeof window !== 'undefined') {
        if (window.history.length > 1) window.history.back();
        else window.location.href = '/';
      }
      return;
    }
    setStepIdx((i) => Math.max(i - 1, 0));
  };

  const setField = (id, value) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setErrors((e) => ({ ...e, [id]: false }));
  };
  const toggleMulti = (id, optionId) => {
    setAnswers((a) => {
      const current = a[id] || [];
      const next = current.includes(optionId)
        ? current.filter((x) => x !== optionId)
        : [...current, optionId];
      return { ...a, [id]: next };
    });
  };

  const validateFinal = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isInteger = (v) => /^\d+$/.test(String(v).trim());
    const next = {
      fullName: answers.fullName.trim() === '',
      email: !answers.email || !emailRegex.test(answers.email),
      age: answers.age === '' || !isInteger(answers.age),
      country: answers.country === '',
      agreeToTerms: !answers.agreeToTerms,
    };
    setErrors(next);
    return Object.values(next).every((v) => !v);
  };

  const submit = async () => {
    if (!validateFinal()) return;
    setSubmitting(true);
    const calendly = window.open(CALENDLY_URL, '_blank');
    const learningPath = 'Audition Intensive';
    const preferredTier = 'The 6-Week Audition Intensive';
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: answers.fullName.trim(),
          email: answers.email.trim(),
          age: Number(answers.age),
          yearsOfPlaying: Number(answers.years) || 0,
          countryOfResidence: answers.country,
          learningPath,
          meta: {
            level: answers.level,
            target: answers.target.trim(),
            repertoireStatus: answers.repertoireStatus,
            stuckOn: answers.stuck,
            preferredTier,
            referralSource: answers.source,
          },
        }),
      }).catch(() => {});
    } finally {
      setSubmitting(false);
      if (calendly) calendly.focus();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050410] text-ink-dim grain">
      {/* ambient backdrop — single warm violet bloom, low intensity */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 50% at 50% 20%, rgba(111,76,255,0.18) 0%, rgba(5,4,16,0) 60%), radial-gradient(50% 40% at 50% 95%, rgba(251,213,207,0.07) 0%, rgba(5,4,16,0) 60%), linear-gradient(180deg, #07061a 0%, #050410 100%)',
          }}
        />
      </div>

      {/* top strip: logo + progress + back */}
      <div className="relative z-10">
        <div className="w-full px-6 md:px-10 pt-6 md:pt-8 flex items-center gap-4 md:gap-6">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-white/85 hover:text-white text-[14px] font-medium transition group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-md px-2 py-1 -mx-2"
            aria-label={stepIdx === 0 ? 'Leave the questionnaire' : 'Go to previous step'}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition group-hover:-translate-x-0.5">
              <path d="M11.5 14L6 9l5.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>

          <a href="/" aria-label="violedu home" className="ml-auto inline-flex items-center shrink-0 opacity-80 hover:opacity-100 transition">
            <Image src="/violedu_logo_white.png" alt="violedu" width={640} height={120} className="h-[18px] md:h-[20px] w-auto" />
          </a>
        </div>

        {/* segmented progress */}
        <div className="w-full mt-5 md:mt-7 px-6 md:px-10">
          <div className="flex items-center gap-1.5 md:gap-2" aria-label={`Step ${stepIdx + 1} of ${total}`}>
            {steps.map((s, i) => {
              const filled = i <= stepIdx;
              return (
                <div
                  key={s.id}
                  className="h-[3px] flex-1 rounded-full overflow-hidden bg-white/8"
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: filled ? '100%' : '0%',
                      transition: 'width 520ms cubic-bezier(0.22, 1, 0.36, 1)',
                      background:
                        'linear-gradient(90deg, #8b5cf6 0%, #c4b5fd 55%, #fbd5cf 100%)',
                      boxShadow: filled ? '0 0 14px rgba(139,92,246,0.55)' : 'none',
                    }}
                  />
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-[11px] tracking-[0.22em] uppercase font-semibold text-white/40">
            Step <span className="text-[#fbd5cf]">{String(stepIdx + 1).padStart(2, '0')}</span>{' '}
            <span className="opacity-50">/ {String(total).padStart(2, '0')}</span>
          </p>
        </div>
      </div>

      {/* step body */}
      <div className="relative z-10 w-full px-6 md:px-10 pb-24 pt-10 md:pt-16 flex justify-center">
        <div key={step.id} className="w-full max-w-[640px] step-enter">
          <h1 className="text-white font-display text-[28px] sm:text-[34px] md:text-[42px] leading-[1.12] font-semibold tracking-[-0.025em] text-center">
            {step.title}
          </h1>
          <p className="text-ink-dim mt-3 md:mt-4 text-[14px] md:text-[15px] leading-[1.6] text-center max-w-[520px] mx-auto">
            {step.subtitle}
          </p>

          <div className="mt-8 md:mt-10">
            {step.type === 'choice' && (
              <ChoiceList
                stepId={step.id}
                options={step.options}
                value={answers[step.id]}
                onChange={(v) => setField(step.id, v)}
                onAutoAdvance={goNext}
              />
            )}

            {step.type === 'multi' && (
              <MultiList
                options={step.options}
                values={answers[step.id]}
                onToggle={(opt) => toggleMulti(step.id, opt)}
              />
            )}

            {step.type === 'number' && (
              <NumberField
                value={answers[step.id]}
                onChange={(v) => setField(step.id, v)}
                placeholder={step.placeholder}
                onSubmit={goNext}
              />
            )}

            {step.type === 'text' && (
              <TextField
                value={answers[step.id]}
                onChange={(v) => setField(step.id, v)}
                placeholder={step.placeholder}
              />
            )}

            {step.type === 'info' && (
              <PersonalInfo
                answers={answers}
                errors={errors}
                onChange={setField}
              />
            )}
          </div>

          {/* primary CTA */}
          <div className="mt-9 md:mt-10">
            {step.type === 'info' ? (
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="cta-primary w-full"
              >
                {submitting ? 'Opening Calendly…' : 'Schedule Meeting →'}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                disabled={!isCurrentValid}
                className={`cta-primary w-full ${isCurrentValid ? '' : 'cta-disabled'}`}
              >
                Continue
              </button>
            )}

            {step.type === 'info' && (
              <p className="mt-4 text-[12px] text-white/45 text-center leading-[1.5]">
                After clicking <span className="text-white/70">Schedule Meeting</span>, a new tab
                opens with my calendar. Pick a slot that works — I'll see you there.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChoiceList({ stepId, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => {
        const selected = value === opt.id;
        return (
          <button
            type="button"
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`option-card group ${selected ? 'option-selected' : ''}`}
            aria-pressed={selected}
          >
            <span className="option-icon">
              {stepId === 'level' ? (
                <BarsIcon level={opt.bars} active={selected} />
              ) : (
                <RadioDot selected={selected} />
              )}
            </span>
            <span className="flex-1 text-left">
              <span className="block text-white text-[15px] md:text-[16px] font-semibold leading-tight">
                {opt.label}
              </span>
              {opt.sub && (
                <span className="block text-ink-dim text-[13px] md:text-[13.5px] mt-1 leading-snug">
                  {opt.sub}
                </span>
              )}
            </span>
            {selected && (
              <span aria-hidden className="option-check">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7.2l2.6 2.6L11 4.4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function MultiList({ options, values = [], onToggle }) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => {
        const selected = values.includes(opt.id);
        return (
          <button
            type="button"
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            className={`option-card ${selected ? 'option-selected' : ''}`}
            aria-pressed={selected}
          >
            <span className="option-icon">
              <CheckBox selected={selected} />
            </span>
            <span className="flex-1 text-left text-white text-[15px] md:text-[16px] font-semibold leading-tight">
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function NumberField({ value, onChange, placeholder, onSubmit }) {
  return (
    <div className="mx-auto max-w-[360px]">
      <div className="relative">
        <input
          type="number"
          inputMode="numeric"
          min={0}
          max={80}
          autoFocus
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSubmit?.();
          }}
          placeholder={placeholder}
          className="no-spinner w-full text-center text-white font-display text-[44px] md:text-[56px] font-semibold tracking-[-0.02em] bg-transparent border-0 border-b-2 border-white/15 focus:border-[#c4b5fd] focus:outline-none py-3 px-2 transition-colors placeholder:text-white/20"
        />
        <span className="block text-center text-white/45 text-[12px] mt-2 tracking-[0.18em] uppercase">
          Years
        </span>
      </div>
    </div>
  );
}

function TextField({ value, onChange, placeholder }) {
  return (
    <div className="mx-auto max-w-[520px]">
      <textarea
        rows={3}
        autoFocus
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full resize-none text-white text-[16px] leading-[1.55] bg-white/[0.04] border border-white/10 rounded-[14px] px-4 py-3.5 focus:border-[#c4b5fd] focus:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd]/30 transition-colors placeholder:text-white/35"
      />
      <p className="mt-3 text-[12px] text-white/45 text-center leading-[1.5]">
        No audition date yet? Tell me what you&rsquo;re aiming for anyway.
      </p>
    </div>
  );
}

function PersonalInfo({ answers, errors, onChange }) {
  return (
    <div className="flex flex-col gap-3.5">
      <FormField
        label="Full name"
        error={errors.fullName}
        errorText="Please enter your full name"
      >
        <input
          type="text"
          value={answers.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          placeholder="Anna Petrova"
          autoComplete="name"
          autoFocus
          className="form-input"
        />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-3.5">
        <FormField
          label="Email"
          error={errors.email}
          errorText="Please enter a valid email address"
        >
          <input
            type="email"
            value={answers.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="form-input"
          />
        </FormField>
        <FormField
          label="Age"
          error={errors.age}
          errorText="Required"
        >
          <input
            type="number"
            min={1}
            max={120}
            value={answers.age}
            onChange={(e) => onChange('age', e.target.value.replace(/[^0-9]/g, ''))}
            placeholder="—"
            inputMode="numeric"
            className="form-input no-spinner"
          />
        </FormField>
      </div>

      <FormField
        label="Country of residence"
        error={errors.country}
        errorText="Please select your country"
      >
        <div className="relative">
          <select
            value={answers.country}
            onChange={(e) => onChange('country', e.target.value)}
            className="form-input appearance-none pr-10 cursor-pointer"
          >
            <option value="" disabled>
              Select country…
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/55">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </FormField>

      <label
        className={`mt-1 flex items-start gap-3 cursor-pointer select-none rounded-[14px] px-4 py-3.5 border transition ${
          errors.agreeToTerms
            ? 'border-rose-400/60 bg-rose-400/5'
            : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05]'
        }`}
      >
        <span className="relative shrink-0 mt-[2px]">
          <input
            type="checkbox"
            checked={answers.agreeToTerms}
            onChange={(e) => onChange('agreeToTerms', e.target.checked)}
            className="peer sr-only"
          />
          <span
            className="block w-[18px] h-[18px] rounded-[5px] border transition"
            style={{
              borderColor: answers.agreeToTerms ? 'transparent' : 'rgba(255,255,255,0.25)',
              background: answers.agreeToTerms
                ? 'linear-gradient(160deg, #a48bff 0%, #6f4cff 100%)'
                : 'rgba(255,255,255,0.04)',
            }}
          />
          {answers.agreeToTerms && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              className="absolute left-[3px] top-[5px]"
            >
              <path d="M2 6.5l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="text-[13.5px] leading-[1.55] text-white/80">
          I agree to the{' '}
          <a href="/terms" target="_blank" className="text-[#fbd5cf] underline decoration-white/20 hover:decoration-[#fbd5cf]">
            terms
          </a>{' '}
          and{' '}
          <a href="/privacy" target="_blank" className="text-[#fbd5cf] underline decoration-white/20 hover:decoration-[#fbd5cf]">
            privacy policy
          </a>
          .
        </span>
      </label>
    </div>
  );
}

function FormField({ label, error, errorText, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-white/55">
        {label}
      </span>
      <div
        className={`rounded-[12px] transition ${
          error ? 'ring-1 ring-rose-400/60 rounded-[13px]' : ''
        }`}
      >
        {children}
      </div>
      {error && errorText && (
        <span className="text-[12px] text-rose-300/90">{errorText}</span>
      )}
    </div>
  );
}

/* ---------- Decorative icons ---------- */

function BarsIcon({ level = 1, active }) {
  const total = 5;
  return (
    <span className="inline-flex items-end gap-[3px] h-[20px]">
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < level;
        const height = 6 + i * 3;
        return (
          <span
            key={i}
            className="block w-[4px] rounded-[2px]"
            style={{
              height: `${height}px`,
              background: filled
                ? active
                  ? 'linear-gradient(180deg, #fbd5cf 0%, #c4b5fd 100%)'
                  : 'linear-gradient(180deg, #a48bff 0%, #6f4cff 100%)'
                : 'rgba(255,255,255,0.14)',
            }}
          />
        );
      })}
    </span>
  );
}

function RadioDot({ selected }) {
  return (
    <span
      className="block w-[18px] h-[18px] rounded-full"
      style={{
        border: selected ? '1px solid rgba(196,181,253,0)' : '1.5px solid rgba(255,255,255,0.22)',
        background: selected
          ? 'radial-gradient(closest-side, #fff 0% 28%, rgba(196,181,253,0) 32%), linear-gradient(160deg, #a48bff 0%, #6f4cff 100%)'
          : 'rgba(255,255,255,0.04)',
          transition: 'background 200ms, border-color 200ms',
      }}
    />
  );
}

function CheckBox({ selected }) {
  return (
    <span
      className="relative block w-[18px] h-[18px] rounded-[5px]"
      style={{
        border: selected ? '1px solid transparent' : '1.5px solid rgba(255,255,255,0.22)',
        background: selected
          ? 'linear-gradient(160deg, #a48bff 0%, #6f4cff 100%)'
          : 'rgba(255,255,255,0.04)',
        transition: 'background 200ms, border-color 200ms',
      }}
    >
      {selected && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          className="absolute left-[3px] top-[3px]"
        >
          <path d="M2 6.5l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}
