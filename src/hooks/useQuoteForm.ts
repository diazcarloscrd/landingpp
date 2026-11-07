"use client";

import { useState, useCallback } from "react";
import { QuoteFormData, ApiResponse } from "@/types/quote";
import { useQuote } from "@/context/QuoteContext";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useQuoteForm() {
  const { formData, updateField, resetFormData } = useQuote();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ leadId: string; name: string } | null>(null);

  const validateClient = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = "Por favor ingresá tu nombre completo (mínimo 3 caracteres).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Ingresá un correo electrónico válido.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = "Por favor describí tu necesidad o proyecto (mínimo 15 caracteres).";
    }

    if (!formData.consent) {
      newErrors.consent = "Es necesario aceptar los términos para enviar tu solicitud.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (field: keyof QuoteFormData, value: unknown) => {
      updateField(field, value);
      if (errors[field]) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[field];
          return updated;
        });
      }
    },
    [errors, updateField]
  );

  const applySuggestion = useCallback(
    (text: string) => {
      const current = formData.message.trim();
      const nextMessage = current ? `${current}\n\n${text}` : text;
      updateField("message", nextMessage);
      if (errors.message) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated.message;
          return updated;
        });
      }
    },
    [formData.message, errors.message, updateField]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateClient()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    // Si renderTimestamp no fue asignado aún, asignar en el momento de envío
    const payload: QuoteFormData = {
      ...formData,
      renderTimestamp: formData.renderTimestamp || Date.now() - 3000,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as ApiResponse<{ leadId: string; name: string }>;

      if (response.ok && result.success) {
        setStatus("success");
        setSuccessData(result.data || { leadId: "ID", name: formData.name });
      } else {
        setStatus("error");
        setErrorMessage(
          result.error ||
            "No pudimos registrar tu solicitud en este momento. Por favor intentá nuevamente o comunicate por WhatsApp."
        );
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Hubo un problema de conexión con el servidor. Tus datos no se perdieron, podés volver a intentar."
      );
    }
  };

  const resetForm = useCallback(() => {
    resetFormData();
    setErrors({});
    setStatus("idle");
    setErrorMessage(null);
    setSuccessData(null);
  }, [resetFormData]);

  return {
    formData,
    errors,
    status,
    errorMessage,
    successData,
    handleChange,
    applySuggestion,
    handleSubmit,
    resetForm,
  };
}
