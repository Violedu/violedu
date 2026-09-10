# violedu.com — Site Structure & Copy

> **Note:** The site now sells a single program — **The 6-Week Audition Intensive**, a
> 1-on-1 audition & exam preparation program for violinists (built around the student's own
> repertoire, not a fixed piece). The Masterclass/pricing sections below predate that
> refactor and still describe an older multi-tier, Tchaikovsky-specific model; treat the
> `components/` as the source of truth until this doc is fully refreshed.

## Pages

```
violedu.com/              Main page
violedu.com/masterclass   Masterclass page
violedu.com/free-resources
violedu.com/about
```

---

## Global Navigation

```
[violedu logo]   Masterclass   Free Resources   About   [Book Free 30-Min Call — button]
```

---

## Main Page

**Stack:** Next.js (App Router), React, Tailwind CSS, Framer Motion
**Entry:** `app/page.js` — imports one component per section in order.

### Section order

```
Header
Hero
TrailerSection
WhyLearn
Instructor
FeaturedCourses
Testimonials
StillQuestions
Footer
```

---

### Global Navigation (`components/Header.jsx`)

```
[violedu logo]   Masterclass   Free Resources   About   [Book Free 30-Min Call — btn-violet]
```

- Sticky/fixed, transparent on load → `bg-[#050410]/65 backdrop-blur` after 24 px scroll
- Nav links: Masterclass → `/masterclass`, Free Resources → `#`, About → `#`
- Below 1000 px: hamburger icon (mobile menu not yet implemented)

---

### 1. Hero (`components/Hero.jsx`)

- Full-height section, dark bg `#050410` with layered purple radial blooms
- Centered instructor photo (`/hero_page_photo.png`), bottom-faded via mask gradient
- **Headline:** "Walk In *Audition-Ready*." (italic on `Audition-Ready`)
- **Sub-headline:** none — headline + single CTA. (Below: three stats — 10+ Years Coaching · 65K+ Violinists Worldwide · 700+ Violedu Subscribers.)
- **CTAs:** Primary `Book Free 30-Min Call` (btn-violet) · Secondary `See the Masterclass →` (text link → `/masterclass`)
- **Social proof:** 6 stacked profile photos + "10+ years coaching experience | Trusted by 65K+ violinists worldwide"

---

### 2. Trailer (`components/TrailerSection.jsx`)

- **Eyebrow:** "How It Works"
- **Headline:** "From Intermediate To Advanced."
- 16:9 video card (max 920 px): poster `/about_cover.jpg`, src `/trailer.mp4` (placeholder)
- Custom play-button overlay; native controls appear on play

---

### 3. The Problem (`components/WhyLearn.jsx`) `id="problem"`

- **Eyebrow:** "Is This You?"
- **Headline:** "Most violinists get stuck in the same four places."
- 2 × 2 grid of problem cards (icon + title + body):
  - The octave passages
  - The cadenza
  - Performance readiness
  - Previous lessons

---

### 4. Instructor (`components/Instructor.jsx`)

- **Eyebrow:** "Meet Your Instructor"
- **Headline:** "You're learning from someone who has performed it."
- Full-width instructor image (`/instructor.png`, 1000 × 516 aspect)
- Card below: title "Performed it. Taught it for 10+ years." + bio paragraph
- **CTA:** `YouTube →` (btn-peach, links to `#` — needs real URL before launch)

---

### 5. Program Preview (`components/FeaturedCourses.jsx`)

- **Eyebrow:** "Masterclass"
- **Headline:** "One concerto. Three ways in."
- **Callout:** diagnostic call as session zero
- 3-column card grid — each card has a hero plate, tier badge, session count, description, and "Learn More" (btn-peach → `/masterclass`):
  - **Tchaikovsky Single** — 1 session — circular badge
  - **Tchaikovsky Focus** — 4 sessions — hexagonal badge
  - **Tchaikovsky Mastery** — 12 sessions — star badge, "⭐ MOST POPULAR" tag, featured glow border
- **CTA below:** `See how the masterclass works →` → `/masterclass` (btn-peach)

---

### 6. Testimonials (`components/Testimonials.jsx`)

