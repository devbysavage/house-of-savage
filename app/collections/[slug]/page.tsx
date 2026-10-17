import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { collections } from "@/lib/catalog";
import { ProductGrid } from "@/components/product-grid";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TransitionLink } from "@/components/transition-link";

const details: Record<string, {title:string; eyebrow:string; intro:string; image:string}> = {
  men: { title: "Men's jewelry", eyebrow: "THE MEN'S EDIT", intro: "Confident chains, standout bracelets and statement pieces with presence.", image: "/images/cuban-chains-cuban-3.webp" },
  women: { title: "Women's jewelry", eyebrow: "THE WOMEN'S EDIT", intro: "Distinctive details, from diamond-inspired sparkle to everyday elegance.", image: "/images/women-s-jewelry-photo-2024-07-06-21-20-46.webp" },
  rings: { title: "Rings", eyebrow: "THE RING EDIT", intro: "A little brilliance. A lot of personality. Find the detail that feels like you.", image: "/images/rings-ring1.webp" },
  watches: { title: "Watches", eyebrow: "THE TIMEPIECE EDIT", intro: "Distinctive wristwear selected for its presence, character and design.", image: "/images/wrist-watches-ap-watchjpg.webp" },
};
export function generateStaticParams() { return Object.keys(details).map(slug => ({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
 const {slug}=await params; return {title: details[slug]?.title || "Collection"};
}
export default async function CollectionPage({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params;
 const info=details[slug]; const products=collections[slug as keyof typeof collections];
 if(!info || !products) notFound();
 return <main className="collection-page">
  <section className="collection-hero"><div className="collection-hero-copy"><TransitionLink href="/" className="breadcrumb">HOME / COLLECTIONS</TransitionLink><p className="eyebrow">{info.eyebrow}</p><h1>{info.title.split(" ").slice(0,-1).join(" ")} <em>{info.title.split(" ").slice(-1)}</em></h1><p>{info.intro}</p><span className="collection-count">{String(products.length).padStart(2,"0")} SELECTED PIECES</span></div><div className="collection-hero-image"><Image src={info.image} alt={info.title} fill priority sizes="(max-width: 800px) 100vw, 50vw"/></div></section>
  <section className="collection-products section-pad"><ScrollReveal><div className="section-heading"><div><p className="eyebrow">THE COLLECTION</p><h2>Find your <em>signature.</em></h2></div><p className="heading-note">Select a piece to enquire<br/>about availability and details.</p></div></ScrollReveal><ProductGrid products={products} columns={4}/><p className="catalog-note">Images show pieces from the original House of Savage asset library. Confirm exact stone type, metal purity, sizing, availability and pricing with our team before ordering.</p></section>
  <section className="collection-cta"><p className="eyebrow">LOOKING FOR SOMETHING SPECIFIC?</p><h2>Let’s find <em>your piece.</em></h2><TransitionLink href="/contact" className="button button-dark">Speak to our team <span>↗</span></TransitionLink></section>
 </main>;
}
