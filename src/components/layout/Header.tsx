"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060714]/85 backdrop-blur-xl border-b border-violet-500/15 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logotipo / Marca editable */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg p-1"
          aria-label={`${siteConfig.name} Inicio`}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
            <div className="w-full h-full bg-[#090a1f] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-violet-300 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navegación Desktop - Estilo cápsula flotante de la referencia */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center bg-surface-card/60 backdrop-blur-md border border-white/10 rounded-full px-5 py-1.5 shadow-inner"
        >
          <ul className="flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-slate-300">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón CTA Header */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#presupuesto"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_28px_rgba(139,92,246,0.65)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <span>Pedir Presupuesto</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Botón Hamburguesa Móvil */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a1f]/95 backdrop-blur-2xl border-b border-violet-500/20 px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-violet-400 py-1 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="#presupuesto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-glow-sm"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

