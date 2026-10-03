// Maps a video slug to its article-body component. Add one line here for each
// new video (see the "add a video resource" skill).
import VibratoArticleBody from './video-articles/why-your-vibrato-isnt-sounding-pro';
import SoundArticleBody from './video-articles/why-you-dont-sound-like-a-pro-violinist';
import MemoryArticleBody from './video-articles/5-ways-violin-pros-learn-music-faster';
import BowChangeArticleBody from './video-articles/5-simple-steps-to-smooth-bow-change';
import BowHoldArticleBody from './video-articles/how-to-play-effortless-with-flexible-bow-hold';

export const videoArticles = {
  'why-your-vibrato-isnt-sounding-pro': VibratoArticleBody,
  'why-you-dont-sound-like-a-pro-violinist': SoundArticleBody,
  '5-ways-violin-pros-learn-music-faster': MemoryArticleBody,
  '5-simple-steps-to-smooth-bow-change': BowChangeArticleBody,
  'how-to-play-effortless-with-flexible-bow-hold': BowHoldArticleBody,
};
