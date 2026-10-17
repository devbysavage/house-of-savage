"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "invalid" | "submitted">("idle");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("invalid");
      return;
    }
    setStatus("submitted");
  }
  return <section className="newsletter-section" id="newsletter">
    <div className="newsletter-kicker">THE SAVAGE LETTER / 001</div>
    <div className="newsletter-copy"><h2>Good things<br/><em>are worth knowing.</em></h2><p>Be first to hear about new arrivals, curated edits and upcoming drops.</p></div>
    <form className="newsletter-form" onSubmit={submit} noValidate>
      <label htmlFor="newsletter-email">Your email address</label>
      <div className="newsletter-field"><input id="newsletter-email" type="email" value={email} onChange={e => {setEmail(e.target.value); if(status!=="idle")setStatus("idle");}} placeholder="you@example.com" aria-invalid={status === "invalid"}/><button type="submit" aria-label="Subscribe to updates">Join the list ↗</button></div>
      {status === "invalid" && <p className="form-message error" role="alert">Enter a valid email address to continue.</p>}
      {status === "submitted" && <p className="form-message" role="status">Thanks for your interest. The signup experience is ready; connect an email platform to activate subscriptions.</p>}
      <small>Thoughtful updates only. No noise.</small>
    </form>
  </section>;
}
