import Image from "next/image";
import { TransitionLink } from "./transition-link";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand">
        <Image src="/images/general-hos-brand-logo.webp" alt="House of Savage logo" width={64} height={64}/>
        <p>For the pieces that say everything without saying a word.</p>
        <a href="https://www.instagram.com/h.o.s.luxury_/profilecard" target="_blank" rel="noreferrer">Instagram ↗</a>
      </div>
      <div><h3>Explore</h3><TransitionLink href="/collections/men">Men's Jewelry</TransitionLink><TransitionLink href="/collections/women">Women's Jewelry</TransitionLink><TransitionLink href="/collections/rings">Rings</TransitionLink><TransitionLink href="/collections/watches">Watches</TransitionLink></div>
      <div><h3>House of Savage</h3><TransitionLink href="/about">Our Story</TransitionLink><TransitionLink href="/contact">Contact</TransitionLink><TransitionLink href="/account">My Account</TransitionLink></div>
      <div><h3>Get in touch</h3><a href="mailto:houseofsavage01@gmail.com">houseofsavage01@gmail.com</a><p className="footer-note">For product availability, material details and orders, contact our team directly.</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} House of Savage.</span><span>Made for a lasting impression.</span><a href="#top">Back to top ↑</a></div>
  </footer>;
}
