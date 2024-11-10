// FAQ.tsx
import { ExpandMoreRounded } from "@mui/icons-material";
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
  const faqRefs = useRef<HTMLDivElement[]>([]); // Array of refs for FAQ items

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    faqRefs.current.forEach((faqRef, index) => {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              faqRef,
              { opacity: [0, 1], y: [20, 0] },
              { duration: 0.6, delay: index * 0.15 } // Staggered delay
            );
            observer.unobserve(faqRef); // Stop observing once animated
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      if (faqRef) observer.observe(faqRef);
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
        >
          <AccordionSummary expandIcon={<ExpandMoreRounded className={styles.expandIcon} />}>
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
