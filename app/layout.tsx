import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: { default: "House of Savage | Fine Jewelry & Statement Pieces", template: "%s | House of Savage" },
  description: "Explore a considered collection of diamond jewelry, gold pieces and statement accessories from House of Savage.",
  applicationName: "House of Savage",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body id="top"><Header/><div className="page-content">{children}</div><Footer/></body></html>;
}
