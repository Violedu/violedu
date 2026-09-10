import BookingQuestionnaire from '@/components/book/BookingQuestionnaire';

export const metadata = {
  title: 'Book Your Free 30-Min Call — Violedu',
  description:
    'Answer a few quick questions so we can tailor your plan, then schedule your free 30-minute call.',
};

export default function BookPage() {
  return <BookingQuestionnaire />;
}
