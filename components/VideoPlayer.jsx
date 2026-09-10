'use client';

import { useRef, useState } from 'react';

/**
 * Shared video card used across the site (trailer, testimonial, about intro).
 * - Small, translucent play button over the poster.
 * - Tapping play starts playback inline within the card (no fullscreen).
 */
export default function VideoPlayer({ src, poster, label = 'Play video' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPlaying(true);
    v.play()?.catch(() => {});
  };

  return (
    <div
      className="relative rounded-[28px] overflow-hidden"
      style={{
        aspectRatio: '16 / 9',
        boxShadow:
          '0 40px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset',
      }}
    >
      {/* Match the container radius directly on the <video>: older iOS Safari
          doesn't clip a playing video to the parent's overflow-hidden rounded
          corners (it composites the video on its own layer), so the corners go
          square once playback starts. Rounding the element itself fixes it. */}
      <video
        ref={videoRef}
        poster={poster}
        controls={isPlaying}
        controlsList="nodownload"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover bg-[#0b0a1d] rounded-[28px]"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Play overlay — hidden once the video is playing */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={label}
          className="group absolute inset-0 z-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a48bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0a1d]"
        >
          {/* subtle veil for legibility */}
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(11,10,29,0.05) 0%, rgba(11,10,29,0.18) 60%, rgba(11,10,29,0.32) 100%)',
            }}
          />

          {/* small translucent play button */}
          <span
            className="relative grid place-items-center w-[54px] h-[54px] md:w-[62px] md:h-[62px] rounded-full backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95"
            style={{
              background: 'rgba(16,14,34,0.45)',
              border: '1px solid rgba(255,255,255,0.40)',
              boxShadow: '0 8px 24px -8px rgba(0,0,0,0.55)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="md:w-[23px] md:h-[23px] translate-x-[1px]"
            >
              <path
                d="M8 5.5v13a1 1 0 0 0 1.55.83l10.2-6.5a1 1 0 0 0 0-1.66L9.55 4.67A1 1 0 0 0 8 5.5z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