- **Eyebrow:** "Student Reviews"
- **Headline:** "What they say."
- Single 16:9 video card (max 920 px): poster `/testemonial_thumbnail.jpg`, src `/testimonial.mp4`
- Same play-button overlay pattern as Trailer section

---

### 7. Final CTA Band (`components/StillQuestions.jsx`)

- Dark rounded card (full-width within container)
- **Headline:** "Ready to finally perform the Tchaikovsky?"
- **Sub-text:** "Next intake: July 2026. 5 spots available — 2 already filled."
- **CTA:** `Book Free 30-Min Call →` (btn-peach)

---

### 8. Footer (`components/Footer.jsx`)

```
Masterclass          Resources / Company     Contact / Follow Us / Email signup
Tchaikovsky          Free Resources          contact@violedu.com
Masterclass (NEW)    About                   YouTube  Instagram
                     Terms                   [Join 700+ violinists — email form]
                     Privacy
```

- Bottom bar: violedu logo + © 2026 Violedu

---

---

## Masterclass Page (`/masterclass`)

*Single CTA throughout: `Book Your Free Diagnostic Call →` — one Calendly link. No direct enrollment.*

---

### 1. Hero (dark background)

**Tag line (small, above headline):**
> TCHAIKOVSKY VIOLIN CONCERTO IN D MAJOR, OP. 35

**Headline:**
> "The Tchaikovsky Masterclass"

**Tagline (immediately under headline):**
> *The 12-week 1-on-1 program that takes you from stuck on a passage to stage-ready on the full concerto.*

**Sub-headline:**
> 1-on-1 coaching for violinists who've been working on the Tchaikovsky for 3+ months and still feel it isn't ready. One passage, one movement, or the full concerto — you choose the depth.

**Instructor photo:** Large, confident, instrument in hand or at rest.

**CTA:** `Book Your Free Diagnostic Call →`

**Stats line (below CTA):**
> [X] violinists coached — [X] countries — 10+ years teaching the Tchaikovsky

---

### 2. The Promise

**Headline:** "You'll know exactly what to fix — and exactly what to practice. Every day."

- **By end of week 1:** a written diagnosis of every passage blocking you, with a drill for each. The guessing is over from day 7.
- **You don't design your own practice.** The Tchaikovsky Roadmap tells you what to work on, in what order, for how long, between every session.
- **You play toward a specific benchmark** we define together at the start — not a vague sense of "getting better."

---

### 3. Pricing Tiers

**Section note:**
> Not sure which tier is right for you? That's what the diagnostic call is for. Book it below — we'll figure it out together.

*No individual enroll buttons on any card. Single CTA repeated after this section.*

---

**Card 1 — Tchaikovsky Single (€80)**

> One session. One passage. One fix.

- ✓ 1× 45-min 1-on-1 video lesson
- ✓ You choose the passage (octave runs, cadenza, opening, any section)
- ✓ Specific technical diagnosis + a practice drill to fix it before the next session
- For: students who want to feel the teaching before committing, or who have one urgent problem before a lesson/exam

---

**Card 2 — Tchaikovsky Focus (€340)**

> One movement, fully coached.

- ✓ 4× 45-min 1-on-1 video lessons, structured as a mini-arc through your chosen movement
- ✓ A written practice plan for the movement covering the weeks between sessions
- ✓ WhatsApp/email support between the 4 sessions
- For: students stuck on one specific movement and not ready for a 12-week commitment; or students who want to complete one movement as a standalone performance piece

---

**Card 3 — Tchaikovsky Mastery: 12 Weeks to Performance-Ready ⭐ (€1200 / or 3×€450)**

> The full concerto. Performance-ready. Guaranteed.

- ✓ **12× weekly 45-min 1-on-1 video lessons** — structured movement-by-movement across the full concerto
- ✓ **The Tchaikovsky Roadmap** — personalized 12-week plan, broken by week, passage, and technical focus
- ✓ **Between-session video feedback on practice recordings** (returned within 48h) — expert eyes on every practice session, not just the weekly lesson
- ✓ **Week-11 mock performance** with full written report
- ✓ **12-week WhatsApp/email support**
- ✓ **The Performance-Ready Guarantee** — do the work and if you aren't performance-ready by week 12, coaching continues free until you are
- ✓ **BONUS:** The Performance Day Mental Blueprint
- ✓ **BONUS:** The 15-Minute Stage-Ready Recording Setup
- ✓ **BONUS:** The Practice Journal Template
- ✓ **BONUS:** The Personalized Daily Warm-Up Sheet
- ✓ **BONUS:** The Post-Program 30-Day Review

