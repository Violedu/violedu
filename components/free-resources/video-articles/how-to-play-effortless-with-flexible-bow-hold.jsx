'use client';

import Reveal from '../../Reveal';
import { ArticleSection, Callout } from '../articleKit';

// Article body for the Franco-Belgian bow-hold masterclass. Section ids match the
// `chapters` list in videosData.js. Text-only — no companion ebook.
export default function BowHoldArticleBody() {
  return (
    <>
      {/* Why */}
      <ArticleSection id="why-bowhold">
        <Reveal>
          <p className="article-lead">
            <span className="dropcap">S</span>ound is flexible, so your right hand
            has to be flexible too. Almost everything lives in the bow hand — tone,
            articulation, dynamics, the control of every stroke — and the bow hold
            is what makes the connection to the instrument feel <em>effortless</em>.
            That ease you see in great players on stage isn&rsquo;t luck; a stable,
            flexible hold is the first key to it.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools">
        <Reveal>
          <h2 className="article-h2">The Franco-Belgian School</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            There are several historical schools of bow hold — the Russian school of
            Leopold Auer (who taught Heifetz, Elman, and Milstein), the German hold
            of Spohr and Joachim, and the Franco-Belgian school of Viotti, de
            Bériot, and Ysaÿe. This last one, used by players like Perlman and
            Zukerman, is what we&rsquo;ll build here. None is simply right or wrong —
            but if you want a hold that truly serves you, this is a dependable place
            to start.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Thumb */}
      <ArticleSection id="thumb">
        <Reveal>
          <h2 className="article-h2">Start With the Thumb</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            The thumb is the foundation: it&rsquo;s the counter-pressure to the
            weight of the bow, so it needs its strongest point. Find it by standing
            the thumbnail edge on a table — in the middle it wobbles, but tilt it
            toward the index finger and it locks in. That same tilt makes the thumb
            naturally meet the middle and ring fingers, so the grip costs you no
            extra effort. Keep the joint slightly bent; that bend is the space
            you&rsquo;ll later use to extend and retract.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Placing */}
      <ArticleSection id="placing">
        <Reveal>
          <h2 className="article-h2">Placing the Fingers</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Learn the shape on a pencil first — a hexagonal one, because it mimics
            the bow — so you&rsquo;re not fighting the bow&rsquo;s weight yet. Open
            your hand, rest the pencil on the first joints of the middle and ring
            fingers, and set the thumb between them at its strong point, slightly
            bent, so the fingers form a circle. Relax, and the rest fall into place:
            the little finger curled on top, the index resting between its first and
            second joints.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            The frame should look beautiful and relaxed — everything within reach.
            One way to check it: the <em>walking down the street</em> test. Let the
            hand hang naturally at your side as if you&rsquo;re out for a walk, then
            place it on the pencil exactly as it was.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Roles */}
      <ArticleSection id="roles">
        <Reveal>
          <h2 className="article-h2">What Each Finger Does</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Transfer it to the bow and you feel the weight — but you don&rsquo;t need
            a tight grip. Once the bow is on the string, the string supports it; the
            fingers (with the wrist and arm) just regulate its natural weight. The{' '}
            <strong className="article-strong">thumb and little finger</strong> are
            the key pair: the thumb gives counter-pressure, the little finger lifts
            weight off and lets it back on, sharing that job with the index
            depending on where you are in the bow.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            The <strong className="article-strong">middle and ring fingers</strong>{' '}
            are the stabilizers — they hold the frame together and add body to the
            sound, especially in rich forte passages, so you&rsquo;re not forcing
            tone with a stiff arm or the index alone.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Flexibility */}
      <ArticleSection id="flexibility">
        <Reveal>
          <h2 className="article-h2">Flexibility in the Change</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Those fingers are always working — actively or passively — to shape
            sound, cushion string crossings, and articulate. Feel it on the pencil:
            hold it in front of you, support the hand with the other, and gently
            extend and retract all the fingers together; turn the pencil upside down
            to watch the thumb. Going down-bow, the index and thumb lead and the
            others follow; going up, the little finger starts the push and hands off
            through the ring and middle to the index.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <Callout kicker="Key insight">
            Don&rsquo;t overdo the motion. Retract only enough to feel fully in
            control; extend only to a natural-looking frame. Past that, you start
            gripping the bow by force — which wrecks your control and can eventually
            injure your hand.
          </Callout>
        </Reveal>
      </ArticleSection>
    </>
  );
}
