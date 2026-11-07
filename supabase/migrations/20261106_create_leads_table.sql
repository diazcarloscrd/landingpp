-- Migración para el sistema de captación y gestión de leads de NovaStudio
-- Cumple con la Regla 02 y Regla 03: RLS habilitado, índices eficientes, validaciones y restricciones

CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    business_name VARCHAR(150),
    industry VARCHAR(100),
    service_type VARCHAR(100) NOT NULL,
    project_details JSONB DEFAULT '{}'::jsonb,
    message TEXT NOT NULL,
    budget_range VARCHAR(100),
    timeline VARCHAR(100),
    status VARCHAR(50) DEFAULT 'new' NOT NULL,
    source VARCHAR(100) DEFAULT 'landing_web',
    ip_hash VARCHAR(64),
    consent BOOLEAN DEFAULT true NOT NULL,
    consent_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices estratégicos para búsquedas y paneles
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_service_type ON public.leads (service_type);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);

-- Comentarios explicativos de la tabla
COMMENT ON TABLE public.leads IS 'Almacén seguro de solicitudes de presupuesto recibidas desde la landing page comercial.';
COMMENT ON COLUMN public.leads.project_details IS 'Detalles dinámicos según el tipo de servicio (ej: e-commerce productos, CRM módulos).';

-- Habilitar Row Level Security (RLS) mandatorio según Regla 02 y Regla 03
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- POLÍTICA 1: Inserción pública permitida únicamente a través de la API (o con anon si se requiere)
-- Para máxima seguridad, las inserciones se efectúan desde el Route Handler de Next.js usando service_role
CREATE POLICY "Denegar lectura pública a leads" 
    ON public.leads 
    FOR SELECT 
    USING (false);

CREATE POLICY "Permitir inserción controlada de leads" 
    ON public.leads 
    FOR INSERT 
    WITH CHECK (true);

-- Trigger para actualización automática de updated_at
CREATE OR REPLACE FUNCTION public.handle_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_leads_updated_at ON public.leads;
CREATE TRIGGER set_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_leads_updated_at();

