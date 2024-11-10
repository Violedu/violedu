import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./FAQ.module.css";

// Define the FAQDataSchema type directly in this file
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
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container disableGutters component="section" id="faq-accordion" className={styles.container}>
      {faqList.map((faq) => (
        <Accordion
          key={faq.params.id}
          expanded={expanded === faq.params.id}
          onChange={handleChange(faq.params.id)}
          className={styles.accordion}
          disableGutters // Removes internal padding
          elevation={0} // Disables box-shadow to let CSS handle it
          square // Ensures border radius only applies to the top and bottom edges
        >
          <AccordionSummary
            expandIcon={<ExpandMoreRounded className={styles.expandIcon} />}
          >
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
