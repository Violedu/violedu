// Single source of truth for every free resource (videos + worksheets), ordered
// newest → oldest. The Free Resources grid renders this in order, and the
// "More free resources" section on each detail page shows the latest three
// (excluding the page you're on).
export const ALL_RESOURCES = [
  {
    id: 'video-vibrato',
    href: '/videos/why-your-vibrato-isnt-sounding-pro',
    image: '/video_vibrato_cover.png',
    badge: 'Video',
    format: 'Video',
    category: 'Technique',
    title: "Why Your Vibrato Isn't Sounding Pro (Yet!)",
    description:
      'A full masterclass on the four elements that build a signature vibrato — the three vibrato types, intonation, dynamics, and style. Watch now, free.',
    cta: 'Watch',
    isVideo: true,
    accentFrom: 'rgba(80,168,222,0.5)',
    accentTo: 'rgba(37,99,235,0.05)',
  },
  {
    id: 'worksheet-vibrato',
    href: '/free-resources/master-your-vibrato',
    image: '/worksheet_vibrato_cover.png',
    badge: 'Worksheet',
    format: 'PDF',
    category: 'Technique',
    title: 'Master Your Vibrato',
    description:
      'The four elements of an expressive vibrato — the three vibrato types, plus how vibrato shapes your intonation, dynamics, and musical style.',
    cta: 'Download The Worksheet',
    accentFrom: 'rgba(45,190,175,0.5)',
    accentTo: 'rgba(20,120,110,0.05)',
  },
  {
    id: 'video-sound',
    href: '/videos/why-you-dont-sound-like-a-pro-violinist',
    image: '/video_sound_cover.png',
    badge: 'Video',
    format: 'Video',
    category: 'Technique',
    title: "Why You Don't Sound Like a Pro Violinist (Yet!)",
    description:
      'The three things that separate pros from everyone else — the sounding point, resonant intonation, and bow articulation like a language. Watch the full masterclass, free.',
    cta: 'Watch',
    isVideo: true,
    imagePosition: 'left',
    accentFrom: 'rgba(80,168,222,0.5)',
    accentTo: 'rgba(37,99,235,0.05)',
  },
  {
    id: 'worksheet-sound',
    href: '/free-resources/sound-like-a-pro',
    image: '/worksheet_cover.png',
    badge: 'Worksheet',
    format: 'PDF',
    category: 'Technique',
    title: 'Sound Like A Pro Violinist',
    description:
      'A 12-page worksheet that walks you through the bow-arm checks and tone exercises that separate students from professionals.',
    cta: 'Download The Worksheet',
    accentFrom: 'rgba(139,92,246,0.55)',
    accentTo: 'rgba(76,29,149,0.05)',
  },
  {
    id: 'video-memory',
    href: '/videos/5-ways-violin-pros-learn-music-faster',
    image: '/video_memory_cover.png',
    badge: 'Video',
    format: 'Video',
    category: 'Practice',
    title: '5 Ways Violin Pros Learn Music Faster',
    description:
      'Five ways professionals memorize music and walk on stage without fear of a slip — original scores, early fingerings, mapping the form, whole-body memory, and slow practice. Watch free.',
    cta: 'Watch',
    isVideo: true,
    imagePosition: 'right',
    accentFrom: 'rgba(80,168,222,0.5)',
    accentTo: 'rgba(37,99,235,0.05)',
  },
  {
    id: 'worksheet-memory',
    href: '/free-resources/learn-music-faster',
    image: '/worksheet_memory_cover.png',
    badge: 'Handbook',
    format: 'PDF',
    category: 'Practice',
    title: 'Learn Music Faster',
    description:
      'Memorize concert repertoire the way conservatory players do — four memory anchors, written out as a practical, repeatable system.',
    cta: 'Download The Handbook',
    accentFrom: 'rgba(251,213,207,0.45)',
    accentTo: 'rgba(139,92,246,0.05)',
  },
  {
    id: 'video-bowchange',
    href: '/videos/5-simple-steps-to-smooth-bow-change',
    image: '/video_bowchange_cover.png',
    badge: 'Video',
    format: 'Video',
    category: 'Technique',
    title: '5 Simple Steps To Smooth Bow Change',
    description:
      'The right-hand fundamentals behind a seamless bow change — posture, keeping the bow straight, the change at the frog and tip, plus exercises. Watch free.',
    cta: 'Watch',
    isVideo: true,
    imagePosition: 'right',
    accentFrom: 'rgba(80,168,222,0.5)',
    accentTo: 'rgba(37,99,235,0.05)',
  },
  {
    id: 'video-bowhold',
    href: '/videos/how-to-play-effortless-with-flexible-bow-hold',
    image: '/video_bowhold_cover.png',
    badge: 'Video',
    format: 'Video',
    category: 'Technique',
    title: 'How To Play Effortless With a Flexible Bow Hold',
    description:
      'Build the Franco-Belgian bow hold step by step — the role of the thumb, where each finger goes, and the flexibility that makes playing feel effortless. Watch free.',
    cta: 'Watch',
    isVideo: true,
    imagePosition: 'left',
    accentFrom: 'rgba(80,168,222,0.5)',
    accentTo: 'rgba(37,99,235,0.05)',
  },
];

// The latest `count` resources, excluding the one at `currentHref`.
export function latestResources(currentHref, count = 3) {
  return ALL_RESOURCES.filter((r) => r.href !== currentHref).slice(0, count);
}
