// FAQList.tsx
import { useEffect, useRef, useState } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import styles from "./FAQList.module.css";
import FAQ from './FAQ';

const faqData = [
  {
    params: {
      id: "faq-1",
      question: "Is Violedu right for me?",
      answer: `
        Violedu is perfect for intermediate and advanced violinists who feel stuck 
        and want to elevate their performance. Whether you’re preparing for a recital, 
        audition, or competition—or just want to refine your technique—we offer a 
        structured, personalized approach to help you achieve your goals. 
        Our platform is ideal for players ready to commit to meaningful improvement 
        and dive deep into their artistry.
      `,
    },
  },
  {
    params: {
      id: "faq-2",
      question: "What makes Violedu better than other violin lesson platforms?",
      answer: `
        Most platforms focus on beginner basics or general tips, leaving advanced players stuck without clear progress. 
        Violedu is different. We’re designed for intermediate and advanced violinists ready to break through a plateau 
        and prepare for recitals, auditions, or competitions.
  
        With tailored plans—Single, Intensive, or Mastery—we provide personalized lessons, progress tracking, and 
        recorded video feedback to ensure steady improvement. Beyond technique, we help you dive into the music itself, 
        mastering phrasing, interpretation, and efficient practice strategies. Mock recitals and audition simulations 
        prepare you for real-world performances.
  
        Led by Kalina, an experienced soloist and teacher with a Ph.D. in musical arts, Violedu combines academic depth 
        with practical artistry.
      `,
    },
  },
  {
    params: {
      id: "faq-3",
      question: "How does the free assessment session work?",
      answer: `
        In this 30-minute online session, we’ll get to know your goals, skill level, 
        and what you want to achieve. It’s a chance to map out the best path forward for you.
  
        This session also lets us assess your proficiency and ensure our teaching style 
        aligns with your needs. The goal is to create the right fit because tailored 
        guidance leads to the best progress.
  
        Please note, an invitation to an assessment session doesn’t guarantee enrollment. 
        If it’s not the right match, we may suggest alternatives.
      `,
    },
  },
  {
    params: {
      id: "faq-4",
      question: "How long are the lessons?",
      answer: "Each individual lesson has a duration of 45 minutes.",
    },
  },
  {
    params: {
      id: "faq-5",
      question: "Is Violedu good for beginners?",
      answer: `
        No, Violedu is not designed for beginners. We believe beginners benefit most 
        from hands-on, in-person instruction to establish foundational skills. 
  
        Our programs are specifically tailored to intermediate and advanced violinists 
        who already have a solid technical base and want to focus on unlocking their 
        full potential for the stage or their next performance.
      `,
    },
  },  
  {
    params: {
      id: "faq-6",
      question: "Is Violedu good for intermediate and advanced violinists?",
      answer: `
        Absolutely. Violedu is built for violinists who’ve hit a plateau and are ready to level up. 
        Whether you’re struggling with a particular piece, preparing for an audition, or working toward 
        long-term mastery, our intensive and mastery plans are tailored to meet your needs.
  
        Our structured lessons, personalized feedback, and mock recitals give intermediate and advanced 
        players the tools to break through barriers and achieve consistent progress.
      `,
    },
  },  
  {
    params: {
      id: "faq-7",
      question: "How does the 14-day money back guarantee work?",
      answer: "We offer a 14-day money back guarantee. If you’re not satisfied with your progress in the first 14 days of your chosen learning path, we will give you your money back - no questions asked.",
    },
  },
  {
    params: {
      id: "faq-8",
      question: "What are my payment options?",
      answer: "Payments are securely processed through PayPal and Stripe, and you’ll receive an email receipt immediately after purchase.",
    },
  },
];

const FAQList: NextPage = () => {
  const introTitleRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && introTitleRef.current && !hasAnimatedTitle) {
          animate(introTitleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
          setHasAnimatedTitle(true); // Set the flag to true after the animation runs
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (introTitleRef.current) {
      observer.observe(introTitleRef.current);
    }

    return () => {
      if (introTitleRef.current) {
        observer.unobserve(introTitleRef.current);
      }
    };
  }, [hasAnimatedTitle]);

  return (
    <div className={styles.faqlist}>
      <div className={styles.frame}>
        <div className={styles.title}>
          <div
            className={styles.introTitle}
            ref={introTitleRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }}
          >
            Frequently Asked Questions.
          </div>
        </div>
        {/* Render the FAQ component and pass the hardcoded faqData as a prop */}
        <FAQ faqList={faqData} />
      </div>
    </div>
  );
};

export default FAQList;
