'use client';

import { useState } from 'react';
import Reveal from '../Reveal';

const faqs = [
  {
    q: 'How is this different from the 6-Week Audition Intensive?',
    a: 'The Intensive is a structured program with a deadline: a personalized audition roadmap, 12 sessions mapped out for you, a Week-5 audition simulation, five bonuses, and a 30-day money-back guarantee — all built to take you from "can play through it" to audition-ready in six weeks. The custom plan strips that back to the essentials. There is no personalized roadmap, no bonuses, and no guarantee. What you get instead is freedom: you decide how many sessions you book, what each one covers, and when they happen. It is coaching on your terms rather than a program you enroll in.',
  },
  {
    q: 'Do I still start with a free call?',
    a: 'Yes. Every student begins with a free 30-minute call — a quick fit check so I can make sure pay-as-you-go sessions are right for where you are, and we figure out where to start. There’s no obligation, and you leave with one thing to work on whether or not you book.',
  },
  {
    q: 'How do I pay?',
    a: 'After your call, booking is simple: once you pick a slot, I email you a secure Stripe payment link to settle in advance of the session. One session, one payment — no package and no subscription.',
  },
  {
    q: 'How many sessions do I need?',
    a: 'As many or as few as you like. There is no minimum and no package to commit to. Some students book a single session to fix one specific thing; others book regularly over months. You are never locked in.',
  },
  {
    q: 'How does scheduling work?',
    a: 'You pick a time directly on my calendar — whatever fits your week. Teaching slots are limited, so the earlier you book, the more choice you have over the time.',
  },
  {
    q: 'What do I get between sessions?',
    a: 'Send me recordings of your practice and I’ll return video feedback within 48 hours — a second set of expert ears between your live sessions. You can also reach me by email or WhatsApp whenever a question comes up.',
  },
  {
    q: 'Do I need to be at a certain level?',
    a: 'This works best if you can already play through the music you want to work on. If you’re still learning the notes from scratch, a session can still help — the free call is where I listen to where you are and tell you honestly whether it’s the right time.',
  },
  {
    q: 'Can I switch to the full 6-Week Intensive later?',
    a: 'Absolutely. Plenty of students start with a few custom sessions and move into the Intensive once they want a structured, deadline-driven program with a roadmap and a guarantee. Whenever you’re ready, just say the word.',
  },
  {
    q: 'What if I need to reschedule?',
    a: 'Give me at least 48 hours’ notice and we’ll find another slot. Because each session is booked and paid individually, there’s no cohort to fall behind — rescheduling is simple.',
  },
  {
    q: 'Is there a guarantee?',
    a: 'Not in the way the 6-Week Intensive is — that program carries a 30-day money-back guarantee because it’s a larger commitment. The custom plan is pay-as-you-go, so you’re never risking more than a single session at a time. If it isn’t working for you, you simply stop booking.',
  },
];

export default function CustomPlanFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="section-pad relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 35% at 50% 0%, rgba(111,76,255,0.14) 0%, rgba(23,21,47,0) 65%)',
        }}
      />

      <div className="container-x">
        <div className="text-center mb-14 md:mb-16 max-w-[820px] mx-auto">
          <Reveal
            as="p"
            delay={0}
            className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]"
          >
            FAQ
          </Reveal>
          <Reveal
            as="h2"
            delay={150}
            className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.05] font-semibold tracking-[-0.02em]"
          >
            Questions, answered.
          </Reveal>
        </div>

        <Reveal delay={250} className="max-w-[860px] mx-auto">
          <ul className="space-y-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                question={item.q}
                answer={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300} className="mt-14 text-center">
          <p className="text-ink-dim text-[15px] mb-4">Ready whenever you are.</p>
          <a href="/book" className="btn-peach text-[14px]">
            Book Your Free 30-Min Call →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, open, onToggle }) {
  return (
    <li
      className="rounded-[18px] border border-white/8 overflow-hidden transition-[border-color] duration-300"
      style={{
        background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
        borderColor: open ? 'rgba(168,139,250,0.35)' : undefined,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left px-6 md:px-8 py-5 md:py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-[18px]"
      >
        <span className="text-white text-[16px] md:text-[18px] font-semibold leading-[1.4] tracking-[-0.005em]">
          {question}
        </span>
        <span
          className="shrink-0 grid place-items-center w-9 h-9 rounded-full text-white"
          style={{
            background: open
              ? 'linear-gradient(160deg, #fbd5cf 0%, #c4b5fd 50%, #6f4cff 100%)'
              : 'rgba(255,255,255,0.06)',
            border: open ? '1px solid rgba(168,139,250,0.4)' : '1px solid rgba(255,255,255,0.12)',
            transition: 'background 250ms, transform 250ms',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-6 md:pb-7">
            <div className="h-px w-full mb-5" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <p className="text-ink-dim text-[14px] md:text-[15px] leading-[1.7]">{answer}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
