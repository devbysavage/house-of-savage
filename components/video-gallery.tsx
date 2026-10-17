"use client";

import { useRef } from "react";
import Image from "next/image";

const clips = [
  { src: "/videos/img-0480.mp4", poster: "/images/best-selling-cuban-3.webp", title: "The Cuban Link" },
  { src: "/videos/img-4796.mp4", poster: "/images/women-s-jewelry-photo-2024-04-13-20-27-14.webp", title: "Fine Details" },
  { src: "/videos/img-7908.mp4", poster: "/images/tennis-chains-tennisss.webp", title: "Brilliance in Motion" },
  { src: "/videos/img-4792.mp4", poster: "/images/bracelets-cuban-brace.webp", title: "The Finishing Touch" },
  { src: "/videos/img-4843.mp4", poster: "/images/rings-ring1.webp", title: "Made to Be Seen" },
  { src: "/videos/bracelet-vid.mp4", poster: "/images/best-selling-vca-bracelet.webp", title: "A Closer Look" },
];

export function VideoGallery() {
  const rail = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    if (!rail.current) return;
    rail.current.scrollBy({ left: direction * Math.min(rail.current.clientWidth * 0.78, 520), behavior: "smooth" });
  }
  return <div className="video-gallery-shell">
    <div className="gallery-controls"><span>01 — 06 / A CLOSER LOOK</span><div><button onClick={() => move(-1)} aria-label="Scroll gallery left">←</button><button onClick={() => move(1)} aria-label="Scroll gallery right">→</button></div></div>
    <div className="video-gallery-rail" ref={rail} tabIndex={0} aria-label="Jewelry video gallery">
      {clips.map((clip, index) => <article className="video-card" key={clip.src}>
        <div className="video-frame"><video src={clip.src} poster={clip.poster} controls playsInline preload="none" aria-label={clip.title} /><span className="video-index">0{index + 1}</span></div>
        <div className="video-card-caption"><span>{clip.title}</span><span>House of Savage</span></div>
      </article>)}
    </div>
    <p className="gallery-hint">Swipe to explore on mobile, or use the arrows to move through the gallery.</p>
  </div>;
}
