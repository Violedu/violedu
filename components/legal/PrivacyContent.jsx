import LegalDocument from './LegalDocument';

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: [
      'We collect information you provide directly when you book the free 30-minute call, enroll in the program, or subscribe to our newsletter. This may include your full name, email address, age, years of violin experience, country of residence, the audition or exam you are preparing for and the repertoire you would like to work on, and any details you share about your goals or current level.',
      'For payment-related steps, payment information is processed by our third-party payment provider; we do not store full card details on our servers.',
      'We use this information to process your enrollment and payments, communicate with you about scheduling, send your Audition Roadmap and program materials, and improve our platform and services. With your consent, we may also use your contact details to share updates about Violedu and related offerings. You can opt out of these communications at any time using the methods described below.',
    ],
  },
  {
    title: 'Choice and Opt-Out',
    body: [
      'Our website may offer you the choice to subscribe to communications when we collect information from you. You can always choose to remove yourself from any email list, thereby stopping future marketing communications.',
      'To unsubscribe, use the unsubscribe link in any marketing email, or send a message to contact@violedu.com requesting removal. Please note that we may still need to send you essential transactional emails related to your enrollment (scheduling, payment confirmations, program access) for as long as you are an active student.',
    ],
  },
  {
    title: 'Information Sharing and Disclosure',
    body: [
      'We do not sell, trade, or otherwise transfer your personally identifiable information to third parties for their marketing purposes. We share information only with service providers who help us operate the platform — for example, our payment processor, email and scheduling tools, and analytics provider — and only to the extent needed for them to perform their service.',
      'We reserve the right to disclose user information under specific circumstances. This may be undertaken when there is a reasonable basis to believe that disclosure is essential for the identification, contact, or initiation of legal proceedings against an individual who might be causing harm or interference, whether intentional or unintentional, to the site’s rights, property, other users, or any other party at risk of harm due to such activities. We may also be obligated to disclose personal information in compliance with lawful requests from public authorities, including instances where such disclosure is necessary to meet national security or law enforcement requirements.',
    ],
  },
  {
    title: 'Cookies and Analytics',
    body: [
      'We use a small number of cookies and similar technologies to keep the website functioning correctly and to understand how visitors use it in aggregate. This helps us improve the experience and decide which content to prioritize. We do not use this data to build advertising profiles of you.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We are committed to ensuring the security of your information. We implement a variety of security measures — including encrypted connections and access controls — to maintain the safety of your personal information. No method of transmission over the internet is 100% secure, but we work to protect your data in line with industry-standard practices.',
    ],
  },
  {
    title: 'Links to External Sites',
    body: [
      'We are not responsible for the content or practices of third-party websites linked from our platform — for example, our YouTube channel, Instagram profile, or external payment pages. We are also not responsible for any information that you might share with such linked websites. Please refer to each website’s respective privacy policy and practices before disclosing any information.',
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    body: [
      'We may update this privacy policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'If you have any questions or concerns about this privacy policy, please contact us at contact@violedu.com.',
    ],
  },
  {
    title: 'Your Acceptance of This Policy',
    body: [
      'By using this website, booking the free 30-minute call, or enrolling in any Violedu program, you agree to follow the rules and limitations stated in this privacy policy. If you do not agree with these rules, please do not use this site or enroll in the program.',
      'This privacy policy may be revised from time to time by updating this page. You are bound by any such revisions and should therefore periodically visit this page to review the current policy to which you are bound.',
    ],
  },
];

export default function PrivacyContent() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Violedu Privacy Policy."
      italicWord="Privacy"
      lastUpdated="June 4, 2026"
      intro="We acknowledge and value the privacy of our website visitors at violedu.com and of everyone using our associated services. This privacy statement explains what information we collect when visitors access the site or enroll in our programs, and how that information may be used. By using any services on this site, you agree to the terms of this privacy policy."
      sections={SECTIONS}
    />
  );
}
