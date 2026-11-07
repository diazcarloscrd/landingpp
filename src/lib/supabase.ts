import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/**
 * Cliente de Supabase para operaciones del servidor (Route Handlers)
 * Utiliza preferentemente la clave service_role para operaciones privilegiadas
 * que cumplen con las políticas RLS.
 */
export const getSupabaseServerClient = () => {
  if (!supabaseUrl || !supabaseServiceKey || supabaseUrl.includes("tu-proyecto")) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};

