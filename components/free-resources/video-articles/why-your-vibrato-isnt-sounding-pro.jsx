'use client';

import Reveal from '../../Reveal';
import { ArticleSection, SheetFigure, Callout } from '../articleKit';

// Article body for the vibrato masterclass video. Section ids match the
// `chapters` list in videosData.js.
export default function VibratoArticleBody() {
  return (
    <>
      {/* Intro */}
      <ArticleSection id="one-technique">
        <Reveal>
          <p className="article-lead">
            <span className="dropcap">M</span>ost players treat vibrato as a
            single trick — one shake of the hand they switch on and hope for the
            best. That belief is exactly what keeps their playing sounding like a
            student. Vibrato isn&rsquo;t one technique. It&rsquo;s a coordinated
            process, and it&rsquo;s the single biggest contributor to the sound
            people recognise as <em>yours</em>. When one part of it is off, the
            whole thing collapses.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            For this masterclass I went back to what the great pedagogues — Carl
            Flesch, Leopold Auer, Ivan Galamian — actually taught, and studied
            how today&rsquo;s soloists shape their signature sound. It comes down
            to four elements. Master them and vibrato stops being a nervous
            wobble and starts being a voice.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Types */}
      <ArticleSection id="types">
        <Reveal>
          <h2 className="article-h2">The Three Types of Vibrato</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Relying on one type of vibrato is like painting with a single brush.
            You can cover the canvas, but you can&rsquo;t shade, blend, or create
            detail. Arm, hand, and finger vibrato each give you a different colour
            — and the point is to choose that colour on purpose.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            <strong className="article-strong">Arm vibrato</strong> starts in the
            forearm, the impulse travelling toward your face like a small shift.
            It&rsquo;s your power source — the one you reach for in double stops,
            high positions, and anywhere the sound has to carry over an
            orchestra. To feel it in isolation, lock the wrist toward the scroll
            and swing the arm in an even rhythm: two, three, four, then six pulses
            per beat.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <SheetFigure
            src="/vibrato_arm_swings.png"
            caption="Even swings — practise in twos, threes, fours, and sixes per beat, first without a metronome."
            ratio="650 / 220"
          />
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            <strong className="article-strong">Hand vibrato</strong> swings from a
            still arm, the hand dropping back from the wrist while the fingertip
            keeps its place. This is the singing one — the lyrical, vocal quality
            that carries a long melodic line.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            <strong className="article-strong">Finger vibrato</strong> is the
            smallest, driven from the base knuckle while the hand stays almost
            passive. It&rsquo;s what creates the illusion of vibrato in fast
            passages where a wider motion simply isn&rsquo;t possible.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Intonation */}
      <ArticleSection id="intonation">
        <Reveal>
          <h2 className="article-h2">Vibrato &amp; Intonation</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            You&rsquo;ve been told vibrato fixes intonation. It doesn&rsquo;t.
            Vibrato can save your pitch or quietly destroy it — and the
            difference is whether you know what pitch your vibrato is actually
            creating.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            The clearest model is to place the note perfectly in tune first, then
            roll the finger backward toward the flat side so the pitch always
            returns home to the note. The listener hears exactly where you mean to
            be.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            None of that works without an ear that refuses to accept out-of-tune.
            Flesch called the practice behind it the <em>attack of desperation</em>:
            play scales and études slowly, without vibrato, checking every note
            against open strings until inaccuracy genuinely bothers you. It feels
            worse before it feels better — that discomfort is you finally hearing
            what you used to ignore.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <Callout kicker="Key insight">
            Picture the fingertip glued to the string by a single tiny dot — not
            the whole pad. That dot keeps the pitch anchored while the hand stays
            free to move.
          </Callout>
        </Reveal>
      </ArticleSection>

      {/* Dynamics */}
      <ArticleSection id="dynamics">
        <Reveal>
          <h2 className="article-h2">Vibrato &amp; Dynamics</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Here&rsquo;s where most sounds fall apart: the moment the music gets
            loud, the tone hardens; the moment it gets soft, it drains away. That
            happens when you treat volume and vibrato as separate jobs — bow for
            one, hand for the other.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            They&rsquo;re not separate. They&rsquo;re two halves of a single
            expressive unit, split between your two arms. As the dynamic grows,
            vibrato grows with it — wider, faster, more intense. As it softens,
            vibrato narrows, slows, and holds back. If your vibrato is weak the
            bow compensates by pressing, and the sound gets crushed. A strong
            vibrato keeps the bow elastic.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Even your bow stroke shapes it. A <em>martelé</em> stroke is urgent,
            and the left hand matches that urgency automatically. A clean{' '}
            <em>portato</em> invites motion, and the vibrato opens up on its own.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <div className="grid sm:grid-cols-2 gap-4 mt-7">
            <SheetFigure
              src="/vibrato_martele_example.png"
              caption="Martelé — urgent, accented strokes pull a faster vibrato from the hand."
              ratio="520 / 150"
              inGrid
            />
            <SheetFigure
              src="/vibrato_portato_example.png"
              caption="Portato — a soft, singing stroke invites a gentle, continuous vibrato."
              ratio="520 / 150"
              inGrid
            />
          </div>
        </Reveal>
      </ArticleSection>

      {/* Style */}
      <ArticleSection id="style">
        <Reveal>
          <h2 className="article-h2">Vibrato &amp; Style</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            The last mistake is the most common: vibrato on every note, all the
            time. Used that way it isn&rsquo;t expression — it&rsquo;s a habit,
            and it flattens the music. Think of vibrato as a volume knob for
            emotion, not an on/off switch.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            In Mozart, clarity is everything: a narrow vibrato and a clean tone
            keep the texture transparent. Brahms wants the opposite — a wide, deep
            vibrato to carry a dense, singing tone. Beethoven lives on contrast,
            and a passage marked to fade and dissolve is ruined by a standard
            melodic wobble. In Bach, vibrato isn&rsquo;t a rule at all; it&rsquo;s
            a decision about whether it clarifies the counterpoint or clouds it.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Same player, different composer, and the colour changes completely —
            while the voice underneath stays unmistakably yours. That&rsquo;s the
            whole point. When you stop treating vibrato as constant, style finally
            has room to speak.
          </p>
        </Reveal>
      </ArticleSection>
    </>
  );
}