| Component | Value |
|---|---|
| 12× 45-min 1-on-1 sessions *(€80/session — same as the Single rate)* | €960 |
| The Tchaikovsky Roadmap (personalized 12-week plan) | €150 |
| Between-session video feedback (48h turnaround, 12 weeks) | €300 |
| Week-11 mock performance + written report | €150 |
| 12-week WhatsApp/email support | €120 |
| The Performance Day Mental Blueprint *(Bonus 1)* | €120 |
| The 15-Minute Stage-Ready Recording Setup *(Bonus 2)* | €80 |
| The Practice Journal Template *(Bonus 3)* | €60 |
| The Personalized Daily Warm-Up Sheet *(Bonus 4)* | €90 |
| The Post-Program 30-Day Review *(Bonus 5)* | €120 |
| **Total stacked value** | ~~**€2150**~~ |
| **Your investment** | **€1200** |

Or split into 3 monthly payments of €450 — begin now, pay as you progress.

---

**Two guarantees, stacked.**

> **The 14-Day Money-Back Guarantee** *(all tiers).* If you aren't satisfied after your first session, contact us and we'll refund your payment in full — no questions asked.

> **The Performance-Ready Guarantee** *(Mastery only).* Do the work — show up to every session, complete the assigned practice, submit your between-session recordings — and if you aren't performance-ready by week 12, I keep coaching you free of charge until you are.
>
> *Conditions: attended all 12 sessions, submitted weekly practice recordings, followed the written roadmap. If you did your part and we're not there, we keep going.*

**CTA (after cards):** `Book Your Free Diagnostic Call →`

---

### 4. Bonuses

**Headline:** "Five things included in Mastery that are not available separately."

---

**Bonus 1: The Performance Day Mental Blueprint**

> The week before a performance is where months of practice can unravel. This is a 45-minute structured system for the 7 days leading up to a performance: what to practice, what to stop practicing, how to manage physical symptoms on the day, and a specific pre-performance ritual built for musicians — not the generic breathing exercises athletes use. Built from everything I learned from my own performance mistakes and from coaching students through theirs.
>
> **Value: €120.** Included in Mastery.

---

**Bonus 2: The 15-Minute Stage-Ready Recording Setup**

> Adjudicators and audition panels watch the video as much as they listen to the audio. This guide shows exactly how to set up your phone, laptop, or basic camera in any room to produce a recording that sounds clean and looks professional — in 15 minutes. No special equipment required. The specific room placement, lighting, and audio settings that work in a normal home.
>
> **Value: €80.** Included in Mastery.

---

**Bonus 3: The Practice Journal Template**

> The single biggest predictor of whether a student stays on track between sessions is whether they're tracking what they actually practice — not what they meant to practice. This is a tracker (Notion + PDF versions) built around the 12-week Tchaikovsky roadmap: daily entries for which passages you worked on, what tempo you reached, what broke down, and what to bring to next week's session. The journal also doubles as the record I check before every lesson — so we never waste a session re-diagnosing something you already worked through.
>
> **Value: €60.** Included in Mastery.

---

**Bonus 4: The Personalized Daily Warm-Up Sheet**

> Generic violin warm-ups don't prepare you for *this* concerto. Octave work, third-movement runs, and bow control on the opening each demand a specific body-state before you start practicing them — and the warm-up should be built for the weaknesses we identified on the diagnostic call, not for some generic violinist. After your first session I'll send you a 10–15 minute daily warm-up routine (PDF), tuned to your specific technical issues, designed to be the first thing you play every day before touching the concerto itself.
>
> **Value: €90.** Included in Mastery.

---

**Bonus 5: The Post-Program 30-Day Review**

> What happens after week 12 is part of the work. Roughly 30 days after the program ends, we meet for one bonus session to review your actual audition recording or performance footage, identify what held up under pressure and what didn't, and decide what to keep practicing. This is the final piece of accountability that closes the loop between "ready" and "performed."
>
> **Value: €120.** Included in Mastery.

---

### 5. Curriculum — Week by Week (Mastery)

