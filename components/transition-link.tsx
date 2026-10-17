"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

export function TransitionLink({
  href, children, className, onClick, ...props
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (
      event.defaultPrevented ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      event.button !== 0 ||
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")
    ) return;

    event.preventDefault();
    const navigate = () => router.push(href);
    const doc = document as Document & { startViewTransition?: (callback: () => void) => unknown };
    if (doc.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      doc.startViewTransition(navigate);
    } else {
      navigate();
    }
  }

  return <Link href={href} className={className} onClick={handleClick} {...props}>{children}</Link>;
}
