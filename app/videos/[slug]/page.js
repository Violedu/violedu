import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoArticle from '@/components/free-resources/VideoArticle';
import { videosData } from '@/components/free-resources/videosData';
import { videoArticles } from '@/components/free-resources/videoArticles';

export function generateStaticParams() {
  return Object.keys(videosData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const video = videosData[params.slug];
  if (!video) return {};
  return {
    title: video.metaTitle,
    description: video.metaDescription,
  };
}

export default function VideoPage({ params }) {
  const video = videosData[params.slug];
  const ArticleBody = videoArticles[params.slug];
  if (!video || !ArticleBody) notFound();

  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <VideoArticle video={video}>
        <ArticleBody />
      </VideoArticle>
      <Footer />
    </main>
  );
}