**Header:** "The Mastery roadmap — week by week"

| Block | Weeks | Focus |
|---|---|---|
| Foundation | 1–3 | First movement exposition; bow technique for the opening; intonation work. *By end of week 1: written diagnosis of every passage blocking you and a drill for each. The guessing is over.* |
| Technical mastery | 4–7 | Octave passages; cadenza passages; chromatic descent; third-movement runs |
| Integration | 8–9 | Full movement run-throughs; tempo targets; stamina |
| Performance prep | 10–11 | Stage strategy; mock performance; mental performance toolkit |
| Completion | 12 | Final session; readiness assessment; recording session guidance |

---

### 6. Final CTA Band

*Dark background:*

> **"[Month] intake: 5 spots — [X] filled."**
>
> The next Mastery cohort starts the week of [Date]. I take a maximum of 5 new students per intake.
>
> The diagnostic call is the only way in. It is free. It is 30 minutes. If it isn't a fit, I'll tell you.
>
> `Book Your [Month] Diagnostic Call →`

---

### 9. FAQ

**What happens at the diagnostic call?**
> It is 30 minutes on Zoom. You play a passage — any passage where you feel stuck — and I give you one specific technical fix before the call ends. You leave with something actionable regardless of whether you enroll. At the end, if I think the program is a fit, I'll tell you which tier makes sense and why. I'll also tell you honestly if it isn't the right time.

**Can I enroll directly without a call?**
> No. Every student starts with the free 30-minute diagnostic call. This lets me confirm you're at the right level, understand where you're stuck, and match you to the right tier. I only take 5 new students per month — the call is how I make sure each spot goes to someone the program will actually work for.

**Is this for beginners?**
> No — you should be able to read through the first movement before starting.

**I'm only stuck on one movement — which tier is right?**
> Bring that to the diagnostic call. It's likely Tchaikovsky Focus, but we'll confirm together.

**How quickly will I see results?**
> By the end of week 1 you'll have a written diagnosis of every passage blocking you and a drill for each. The first session ends your guessing.

**How much practice time is required between sessions?**
> Recommended 5–7 days of 20–40 minutes focused on the assigned passage. The roadmap tells you exactly what to work on — you don't have to figure it out.

**What does "performance-ready" mean exactly?**
> You can play the full concerto (or the tier you enrolled for) at performance tempo, cleanly, with stage-ready confidence. We define the specific benchmark at the start of your Mastery program.

**What if I miss a session?**
> One rescheduled session is allowed within the 12-week program with at least 48 hours' notice — we'll find a slot in the same or following week. Beyond that, missed sessions are forfeit. The Mastery roadmap is tightly sequenced, and chronic rescheduling breaks the structure that makes the program work.

**What if I get sick or injured during the program?**
> One program pause of up to 4 weeks is allowed, once during the 12 weeks, for illness or injury. The Performance-Ready Guarantee timeline extends by the length of the pause. Just message me as early as you can — we'll set a clear restart date.

**What happens after week 12?**
> Roughly 30 days after your final session, we meet for the Post-Program 30-Day Review (included in Mastery as Bonus 5) — one session to review your actual audition or performance footage, identify what held up under pressure, and decide what to keep practicing. After that, you can re-enroll in any tier as a returning student if you want continued coaching on a new piece or further work on the Tchaikovsky.

**What is the 14-day money-back guarantee?**
> All learning paths include a 14-day money-back guarantee. If you aren't satisfied after your first session, contact us and we will refund your payment in full — no questions asked.

**What is the Performance-Ready Guarantee on Mastery?**
> If you attend every session, complete the assigned between-session practice, and submit your weekly practice recordings, and you still aren't performance-ready at week 12 — I keep coaching you, free of charge, until you are. The guarantee is conditional on the work because the program only works if you do it. If you've done your part and we aren't there yet, we keep going.

---

## Urgency / Scarcity Model

- 5 spots per intake; two intakes per month
- Intake opens Monday, closes Friday, cohort starts following Monday
- Both final CTA bands include: spots available + spots filled + cohort start date
- Calendly event title: "Tchaikovsky Masterclass — [Month] Intake Diagnostic Call"
- Scarcity (5 spots) and urgency (cohort start date) are separate levers — both must appear together
