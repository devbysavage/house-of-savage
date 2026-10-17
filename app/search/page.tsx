"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { collections, bestSellers } from "@/lib/catalog";
import { ProductGrid } from "@/components/product-grid";

function SearchResults() {
 const params=useSearchParams();
 const query=(params.get("q")||"").trim().toLowerCase();
 const all=[...bestSellers,...collections.men,...collections.women,...collections.rings,...collections.watches];
 const results=query ? all.filter(item=>`${item.name} ${item.category}`.toLowerCase().includes(query)) : [];
 const unique=results.filter((item,index)=>results.findIndex(other=>other.name===item.name&&other.image===item.image)===index);
 return <main className="search-page section-pad"><p className="eyebrow">THE HOUSE / SEARCH</p><h1>Search <em>the collection.</em></h1><p className="search-summary">{query ? `${unique.length} result${unique.length===1?"":"s"} for “${params.get("q")||""}”` : "Enter a term in the search bar to find a piece."}</p>{unique.length ? <ProductGrid products={unique} columns={4}/> : query ? <div className="empty-search"><h2>No pieces found just yet.</h2><p>Try a broader term, or contact us if you are looking for something specific.</p><a href="/contact" className="underlined-link">Ask our team ↗</a></div> : null}</main>;
}
export default function SearchPage(){return <Suspense fallback={<main className="section-pad"><p>Searching the collection…</p></main>}><SearchResults/></Suspense>}
