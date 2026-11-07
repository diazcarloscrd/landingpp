-- Migración de refuerzo de seguridad para la tabla public.leads
-- Cumple con la Regla 02, Regla 03 y Auditoría de Seguridad (J.9)

-- 1. Asegurar columna consent_at si no existiera
ALTER TABLE public.leads 
  ADD COLUMN IF NOT EXISTS consent_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;

-- 2. Restricción CHECK estricta para service_type (lista blanca autoritativa)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'leads_service_type_check'
  ) THEN
    ALTER TABLE public.leads
      ADD CONSTRAINT leads_service_type_check
      CHECK (service_type IN ('crm', 'ecommerce', 'landing', 'turnos', 'cotizador', 'rediseno', 'other'));
  END IF;
END $$;

-- 3. Restricción CHECK estricta para status
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'leads_status_check'
  ) THEN
    ALTER TABLE public.leads
      ADD CONSTRAINT leads_status_check
      CHECK (status IN ('new', 'reviewing', 'contacted', 'quoted', 'won', 'archived'));
  END IF;
END $$;

-- 4. Asegurar RLS activo
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 5. Endurecimiento de RLS:
-- Eliminar cualquier política de inserción anónima directa desde la clave pública anon.
-- Todas las inserciones se canalizan de forma autoritativa a través del Route Handler
-- de Next.js utilizando SUPABASE_SERVICE_ROLE_KEY (que bypassa RLS de forma segura en servidor).
DROP POLICY IF EXISTS "Permitir inserción controlada de leads" ON public.leads;
DROP POLICY IF EXISTS "Denegar lectura pública a leads" ON public.leads;

-- Política explícita de denegación total para anon y authenticated
-- Ningún usuario público puede SELECT, UPDATE ni DELETE registros de leads.
CREATE POLICY "Denegar todo acceso publico a leads" 
    ON public.leads 
    AS RESTRICTIVE
    FOR ALL
    TO anon, authenticated
    USING (false)
    WITH CHECK (false);

COMMENT ON TABLE public.leads IS 'Almacén seguro de solicitudes de presupuesto de CDByte con RLS estricto y acceso exclusivo por service_role.';
