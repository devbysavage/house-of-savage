"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { TransitionLink } from "./transition-link";

const links = [
  { label: "Home", href: "/" },
  { label: "Men's Jewelry", href: "/collections/men" },
  { label: "Women's Jewelry", href: "/collections/women" },
  { label: "Rings", href: "/collections/rings" },
  { label: "Watches", href: "/collections/watches" },
  { label: "Our Story", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    router.push(`/search?q=${encodeURIComponent(value)}`);
    setSearchOpen(false);
    setOpen(false);
  }

  return (
    <>
      <div className="announcement">A considered collection of diamonds, gold & statement pieces</div>
      <header className="site-header">
        <div className="header-inner">
          <button className="icon-button menu-trigger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className={open ? "hamburger is-open" : "hamburger"}><i/><i/></span>
          </button>
          <TransitionLink href="/" className="brand-lockup" aria-label="House of Savage home">
            <Image src="/images/general-hos-brand-logo.webp" alt="House of Savage" width={58} height={58} priority className="brand-mark" />
            <span className="brand-wordmark"><span>HOUSE OF</span><strong>SAVAGE</strong></span>
          </TransitionLink>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.slice(0,5).map(link => (
              <TransitionLink key={link.href} href={link.href} className={pathname === link.href ? "nav-link active" : "nav-link"}>{link.label}</TransitionLink>
            ))}
          </nav>
          <div className="header-actions">
            <button className="icon-button search-trigger" aria-label="Search products" onClick={() => setSearchOpen(!searchOpen)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>
            </button>
            <TransitionLink href="/account" className="icon-button account-trigger" aria-label="Sign in or create an account">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>
            </TransitionLink>
          </div>
        </div>
        {searchOpen && <form className="search-panel" onSubmit={submitSearch}><label htmlFor="site-search">Search the collection</label><div><input id="site-search" autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Try rings, chains, earrings…"/><button type="submit">Search ↗</button></div></form>}
        <div className={open ? "mobile-nav is-open" : "mobile-nav"} aria-hidden={!open}>
          {links.map((link, index) => <TransitionLink key={link.href} href={link.href} onClick={() => setOpen(false)} className="mobile-nav-link"><span>0{index + 1}</span>{link.label}<b>↗</b></TransitionLink>)}
          <p>Timeless pieces. Personal meaning.</p>
        </div>
      </header>
    </>
  );
}
