'use client';

import Reveal from '../../Reveal';
import { ArticleSection, Callout } from '../articleKit';

// Article body for the "5 ways to learn music faster" masterclass. Section ids
// match the `chapters` list in videosData.js. Text-only — the companion
// worksheet is a PDF with no extractable diagrams.
export default function MemoryArticleBody() {
  return (
    <>
      {/* Intro */}
      <ArticleSection id="memory-slip">
        <Reveal>
          <p className="article-lead">
            <span className="dropcap">A</span> heart-stopping memory slip on stage
            — everyone has had one, and nobody wants it back. The good news is that
            memory isn&rsquo;t a single thing you either have or you don&rsquo;t.
            It&rsquo;s <em>visual</em>, <em>analytical</em>, and{' '}
            <em>muscular</em>, and the players who never freeze simply build all
            three on purpose.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Here are five ways the pros do it. Work through them while you&rsquo;re
            learning a piece — not the week before the concert — and the stage
            stops being somewhere you&rsquo;re afraid to forget.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Tip 1 */}
      <ArticleSection id="original-score">
        <Reveal>
          <h2 className="article-h2">1 · Use the Original Score</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Visual memory is one of the strongest you have. Looking at the page,
            you absorb far more than the notes — the patterns, the markings, the
            slightly coloured paper, even the wrinkles a score picks up over years.
            A real edition makes the music feel alive in a way a black-and-white
            printout never does, and that texture becomes part of what you
            remember.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            I learned this the hard way. Two weeks before a concert I got the call
            to step in and play the Tchaikovsky — a monstrosity of a piece — and I
            was on a train with no score, practising from something I&rsquo;d
            pulled off the internet. It was a nightmare: none of my fingerings,
            none of the structure I knew, none of the familiar marks. The moment I
            got home to my own score, everything fell back into place. Whenever you
            can, find your real edition first.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Tip 2 */}
      <ArticleSection id="fingerings">
        <Reveal>
          <h2 className="article-h2">2 · Write Fingerings in Early</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Choose your fingerings carefully — the ones that are comfortable{' '}
            <em>and</em> serve your musical idea — and write every one of them in
            before you start memorizing. On stage your mind will sometimes recall a
            single number, and that number will save you. There are famous spots in
            Bach&rsquo;s fugues where one remembered shift is the difference
            between carrying on and looping back to the beginning forever.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Do this first, and treat any later change as a rare exception.
            Re-learning a fingering you&rsquo;ve already memorized costs far more
            than getting it right once.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Tip 3 */}
      <ArticleSection id="structure">
        <Reveal>
          <h2 className="article-h2">3 · Divide and Conquer</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Before you memorize a note, map the piece. Find the big shapes —
            exposition, development, recapitulation — or, if the form is different,
            the themes and how they connect. In variations, track the theme&rsquo;s
            raw material through each one; in a fugue, mark every return of the
            subject. That map is what lets you orient instantly if something goes
            wrong and pick up cleanly from the next section.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            It also tells you where to spend your time: the hardest sections get
            the most of it. Listening to the piece while following the score speeds
            this up — you hear the other voices, where your solo enters, how it
            answers the accompaniment — and those connections become the hooks your
            memory hangs on.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Tip 4 */}
      <ArticleSection id="movement">
        <Reveal>
          <h2 className="article-h2">4 · Memorize the Movement</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Muscle memory isn&rsquo;t only in your fingers. It&rsquo;s in your whole
            body — how you shape the end of a phrase, when you breathe, when you
            lean in (always because the music asks, never to look dramatic). The
            catch is that this memory is trained unconsciously, which is exactly
            why it&rsquo;s the first to vanish when you come back to a piece. So
            don&rsquo;t trust your hands — go back to the score.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <Callout kicker="Try this">
            Strengthen muscle memory by pairing it with your ear: away from the
            instrument, move and place your fingers as if playing while you hear
            the part in your head. On a train, on a walk, anywhere. Get through the
            whole piece like that and you&rsquo;ll have zero slips on stage.
          </Callout>
        </Reveal>
      </ArticleSection>

      {/* Tip 5 */}
      <ArticleSection id="slow-practice">
        <Reveal>
          <h2 className="article-h2">5 · Practice Slow, in Small Pieces</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            To take in every detail accurately, be kind to your body and mind:
            don&rsquo;t force full tempo on the first pass, even if you&rsquo;ve
            heard the piece a thousand times. Fill your memory gradually. Your first
            job is every note correct — rushing guarantees mistakes, and a repeated
            mistake takes ten times longer to undo.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Work in small, musically finished units — a phrase, a repeatable
            passage, a theme. How small is up to you. Then combine every kind of
            memory toward the score, because on stage every scrap of information
            helps.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            And start early. If you do slip despite the work, don&rsquo;t dwell on
            it — some of the most moving performances in history had wrong notes in
            them. Pour your heart into the piece and the audience will remember that
            long after they&rsquo;ve forgotten one or two human mistakes.
          </p>
        </Reveal>
      </ArticleSection>
    </>
  );
}
