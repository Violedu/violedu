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
      question: "How many team members can I invite?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
  },
  {
    params: {
      id: "faq-2",
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
  },
  {
    params: {
      id: "faq-3",
      question: "How do I reset my password?",
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
  },
  {
    params: {
      id: "faq-4",
      question: "Can I cancel my subscription?",
      answer: "Yes! Send us a message and we'll process your request no questions asked.",
    },
  },
  {
    params: {
      id: "faq-5",
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
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
