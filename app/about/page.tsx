import Image from "next/image";
import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TransitionLink } from "@/components/transition-link";

export const metadata: Metadata = { title: "Our Story", description: "Discover the House of Savage point of view." };
export default function AboutPage() {
 return <main className="about-page">
  <section className="about-hero"><div className="about-hero-copy"><p className="eyebrow">THE HOUSE / OUR STORY</p><h1>Made for<br/><em>your presence.</em></h1><p>We believe jewelry is more than what you wear. It is how you remember a moment, express a mood and make a detail your own.</p></div><div className="about-hero-image"><Image src="/images/about-boss.webp" alt="House of Savage founder" fill priority sizes="(max-width: 800px) 100vw, 50vw"/></div></section>
  <section className="about-statement section-pad"><ScrollReveal><span className="eyebrow">WHAT WE STAND FOR</span><h2>Distinctive by design.<br/><em>Personal by nature.</em></h2><p>House of Savage brings together diamond jewelry, gold pieces and statement accessories for people who know that the right detail can change how a moment feels. Our point of view is simple: choose pieces with character, wear them your way, and make them mean something.</p><p>Whether you are searching for a gift, marking a milestone or adding a new favorite to your rotation, we want the experience to feel considered from the first look to the final detail.</p><TransitionLink href="/collections/women" className="underlined-link">Explore the collection ↗</TransitionLink></ScrollReveal></section>
  <section className="about-image-row"><div><Image src="/images/about-img-8844.webp" alt="Close-up detail of jewelry" fill sizes="50vw"/></div><div><Image src="/images/about-img-6678.webp" alt="House of Savage behind the scenes" fill sizes="50vw"/></div></section>
  <section className="collection-cta"><p className="eyebrow">THE HOUSE OF SAVAGE POINT OF VIEW</p><h2>Find the detail<br/><em>that feels like you.</em></h2><TransitionLink href="/contact" className="button button-dark">Get in touch <span>↗</span></TransitionLink></section>
 </main>;
}
