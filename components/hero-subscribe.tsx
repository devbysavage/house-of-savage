"use client";

import { useState, type FormEvent } from "react";

export function HeroSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Thanks for your interest. Connect an email platform to activate updates.");
  }
  return <form className="hero-subscribe" onSubmit={submit} noValidate>
    <label htmlFor="hero-email">THE SAVAGE LETTER <span>— NEW DROPS & PRIVATE UPDATES</span></label>
    <div className="hero-subscribe-field"><input id="hero-email" type="email" value={email} onChange={e => {setEmail(e.target.value);setStatus("");}} placeholder="Your email address" aria-invalid={Boolean(status && status.startsWith("Please"))}/><button type="submit" aria-label="Subscribe to House of Savage updates">↗</button></div>
    {status && <p role="status">{status}</p>}
  </form>;
}
