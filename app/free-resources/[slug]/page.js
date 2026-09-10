import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResourceDetail from '@/components/free-resources/ResourceDetail';
import { resourcesData } from '@/components/free-resources/resourcesData';

export function generateStaticParams() {
  return Object.keys(resourcesData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const resource = resourcesData[params.slug];
  if (!resource) return {};
  return {
    title: resource.metaTitle,
    description: resource.metaDescription,
  };
}

export default function ResourcePage({ params }) {
  const resource = resourcesData[params.slug];
  if (!resource) notFound();

  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <ResourceDetail resource={resource} />
      <Footer />
    </main>
  );
}
