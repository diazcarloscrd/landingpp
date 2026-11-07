import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

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
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — Estudio de Desarrollo Digital`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_AR",
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
    <html lang="es-AR" className={`scroll-smooth ${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="bg-[#060714] text-slate-100 font-sans min-h-screen antialiased flex flex-col selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
