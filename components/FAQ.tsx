// FAQ.tsx
import { AddCircle } from "@mui/icons-material"; // New icon import
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { animate } from "motion"; // Import animate function
import styles from "./FAQ.module.css";

type FAQDataSchema = {
  params: {
    id: string;
    question: string;
    answer: string;
  };
}[];

type Props = {
  faqList: FAQDataSchema;
};

const FAQ = ({ faqList }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false); // No item expanded by default
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]); // Allow null values

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
  
    faqRefs.current.forEach((faqRef, index) => {
      if (!faqRef) return; // Skip if the ref is null
  
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              faqRef, // Safe to use because of the null check
              { opacity: [0, 1], y: [20, 0] },
              { duration: 0.6, delay: index * 0.15 } // Staggered delay
            );
            observer.unobserve(faqRef); // Stop observing once animated
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      observer.observe(faqRef); // Safe to use because of the null check
      return () => observer.disconnect();
    });
  }, []);  

  return (
    <Container disableGutters component="section" id="faq-accordion" className={styles.container}>
      {faqList.map((faq, index) => (
        <Accordion
          key={faq.params.id}
          expanded={expanded === faq.params.id}
          onChange={handleChange(faq.params.id)}
          className={styles.accordion}
          disableGutters
          elevation={0}
          square
          ref={(el) => faqRefs.current[index] = el} // Assign ref to each FAQ item
          style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial animation state
          TransitionProps={{
            timeout: {
              enter: 500, // Slow down expand animation
              exit: 500,  // Adjust collapse speed (optional)
            },
          }}
        >
          {/* Replace ExpandMoreRounded with AddCircle */}
          <AccordionSummary expandIcon={<AddCircle className={styles.expandIcon} />}>
            <Typography className={styles.questionText}>{faq.params.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.answerText}>{faq.params.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
