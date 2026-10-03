export const videosData = {
  'why-your-vibrato-isnt-sounding-pro': {
    slug: 'why-your-vibrato-isnt-sounding-pro',
    metaTitle: "Why Your Vibrato Isn't Sounding Pro (Yet) — Violedu",
    metaDescription:
      'Vibrato is not one technique — it is four coordinated elements that build your signature sound. Watch the masterclass and read the breakdown: the three vibrato types, intonation, dynamics, and style.',
    // YouTube video id + start time (seconds) — https://www.youtube.com/watch?v=IOHjL3oIwI4&t=50s
    youtubeId: 'IOHjL3oIwI4',
    start: 50,
    eyebrow: 'Video Masterclass · Technique',
    title: "Why Your Vibrato Isn't Sounding Pro (Yet!)",
    author: 'Kalina',
    authorRole: 'DMA · Soloist & Chamber Musician',
    authorAvatar: '/profile_kalina.png',
    date: 'October 2026',
    readTime: '7 min read',
    cover: '/video_vibrato_cover.png',
    // Sidebar chapters — each id must match an <ArticleSection id> in the body.
    chapters: [
      { id: 'one-technique', label: "Vibrato Isn't One Technique" },
      { id: 'types', label: 'The Three Types of Vibrato' },
      { id: 'intonation', label: 'Vibrato & Intonation' },
      { id: 'dynamics', label: 'Vibrato & Dynamics' },
      { id: 'style', label: 'Vibrato & Style' },
    ],
    // Optional companion-worksheet CTA at the end of the article. Omit if the
    // video has no related worksheet.
    worksheet: {
      href: '/free-resources/master-your-vibrato',
      eyebrow: 'Free Companion Worksheet',
      title: 'Want the full method on paper?',
      text: 'The entire masterclass is also a free 16-page vibrato worksheet — every exercise written out, step by step.',
      cta: 'Get the free worksheet',
    },
  },
};
