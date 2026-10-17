import Image from "next/image";
import { heroImages } from "@/lib/catalog";
import { TransitionLink } from "./transition-link";

const slides = [
  { src: heroImages[0], alt: "Statement Cuban link chain", label: "Make your presence known" },
  { src: heroImages[1], alt: "Diamond pendant necklace", label: "Details worth remembering" },
  { src: heroImages[2], alt: "Gold chain jewelry", label: "Gold, with intention" },
  { src: heroImages[3], alt: "Statement jewelry ring", label: "A little extra brilliance" },
  { src: heroImages[4], alt: "Tennis chain jewelry", label: "Everyday, elevated" },
  { src: heroImages[5], alt: "Diamond earrings", label: "The finishing touch" },
];

export function HeroMarquee() {
  const repeated = [...slides, ...slides];
  return <div className="hero-marquee" aria-label="House of Savage jewelry highlights">
    <div className="marquee-track">
      {repeated.map((slide, index) => <div className="marquee-slide" key={`${slide.src}-${index}`} aria-hidden={index >= slides.length}>
        <Image src={slide.src} alt={index < slides.length ? slide.alt : ""} width={720} height={900} priority={index < 2} sizes="(max-width: 640px) 68vw, (max-width: 1024px) 36vw, 25vw"/>
        <div className="marquee-caption"><span>{slide.label}</span><span>HOS / {String((index % slides.length) + 1).padStart(2,"0")}</span></div>
      </div>)}
    </div>
    <div className="marquee-gradient marquee-gradient-left"/><div className="marquee-gradient marquee-gradient-right"/>
    <div className="marquee-bottom"><span>Curated pieces. Distinct presence.</span><TransitionLink href="/collections/women">Explore the collection ↗</TransitionLink></div>
  </div>;
}
