"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { QuoteFormData } from "@/types/quote";

export const INITIAL_QUOTE_FORM: QuoteFormData = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  industry: "",
  serviceType: "crm",
  message: "",
  budgetRange: "flexible",
  timeline: "flexible",
  projectDetails: {},
  consent: false,
  honeypot: "",
  renderTimestamp: 0,
};

interface QuoteContextValue {
  formData: QuoteFormData;
  updateField: (field: keyof QuoteFormData, value: unknown) => void;
  preloadQuote: (data: Partial<QuoteFormData>, targetId?: string) => void;
  resetFormData: () => void;
}

const QuoteContext = createContext<QuoteContextValue | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<QuoteFormData>(() => ({
    ...INITIAL_QUOTE_FORM,
    renderTimestamp: typeof window !== "undefined" ? Date.now() : 0,
  }));

  const updateField = useCallback((field: keyof QuoteFormData, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const preloadQuote = useCallback((data: Partial<QuoteFormData>, targetId = "presupuesto") => {
    setFormData((prev) => ({
      ...prev,
      ...data,
      message: data.message || prev.message,
      serviceType: data.serviceType || prev.serviceType,
      projectDetails: {
        ...(prev.projectDetails || {}),
        ...(data.projectDetails || {}),
      },
    }));

    if (typeof window !== "undefined") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const resetFormData = useCallback(() => {
    setFormData({
      ...INITIAL_QUOTE_FORM,
      renderTimestamp: Date.now(),
    });
  }, []);

  return (
    <QuoteContext.Provider value={{ formData, updateField, preloadQuote, resetFormData }}>
      {children}
    </QuoteContext.Provider>
  );
};

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
