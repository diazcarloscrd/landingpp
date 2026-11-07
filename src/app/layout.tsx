import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Soluciones Digitales, CRM, E-Commerce y Landing Pages`,
  description: siteConfig.description,
  keywords: [
    "desarrollo web",
    "CRM a medida",
    "tiendas online",
    "e-commerce",
    "landing pages profesionales",
    "software de gestión",
    "sistemas empresariales",
    "desarrollo digital",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Estudio de Desarrollo Digital`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#060714] text-slate-100 min-h-screen antialiased flex flex-col selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
