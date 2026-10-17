import { TransitionLink } from "@/components/transition-link";
export default function NotFound() {
  return <main className="not-found section-pad"><p className="eyebrow">404 / NOT FOUND</p><h1>This page took<br/><em>a different turn.</em></h1><p>The page you’re looking for may have moved, but the good details are still here.</p><TransitionLink href="/" className="button button-dark">Return home <span>↗</span></TransitionLink></main>;
}
