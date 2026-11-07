"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight, Code2 } from "lucide-react";

const NAV_SECTION_IDS = ["demos", "servicios", "rubros", "proceso", "mantenimiento", "faq"];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy accesible
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    NAV_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, observerOptions);

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060714]/90 backdrop-blur-xl border-b border-violet-500/15 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logotipo CDByte */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg p-1 shrink-0"
          aria-label={`${siteConfig.name} - Inicio`}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
            <div className="w-full h-full bg-[#090a1f] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-violet-300 bg-clip-text text-transparent leading-none font-display">
              CD<span className="text-violet-400">Byte</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase hidden sm:inline font-medium">
              Software & Web Studio
            </span>
          </div>
        </Link>

        {/* Navegación Desktop con Scroll-spy */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full px-3 py-1 shadow-inner"
        >
          <ul className="flex items-center space-x-1 text-xs xl:text-sm font-medium text-slate-300">
            {siteConfig.nav.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                      isActive
                        ? "bg-violet-600 text-white font-semibold shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                        : "hover:text-white hover:bg-white/5 text-slate-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botón CTA Header Desktop (Único botón persistente) */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <Button href="#presupuesto" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
            {siteConfig.primaryCta}
          </Button>
        </div>

        {/* Controles Móviles */}
        <div className="flex items-center gap-2 md:hidden">
          <Button href="#presupuesto" variant="primary" size="sm">
            {siteConfig.primaryCta}
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070817]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <nav aria-label="Navegación móvil" className="flex flex-col space-y-1">
            {siteConfig.nav.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-violet-600/30 text-violet-200 border border-violet-500/30 font-semibold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
