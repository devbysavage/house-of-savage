import Image from "next/image";
import { bestSellers } from "@/lib/catalog";
import { HeroMarquee } from "@/components/hero-marquee";
import { ProductGrid } from "@/components/product-grid";
import { VideoGallery } from "@/components/video-gallery";
import { Newsletter } from "@/components/newsletter";
import { HeroSubscribe } from "@/components/hero-subscribe";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TransitionLink } from "@/components/transition-link";

const categories = [
  { name: "Men's jewelry", detail: "Chains, bracelets & statement pieces", href: "/collections/men", image: "/images/cuban-chains-cuban-3.webp", number: "01" },
  { name: "Women's jewelry", detail: "Refined details for every day", href: "/collections/women", image: "/images/women-s-jewelry-photo-2024-07-06-21-20-46.webp", number: "02" },
  { name: "Rings", detail: "A detail that says it all", href: "/collections/rings", image: "/images/rings-ring1.webp", number: "03" },
  { name: "Timepieces", detail: "Distinctive watches & wristwear", href: "/collections/watches", image: "/images/wrist-watches-ap-watchjpg.webp", number: "04" },
];

export default function HomePage() {
  return <main>
    <section className="hero-section">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> A DIFFERENT KIND OF PRESENCE</p><h1>Wear what<br/> <em>moves you.</em></h1><p className="hero-description">Diamond brilliance. Gold essentials. Pieces chosen to feel unmistakably yours.</p><div className="hero-actions"><TransitionLink href="/collections/women" className="button button-light">Explore the collection <span>↗</span></TransitionLink><a className="text-link" href="#our-point-of-view">Our point of view ↓</a></div><HeroSubscribe/><div className="hero-footnote"><span>01 / 04</span><span>JEWELRY FOR YOUR OWN KIND OF EXTRAORDINARY</span></div></div>
      <HeroMarquee/>
    </section>

    <section className="intro-section section-pad" id="our-point-of-view"><ScrollReveal><div className="section-label"><span>THE HOUSE / OUR POINT OF VIEW</span><span>EST. IN CHARACTER</span></div><div className="intro-grid"><h2>Not just an accessory.<br/><em>A signature.</em></h2><div className="intro-body"><p>House of Savage is for the moments you want to mark, the details you notice, and the confidence you carry without needing to announce it.</p><p>From diamond-inspired statements to gold jewelry and standout everyday pieces, explore a collection that makes room for your own expression.</p><TransitionLink href="/about" className="underlined-link">Discover our story <span>↗</span></TransitionLink></div></div></ScrollReveal></section>

    <section className="best-sellers-section section-pad"><ScrollReveal><div className="section-heading"><div><p className="eyebrow">THE PEOPLE'S PICKS</p><h2>Standout <em>pieces.</em></h2></div><TransitionLink href="/collections/men" className="underlined-link">Explore jewelry <span>↗</span></TransitionLink></div></ScrollReveal><ScrollReveal delay={100}><ProductGrid products={bestSellers} columns={4}/></ScrollReveal><p className="catalog-note">Product details and material availability can vary. Contact us to confirm specifications before ordering.</p></section>

    <section className="category-section section-pad"><ScrollReveal><div className="section-heading"><div><p className="eyebrow">FIND YOUR FORM</p><h2>Explore by <em>category.</em></h2></div><p className="heading-note">Considered details.<br/>Different ways to make them yours.</p></div></ScrollReveal><div className="category-grid">{categories.map((category, i)=><ScrollReveal key={category.href} delay={i*75}><TransitionLink href={category.href} className="category-card"><div className="category-image"><Image src={category.image} alt={category.name} width={720} height={900} sizes="(max-width: 640px) 48vw, 25vw"/><span>{category.number}</span><b>↗</b></div><div className="category-info"><h3>{category.name}</h3><p>{category.detail}</p></div></TransitionLink></ScrollReveal>)}</div></section>

    <section className="editorial-section"><div className="editorial-image"><Image src="/images/gold-jewelry-carousel-cuban-link-chain-20mm.webp" alt="Gold chain jewelry detail" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="editorial-copy"><p className="eyebrow">THE GOLD EDIT / 01</p><h2>Warm metal.<br/><em>Lasting energy.</em></h2><p>Everyday gold pieces and bold links, chosen to bring character to the way you move through the world.</p><TransitionLink href="/collections/men" className="button button-light">Explore gold & chains <span>↗</span></TransitionLink><span className="editorial-index">HOS — SELECTED DETAILS</span></div></section>

    <section className="gallery-section section-pad"><ScrollReveal><div className="section-heading"><div><p className="eyebrow">UP CLOSE / IN MOTION</p><h2>Details worth <em>looking at.</em></h2></div><p className="heading-note">Take your time. The details do the talking.</p></div></ScrollReveal><VideoGallery/></section>

    <section className="brand-note-section"><div className="brand-note-inner"><span className="eyebrow">A NOTE FROM THE HOUSE</span><p>“Your style should never need an introduction.”</p><span className="signature">House of Savage</span></div></section>
    <Newsletter/>
  </main>;
}
