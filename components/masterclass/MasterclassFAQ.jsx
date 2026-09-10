'use client';

import { useState } from 'react';
import Reveal from '../Reveal';

const faqs = [
  {
    q: 'Is 6 weeks really enough to get audition-ready?',
    a: 'It depends on one thing: can you already play through your audition program? If yes — six weeks at two sessions per week, with a personalized roadmap and between-session feedback, is enough to get from "can play through it" to audition-ready. If you\'re still learning the notes, this program isn\'t right for you yet. The free call is where we find out which is true for you.',
  },
  {
    q: 'What happens at the 30-minute call?',
    a: 'You play a passage — any passage where you feel stuck — and I give you one specific technical fix before the call ends. You leave with something actionable regardless of whether you enroll. At the end, if I think the program is a fit, I\'ll tell you and we\'ll map out your starting point. I\'ll also tell you honestly if it isn\'t the right time.',
  },
  {
    q: 'Can I enroll directly without a call?',
    a: 'No. Every student starts with the free 30-minute call. This lets me confirm you\'re at the right level and understand where you\'re stuck before we begin. I only take 5 students per intake — the call is how I make sure each spot goes to someone the program will actually work for.',
  },
  {
    q: 'Do I need to be at a specific level to apply?',
    a: 'Yes. This is for players at roughly diploma entry level who can already play through their audition program (rough is fine — the notes need to be there). It is not for beginners or for players learning their repertoire from scratch. The free call is where I verify this by listening to you play.',
  },
  {
    q: 'What if my audition is sooner than 6 weeks away?',
    a: 'Book the call anyway. We\'ll talk through whether the timeline is workable or whether a different approach makes more sense. Sometimes a compressed version with extra sessions is possible; other times I\'ll tell you honestly the timeline is too tight, and we\'ll prioritize what matters most for this cycle while planning the next.',
  },
  {
    q: 'Online lessons versus in-person — am I losing something?',
    a: 'At this level the limiting factor isn\'t proximity — it\'s feedback frequency. Here you get two sessions a week plus between-session video feedback: three expert touchpoints a week. Most in-person teachers offer one weekly lesson with no structured support between.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'By the end of Week 1 you\'ll have a written diagnosis of every passage blocking you and a drill for each. The first session ends your guessing.',
  },
  {
    q: 'How much practice time is required between sessions?',
    a: 'Plan on roughly 3–4 focused hours a day across the six weeks. With two sessions a week, the roadmap tells you exactly what to work on between each one — you don\'t have to figure it out.',
  },
  {
    q: 'What if I miss a session, get sick, or get injured?',
    a: 'One rescheduled session is allowed with at least 48 hours\' notice — we\'ll find a slot in the same or following week. For illness or injury, one program pause is allowed; the timeline simply extends by the length of the pause. Message me as early as you can and we\'ll set a clear restart date. The roadmap is tightly sequenced, so chronic rescheduling is what breaks it.',
  },
  {
    q: 'How does the guarantee work?',
    a: 'Every program is covered by a 30-day no-questions-asked money-back guarantee, valid from your first session. If within the first 30 days you don\'t feel you\'re getting massive value, just let me know and I\'ll refund your payment in full — no hassles, no hoops.',
  },
  {
    q: 'What happens after the program?',
    a: 'About 14 days after your audition or exam, we meet for the Post-Audition Debrief — one session to review your actual footage, identify what held up under pressure, and decide what to keep drilling. After that you can re-enroll for the next audition cycle or the next piece.',
  },
];

export default function MasterclassFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="section-pad relative">
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
          <p className="text-ink-dim text-[15px] mb-4">Still have a question?</p>
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
