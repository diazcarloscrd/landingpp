import "server-only";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

/**
 * Cliente exclusivo de servidor para Supabase (Route Handlers).
 * Utiliza obligatoriamente SUPABASE_SERVICE_ROLE_KEY para operaciones seguras con RLS.
 * NO utiliza la anon key bajo ninguna circunstancia (Regla 02 y 03).
 */
export const getSupabaseServerClient = (): SupabaseClient | null => {
  if (
    !supabaseUrl ||
    !supabaseServiceRoleKey ||
    supabaseUrl.includes("tu-proyecto") ||
    supabaseServiceRoleKey.includes("tu-service-role")
  ) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};
