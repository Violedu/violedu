import LegalDocument from './LegalDocument';

const SECTIONS = [
  {
    title: 'Lesson Duration and Future Acceptance',
    body: [
      'Each individual session within the Violedu 6-Week Audition Intensive has a duration of 45 minutes and is delivered 1-on-1 over video. The program runs at two sessions per week — twelve sessions over six weeks. Purchasing the program or a set of sessions does not guarantee future enrollment, continuation, or re-acceptance. Decisions about subsequent sessions or re-enrollment are made separately and at the teacher’s discretion.',
    ],
  },
  {
    title: 'Student Responsibilities',
    body: [
      'Students are expected to attend punctually and adequately prepared. This entails instrumental practice between sessions, ensuring a stable internet connection, functional audio/video equipment, a charged device, and having all necessary sheet music ready.',
      'If rescheduling is needed, the student should provide a minimum 24-hour notice. Recording sessions without consent, or sharing any instructional material, practice plans, written feedback, recordings, or roadmap documents with third parties, is prohibited. Being late will not extend the standard 45-minute session duration.',
    ],
  },
  {
    title: 'Free 30-Minute Call',
    body: [
      'Booking the free 30-minute call does not guarantee immediate enrollment into the program. The call gives the teacher and the student an opportunity to discuss the student’s current level, goals, and the audition or exam repertoire they want to work on, and to ensure compatibility between the teacher’s methodology and the student’s needs.',
      'The call is conducted online and lasts approximately 30 minutes. The teacher reserves the right to recommend a different starting point, or to decline enrollment, if the program is not the right fit at this time.',
    ],
  },
  {
    title: 'Level and Repertoire Considerations',
    body: [
      'The program is built around the student’s own audition or exam repertoire — the pieces required for their conservatoire pre-screen, orchestral audition, diploma, or grade exam — and assumes the student can already play through that repertoire. It is intended for advanced players polishing prepared material to performance standard, not for learning new repertoire from scratch. Students who are unsure whether they are ready are encouraged to book the free 30-minute call so the teacher can assess fit and recommend the most suitable starting point.',
    ],
  },
  {
    title: 'Payment Processing',
    body: [
      'By enrolling, you authorize us, or a third-party payment service, to charge fees using your chosen payment method. If payments are processed by a third party, you agree to their terms and conditions, and we are not responsible for their actions or errors. The third-party processor may share your payment information with us. We reserve the right to change our payment processor or handle payments directly.',
      'The program may be paid in full or split into three monthly installments as described on the pricing page. By choosing the installment option, you authorize us to charge each installment on its scheduled date.',
    ],
  },
  {
    title: 'Credit Card Authorization',
    body: [
      'You may need to provide credit card details to complete your enrollment. By doing so, you authorize us to charge your card for your purchases, including any scheduled installment payments. Failure of a payment to process does not release you from your obligation to pay.',
    ],
  },
  {
    title: 'Rescheduling',
    body: [
      'Requests to reschedule a session must be made with a minimum 24-hour notice. Rescheduled sessions should be held within two weeks of the original date and are subject to the teacher’s availability.',
      'Valid reasons for rescheduling include physical injury (supported by evidence), health challenges (with a medical certificate), or mourning. Requests outside this window, without valid reasons, will not be accommodated, and the missed session will be considered completed.',
    ],
  },
  {
    title: 'Session Cancellation or Changes by the Teacher',
    body: [
      'The teacher may need to cancel or reschedule a session due to unforeseen circumstances or emergencies. In such cases, reasonable efforts will be made to reschedule the session at a mutually convenient time within the program window.',
    ],
  },
  {
    title: 'Ending the Agreement',
    body: [
      'The teacher reserves the right to terminate the agreement for several reasons, including failure to follow the program guidelines, mistreatment, payment issues, behavioral concerns, sharing of program materials with third parties, or other valid grounds.',
      'In the event of termination for these reasons, the student remains responsible for any payments already due. No further installment payments are required post-termination; however, any previously made payments will be retained as compensation for any inconvenience caused.',
    ],
  },
  {
    title: '30-Day Money-Back Guarantee',
    body: [
      'Each program includes a 30-day money-back guarantee, valid from the date of your first session. If you are not satisfied, contact us within 30 days and we will refund your payment in full — no questions asked.',
      'The guarantee does not cover cases where a student has violated these terms of service, breached confidentiality of program materials, or otherwise engaged in misconduct.',
    ],
  },
  {
    title: 'Intellectual Property and Program Materials',
    body: [
      'All program materials — including the Audition Roadmap, practice plans, written feedback, video recordings of sessions, warm-up sheets, journals, mental blueprint, recording setup guide, and any free resources — are the intellectual property of Violedu. They are licensed to you for personal, non-commercial use only.',
      'You may not redistribute, resell, republish, or share these materials with any third party. Recording a session, or any part of it, without explicit written consent is prohibited.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We may update these terms from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'If you have any questions or concerns about these terms, please contact us at contact@violedu.com.',
    ],
  },
  {
    title: 'Your Acceptance of These Terms',
    body: [
      'By using this website, booking the free 30-minute call, or enrolling in any Violedu program, you agree to follow the rules and limitations stated in these terms. If you do not agree with these rules, please do not use this site or enroll in the program.',
      'These terms may be revised from time to time by updating this page. You are bound by any such revisions and should therefore periodically visit this page to review the current terms to which you are bound.',
    ],
  },
];

export default function TermsContent() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Violedu Terms of Service."
      italicWord="Service"
      lastUpdated="June 28, 2026"
      intro="These terms govern your use of the Violedu website and your enrollment in the Violedu 6-Week Audition Intensive — the 1-on-1 audition and exam preparation program, the free 30-minute call, and the free resources. Please read them carefully before booking a call or enrolling."
      sections={SECTIONS}
    />
  );
}
