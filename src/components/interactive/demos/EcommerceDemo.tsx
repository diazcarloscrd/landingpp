"use client";

import React, { useState } from "react";
import { ShoppingBag, Plus, CreditCard } from "lucide-react";

export const EcommerceDemo: React.FC = () => {
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between bg-violet-950/30 border border-violet-500/20 rounded-xl px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-violet-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-white">
            Catálogo Interactivo • Probá sumar productos al carrito
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-medium ml-1">
            Demo con datos ficticios
          </span>
        </div>
        <div className="px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-bold">
          Carrito ({cartCount})
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {[
          { name: "Zapatillas Urban Pro", price: "$84.900", badge: "Envío Gratis", stock: "En Stock" },
          { name: "Campera Impermeable", price: "$112.000", badge: "3 Cuotas s/int", stock: "Últimas 4 u." },
          { name: "Mochila Notebook Tech", price: "$65.500", badge: "15% OFF Transferencia", stock: "Disponible" },
        ].map((prod, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-medium">
                  {prod.badge}
                </span>
                <span className="text-emerald-400">{prod.stock}</span>
              </div>
              <p className="text-sm font-bold text-white">{prod.name}</p>
              <p className="text-lg font-extrabold text-violet-300 mt-1">{prod.price}</p>
            </div>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="mt-3 w-full py-2 rounded-lg bg-white/10 hover:bg-violet-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Agregar al Carrito</span>
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Cobros integrados con Mercado Pago, Tarjetas, Transferencia y Envío a WhatsApp.</span>
        </div>
        <span className="text-emerald-400 font-semibold shrink-0">0% Comisión por venta</span>
      </div>
    </div>
  );
};
