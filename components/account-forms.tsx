"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { TransitionLink } from "./transition-link";

export function AccountForms() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setMessage("Please enter a valid email address.");
    if (password.length < 8) return setMessage("Use a password with at least 8 characters.");
    if (mode === "signup" && !name.trim()) return setMessage("Please enter your name.");
    if (mode === "signup" && password !== confirm) return setMessage("Your passwords do not match.");
    setMessage("Your details look good. Account access needs to be connected to an authentication service before sign-in can be completed.");
  }
  return <main className="account-page">
    <div className="account-visual"><Image src="/images/signup-signup-sub-con.webp" alt="A close-up of statement jewelry" fill priority sizes="(max-width: 800px) 100vw, 50vw"/><div className="account-visual-shade"/><div className="account-visual-text"><span>HOUSE OF SAVAGE / PRIVATE ACCESS</span><h1>Luxury is<br/><em>personal.</em></h1><p>Your collection, your way.</p></div></div>
    <section className="account-panel"><TransitionLink href="/" className="back-link">← Back to home</TransitionLink><div className="account-panel-inner">
      <span className="eyebrow">{mode === "signin" ? "WELCOME BACK" : "JOIN THE HOUSE"}</span>
      <h2>{mode === "signin" ? "Sign in." : "Create your account."}</h2>
      <p className="account-intro">{mode === "signin" ? "Step back into your world of considered pieces." : "Keep your favorites close and stay in the know."}</p>
      <form onSubmit={submit} className="account-form" noValidate>
        {mode === "signup" && <label>Full name<input value={name} onChange={e => setName(e.target.value)} autoComplete="name" placeholder="Your name"/></label>}
        <label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com"/></label>
        <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete={mode === "signin" ? "current-password" : "new-password"} placeholder="At least 8 characters"/></label>
        {mode === "signup" && <label>Confirm password<input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} autoComplete="new-password" placeholder="Repeat password"/></label>}
        {message && <p className="account-message" role="status">{message}</p>}
        <button className="button button-dark account-submit" type="submit">{mode === "signin" ? "Sign in" : "Create account"}<span>↗</span></button>
      </form>
      <p className="account-switch">{mode === "signin" ? "New to House of Savage?" : "Already have an account?"} <button onClick={() => {setMode(mode === "signin" ? "signup" : "signin");setMessage("");}}>{mode === "signin" ? "Create an account" : "Sign in"}</button></p>
      <p className="account-footnote">Account forms are prepared for integration. No passwords are sent or stored by this frontend.</p>
    </div></section>
  </main>;
}
