'use client';

import Link from 'next/link';
import Reveal from '../../Reveal';
import { ArticleSection, Callout } from '../articleKit';

// Article body for the smooth-bow-change masterclass. Section ids match the
// `chapters` list in videosData.js. Text-only — no companion ebook.
export default function BowChangeArticleBody() {
  return (
    <>
      {/* Why */}
      <ArticleSection id="why-smooth">
        <Reveal>
          <p className="article-lead">
            <span className="dropcap">I</span>f your bow changes aren&rsquo;t
            smooth, two fundamentals of right-hand technique are usually missing:
            keeping the bow travelling <em>straight</em>, and understanding what
            actually happens at the moment of the change — at the frog and at the
            tip. They&rsquo;re more connected than they look, and together
            they&rsquo;re what give you real control over your sound.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            A bow change gives you away through the sound: the intensity has to
            stay even, or the listener hears the seam. Our first job as players is
            to enhance the music, never disrupt it — that&rsquo;s what earns a
            standing ovation. Here&rsquo;s how the right hand makes the change
            disappear.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Posture */}
      <ArticleSection id="posture">
        <Reveal>
          <h2 className="article-h2">Posture: The Four Elements</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Everything starts with four parts of the arm working together. The{' '}
            <strong className="article-strong">shoulder</strong> stays relaxed —
            think of gently pulling it down; tension here brings pain and a forced,
            shallow tone. The <strong className="article-strong">elbow</strong>{' '}
            sits at the level of the string you&rsquo;re on, never higher than the
            wrist and never hovering over the violin, or the sound turns artificial
            and you lose contact with the string.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            The <strong className="article-strong">wrist</strong>, level with the
            elbow, is the hinge between the big arm and the small finger movements
            — it has to pass motion along as evenly as possible. And the{' '}
            <strong className="article-strong">fingers</strong> stay relaxed and
            responsive, acting as a cushion, especially at the hardest place of
            all: the frog.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Direction */}
      <ArticleSection id="direction">
        <Reveal>
          <h2 className="article-h2">Changing Direction in Four Moves</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Keeping the bow straight through a change breaks down into four small
            movements. Starting at the frog, going down: first the arm opens out in
            front of you; then the elbow opens; then the wrist slightly pronates;
            and finally the fingers extend to hold the bow on its straight path.
            Going up, reverse it — fingers, wrist, elbow, arm.
          </p>
        </Reveal>
      </ArticleSection>

      {/* The change */}
      <ArticleSection id="the-change">
        <Reveal>
          <h2 className="article-h2">The Change at Frog &amp; Tip</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            The frog is the tricky end, because you&rsquo;re managing the heaviest
            part of the bow. There are two ways to handle it. The first is the{' '}
            <strong className="article-strong">cushion</strong>: arrive with a
            relaxed wrist and fingers and let their natural circular motion make the
            turn — a slight, passive action that follows the non-stop motion rather
            than forcing it. The second is the{' '}
            <strong className="article-strong">whole-arm change</strong>: arrive at
            a fixed frame — fingers already retracted, wrist parallel to the elbow —
            and let the whole arm make the turn.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            At the tip, keep the fingers passive and pronate the hand to match your
            dynamic so the sound doesn&rsquo;t drop. The trick is to feel as if
            you&rsquo;re still going <em>up</em> as you turn down — fooling your mind
            into a seamless change of direction.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Exercises */}
      <ArticleSection id="exercises">
        <Reveal>
          <h2 className="article-h2">Three Exercises</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Do these in front of a mirror so you can catch every detail.{' '}
            <strong className="article-strong">One:</strong> the reset — lift the
            bow and make a big circle in the air to land in the correct frame at the
            frog (relaxed shoulder, elbow and wrist level with the string) until you
            can arrive there without thinking.{' '}
            <strong className="article-strong">Two:</strong> isolate each motion —
            open the arm to a 90° angle at the elbow, then open from the elbow, then
            the change at the tip, careful not to break the wrist (the fingers
            should already be extended to keep it straight).{' '}
            <strong className="article-strong">Three:</strong> rest your upper arm
            lightly against a wall to stop the elbow travelling too far — the most
            common cause of a crooked bow.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Sing & breathe */}
      <ArticleSection id="sing-breathe">
        <Reveal>
          <h2 className="article-h2">Bonus: Sing &amp; Breathe</h2>
        </Reveal>
        <Reveal delay={40}>
          <Callout kicker="Don't skip this">
            Sing the phrase and breathe with it. Your musicality will never let you
            sing a line and chop it up for a bow change — so once you can hear the
            phrase the way you feel it, your bow follows. Exhale through the change
            at the frog and watch how much smoother it gets.
          </Callout>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            None of this fully clicks without a stable, flexible bow hold
            underneath it. If yours needs work, start with the{' '}
            <Link
              href="/videos/how-to-play-effortless-with-flexible-bow-hold"
              className="text-[#fbd5cf] underline underline-offset-4 decoration-white/30 hover:decoration-[#fbd5cf] transition"
            >
              Franco-Belgian bow hold
            </Link>
            .
          </p>
        </Reveal>
      </ArticleSection>
    </>
  );
}
