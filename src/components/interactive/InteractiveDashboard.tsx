"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  CreditCard,
  ShoppingBag,
  CheckCircle,
  Bell,
  Search,
  Layers,
  ArrowUpRight,
  Filter,
} from "lucide-react";

export const InteractiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"crm" | "ecommerce">("crm");
  const [selectedPeriod, setSelectedPeriod] = useState<"semana" | "mes" | "año">("mes");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/40 via-purple-500/20 to-transparent shadow-[0_20px_70px_rgba(139,92,246,0.22)]">
      {/* Contenedor principal de la demo */}
      <div className="w-full bg-[#0b0c20]/90 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10">
        {/* Barra superior de la ventana del dashboard */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 text-xs font-medium text-slate-400 hidden sm:inline-block">
              {activeTab === "crm" ? "CRM & Pipeline Operativo" : "Store Manager & Analytics"}
            </span>
          </div>

          {/* Selector de módulo de demostración */}
          <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-white/5 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("crm")}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeTab === "crm"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Demo CRM
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ecommerce")}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeTab === "ecommerce"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Demo E-Commerce
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sistema Activo
            </span>
          </div>
        </div>

        {/* Contenido interior del Dashboard */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Métricas destacadas (KPIs con estilo de la referencia) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>{activeTab === "crm" ? "Oportunidades Ganadas" : "Facturación Mensual"}</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                {activeTab === "crm" ? "$ 456,000" : "$ 892,400"}
              </div>
              <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                <span>+24.8%</span>
                <span className="text-slate-400">vs mes anterior</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>{activeTab === "crm" ? "Leads Activos" : "Pedidos Procesados"}</span>
                {activeTab === "crm" ? (
                  <Users className="w-4 h-4 text-violet-400" />
                ) : (
                  <ShoppingBag className="w-4 h-4 text-violet-400" />
                )}
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                {activeTab === "crm" ? "148 Clientes" : "620 Órdenes"}
              </div>
              <p className="text-xs text-violet-300 mt-1">98% satisfacción de respuesta</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>{activeTab === "crm" ? "Tasa de Conversión" : "Ticket Promedio"}</span>
                <CheckCircle className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                {activeTab === "crm" ? "34.2 %" : "$ 14,400"}
              </div>
              <p className="text-xs text-cyan-400 mt-1">+8.1% optimizado por sistema</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Tiempo de Respuesta</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">&lt; 15 min</div>
              <p className="text-xs text-slate-400 mt-1">Automatizado vía bot y WhatsApp</p>
            </div>
          </div>

          {/* Gráfico y Actividad Reciente */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna Izquierda: Gráfico de Barras Iluminadas (idéntico a la referencia) */}
            <div className="lg:col-span-2 p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Flujo Operativo y Rendimiento</h4>
                  <p className="text-xs text-slate-400">Comportamiento en los últimos 7 meses</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded bg-violet-600/30 text-violet-300 border border-violet-500/30 font-medium">
                    +32.4% Máx
                  </span>
                </div>
              </div>

              {/* Simulación visual de barras luminosas de la referencia */}
              <div className="h-44 flex items-end justify-between gap-2 sm:gap-4 pt-6 px-2">
                {[
                  { month: "Jun", height: "35%", value: "1.0k" },
                  { month: "Jul", height: "45%", value: "1.5k" },
                  { month: "Ago", height: "60%", value: "2.0k" },
                  { month: "Sep", height: "75%", value: "2.5k" },
                  { month: "Oct", height: "95%", value: "3.2k", highlight: true },
                  { month: "Nov", height: "70%", value: "2.2k" },
                  { month: "Dic", height: "85%", value: "2.8k" },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full flex justify-center items-end h-32">
                      <div
                        style={{ height: bar.height }}
                        className={`w-full max-w-[34px] rounded-t-lg transition-all duration-500 ${
                          bar.highlight
                            ? "bg-gradient-to-t from-violet-600 to-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                            : "bg-violet-950/50 group-hover:bg-violet-800/60"
                        }`}
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Tarjeta de Transacciones / Leads en vivo */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">Actividad en Vivo</h4>
                <span className="text-xs text-violet-400">Ver todo →</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: activeTab === "crm" ? "Estudio Jurídico Díaz" : "Pedido #2401 - Sushi Lab",
                    sub: activeTab === "crm" ? "Propuesta CRM aprobada" : "Pagado con Mercado Pago",
                    amount: activeTab === "crm" ? "+$350,000" : "+$24,500",
                    color: "text-emerald-400",
                  },
                  {
                    title: activeTab === "crm" ? "Constructora Norte" : "Pedido #2400 - Tienda Moda",
                    sub: activeTab === "crm" ? "Módulo inventario solicitado" : "Retiro en local",
                    amount: activeTab === "crm" ? "+$480,000" : "+$18,900",
                    color: "text-emerald-400",
                  },
                  {
                    title: activeTab === "crm" ? "Clínica Dental Sanitas" : "Pedido #2399 - Gastronomía",
                    sub: activeTab === "crm" ? "Seguimiento de turnos" : "En camino (Delivery)",
                    amount: activeTab === "crm" ? "+$290,000" : "+$12,000",
                    color: "text-emerald-400",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-medium text-slate-200">{item.title}</p>
                      <p className="text-slate-400 text-[11px]">{item.sub}</p>
                    </div>
                    <span className={`font-semibold ${item.color}`}>{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pie de demostración explicativo */}
        <div className="px-6 py-3.5 bg-black/40 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>
            💡 <strong className="text-slate-300">Demostración conceptual:</strong> Los sistemas que desarrollamos se adaptan exactamente a tus flujos, reglas y métodos de pago.
          </p>
          <a
            href="#presupuesto"
            className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-1"
          >
            Cotizar mi sistema a medida →
          </a>
        </div>
      </div>
    </div>
  );
};

