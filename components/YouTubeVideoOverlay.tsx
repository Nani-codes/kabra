"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  youtubeVideoId: string;
  overlayImageUrl: string;
};

export function YouTubeVideoOverlay({ youtubeVideoId, overlayImageUrl }: Props) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&controls=1`;

  if (playing) {
    return (
      <div className="elementor-wrapper elementor-open-inline">
        <div className="elementor-video">
          <iframe
            src={embedUrl}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="elementor-wrapper elementor-open-inline">
      <div className="elementor-video" />
      <div
        className="elementor-custom-embed-image-overlay"
        style={{ backgroundImage: `url(${overlayImageUrl})` }}
      >
        <div
          className="elementor-custom-embed-play"
          role="button"
          aria-label="Play Video"
          tabIndex={0}
          onClick={() => setPlaying(true)}
          onKeyDown={(e) => e.key === "Enter" && setPlaying(true)}
        >
          <i aria-hidden="true" className="eicon-play" />
          <span className="elementor-screen-only">Play Video</span>
        </div>
      </div>
    </div>
  );
}
