'use client';

import Reveal from '../../Reveal';
import { ArticleSection, Callout } from '../articleKit';

// Article body for the "make your violin speak" masterclass. Section ids match
// the `chapters` list in videosData.js. Text-only — the companion worksheet is a
// PDF with no extractable diagrams, so no figures are used.
export default function SoundArticleBody() {
  return (
    <>
      {/* Intro */}
      <ArticleSection id="make-it-speak">
        <Reveal>
          <p className="article-lead">
            <span className="dropcap">W</span>hy don&rsquo;t you sound like a pro
            yet? The honest answer is almost absurdly simple: music is a language,
            and great players make the instrument sound like a speaking{' '}
            <em>voice</em>. Every technical thing you practise is in service of
            that one goal — a tone that carries meaning, not just notes.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Across more than a decade of teaching conservatory-level students,
            I&rsquo;ve watched the same three things separate professionals from
            everyone else. None of them are secret — they&rsquo;re hiding in plain
            sight. I&rsquo;ll break each one down, show you what star performers
            actually do with it, and give you a way to practise it. The first is
            the most important, and the most overlooked.
          </p>
        </Reveal>
      </ArticleSection>

      {/* Sounding point */}
      <ArticleSection id="sounding-point">
        <Reveal>
          <h2 className="article-h2">The Sounding Point</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            The sounding point is the narrow strip of string between the bridge
            and the fingerboard where the bow actually touches. It&rsquo;s tiny,
            but it decides your tone before the left hand does anything. Finding
            the right spot is like finding the right tone of voice in a
            conversation — it&rsquo;s what makes your message land.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Carl Flesch mapped it as five contact points. At the bridge is{' '}
            <em>sul ponticello</em> — sharp and glassy. Just off the bridge the
            sound is at its most direct and powerful. The central point of the
            string gives the fullest resonance. Near the fingerboard the tone
            thins out, and over the fingerboard is <em>sul tasto</em> — soft and
            veiled. But the real skill isn&rsquo;t naming them; it&rsquo;s knowing{' '}
            <strong className="article-strong">when</strong> to use which.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Flesch gives three factors to choose by — and you can hear all of them
            if you compare Hilary Hahn and Janine Jansen in the opening of the
            Tchaikovsky concerto, two players reaching completely different places
            with the same notes. The first factor is{' '}
            <strong className="article-strong">bow-stroke length</strong>: long
            strokes want the bridge, fast whole-bow strokes want the fingerboard.
            The second is <strong className="article-strong">dynamic</strong>:
            forte lives near the bridge, piano near the fingerboard. The third is{' '}
            <strong className="article-strong">position</strong>: stay between the
            two down low, and move toward the bridge as you climb.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <Callout kicker="The fix nobody wants">
            Most players — even advanced ones — are quietly afraid of the bridge,
            because the sound is harder to control there. Check your &ldquo;white
            rosin mark&rdquo;: if it always sits near the fingerboard, that&rsquo;s
            you. Train to be comfortable at the bridge — it&rsquo;s where the tone
            stays direct and clear over a full orchestra.
          </Callout>
        </Reveal>
      </ArticleSection>

      {/* Intonation */}
      <ArticleSection id="intonation">
        <Reveal>
          <h2 className="article-h2">Intonation</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            Tape this to your case, from Jascha Heifetz: &ldquo;I do not always
            play in tune; I just fix it quicker than anyone else.&rdquo; Everyone
            plays out of tune. Professionals simply correct faster. Intonation
            isn&rsquo;t about being perfect — it&rsquo;s about how fast you react.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Three steps make that reaction possible, and the third changes
            everything. First, a{' '}
            <strong className="article-strong">stable left-hand frame</strong>:
            keep the centre of gravity between your second and third fingers and
            let the thumb, wrist, and elbow follow it into every position. Second,{' '}
            <strong className="article-strong">finger placement</strong>: fingers
            hover over the string in a ready position and fall with weight, not
            force — force is inconsistent, and it chokes the resonance.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            The third step is the quiet secret: build your intonation around the{' '}
            <strong className="article-strong">
              sympathetic vibration of the open strings
            </strong>
            . Tune your G, D, A, and E notes until the whole instrument rings,
            then fit everything else around that. Your pitch locks to the nature
            of the violin first, and only then adjusts to the pianist or the
            orchestra. It&rsquo;s exactly the ringing intonation you hear from
            Augustin Hadelich and Clara-Jumi Kang in the Brahms.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <Callout kicker="Key insight">
            Practise it slowly, a few notes at a time, no vibrato — lots of bow,
            light pressure — just hunting for the ring. Take a whole piece through
            this once and the sound becomes addictive.
          </Callout>
        </Reveal>
      </ArticleSection>

      {/* Articulation */}
      <ArticleSection id="articulation">
        <Reveal>
          <h2 className="article-h2">Bow Articulation</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="article-p">
            The last aspect is how pros make the language <em>clear</em>. They
            articulate letters, words, and sentences — notes, phrases, and
            finished musical thoughts. The idea that changed my own playing: look
            at every single note from three angles — its attack, its development,
            and its ending. Hear a note that way and your whole articulation
            sharpens.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            There are three steps, easiest to hardest. First, read the
            articulation already written in the score — it lives in the spaces
            between the notes. Second, decide the attack each stroke needs; legato,
            spiccato, and martelé all begin differently. Third — the hard one —
            make clean transitions between them, shaped by style and taste.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            Compare Maria Dueñas and Guido Sant&rsquo;Anna in the opening of
            Lalo&rsquo;s <em>Symphonie espagnole</em> and you&rsquo;ll hear two
            players making opposite choices about where to be strict and where to
            soften — both completely convincing.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="article-p">
            To train it, try what I call <em>Stop and Go</em>: map every gap
            between strokes, then play and stop at each change of articulation,
            using the pause to read and prepare the next attack before you finally
            smooth the transitions. You can&rsquo;t articulate a musical thought
            you haven&rsquo;t first seen on the page.
          </p>
        </Reveal>
      </ArticleSection>
    </>
  );
}
