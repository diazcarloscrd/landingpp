import { ServiceType, BudgetRange, TimelineType } from "@/types/quote";

export interface SuggestionItem {
  label: string;
  template: string;
}

export const SUGGESTIONS_BY_SERVICE: Record<ServiceType, SuggestionItem[]> = {
  crm: [
    {
      label: "Control de Clientes y Presupuestos",
      template:
        "Necesito un sistema CRM a medida para registrar clientes, hacer seguimiento de presupuestos y controlar cobranzas.",
    },
    {
      label: "Gestión de Stock, Pedidos y Caja",
      template:
        "Quiero reemplazar planillas de Excel por un software web para controlar inventario, órdenes de trabajo y gastos.",
    },
    {
      label: "Seguimiento de Obras / Proyectos",
      template:
        "Busco una plataforma para certificar avances de obra, asignar tareas al equipo y llevar reportes históricos.",
    },
  ],
  ecommerce: [
    {
      label: "Tienda de Indumentaria / Calzado",
      template:
        "Quiero una tienda online con catálogo administrable, talles, colores, carrito ágil y cobro con Mercado Pago.",
    },
    {
      label: "Pedidos Gastronómicos / Menú Propio",
      template:
        "Necesito un catálogo interactivo con carrito para que los clientes armen su pedido y me llegue directo al WhatsApp del local.",
    },
    {
      label: "Catálogo Mayorista / Distribución",
      template:
        "Busco una tienda para recibir pedidos mayoristas o minoristas con listas de precios y control de stock.",
    },
  ],
  landing: [
    {
      label: "Web para Profesional / Consultor",
      template:
        "Necesito una Landing Page profesional para presentar mis especialidades, generar confianza y recibir consultas de clientes.",
    },
    {
      label: "Landing para Empresa / Constructora",
      template:
        "Busco una página comercial moderna para mostrar nuestros proyectos realizados y captar clientes potenciales.",
    },
    {
      label: "Lanzamiento de Servicio o Producto",
      template:
        "Quiero una página de alta conversión enfocada en una campaña específica para captar clientes por WhatsApp y formulario.",
    },
  ],
  turnos: [
    {
      label: "Consultorio / Salud / Estética",
      template:
        "Quiero un sistema de turnos online para que mis pacientes o clientes elijan día y horario libre sin tener que escribirme.",
    },
    {
      label: "Barbería / Peluquería / Gimnasio",
      template:
        "Necesito una agenda web por profesional con recordatorios y opción de cobrar una seña con Mercado Pago.",
    },
  ],
  cotizador: [
    {
      label: "Calculadora para Construcción / Aberturas",
      template:
        "Quiero una calculadora interactiva en mi web donde el cliente ingrese medidas o m2 y obtenga un valor estimado.",
    },
    {
      label: "Cotizador de Servicios / Gráfica",
      template:
        "Necesito un cotizador paso a paso donde el cliente seleccione lo que necesita y me envíe el resumen a WhatsApp.",
    },
  ],
  rediseno: [
    {
      label: "Modernizar Web Antigua o Lenta",
      template:
        "Mi sitio web actual quedó desactualizado y tarda en cargar. Busco un rediseño moderno, ultra veloz y adaptado a celulares.",
    },
  ],
  other: [
    {
      label: "Plataforma / Proyecto Especial",
      template:
        "Tengo una necesidad técnica específica para mi negocio y me gustaría recibir asesoramiento sobre la mejor arquitectura.",
    },
  ],
};

export const BUDGET_OPTIONS: { id: BudgetRange; label: string }[] = [
  { id: "flexible", label: "Aún no lo definí (abierto a propuesta)" },
  { id: "hasta-500k", label: "Hasta $500.000 ARS" },
  { id: "500k-1m", label: "$500.000 a $1.000.000 ARS" },
  { id: "1m-2.5m", label: "$1.000.000 a $2.500.000 ARS" },
  { id: "mas-2.5m", label: "Más de $2.500.000 ARS" },
  { id: "a-convenir", label: "Presupuesto corporativo / exterior" },
];

export const TIMELINE_OPTIONS: { id: TimelineType; label: string }[] = [
  { id: "urgente", label: "Lo antes posible (Prioritario)" },
  { id: "1-2-semanas", label: "Próximas 1 a 2 semanas" },
  { id: "un-mes", label: "Dentro de este mes" },
  { id: "flexible", label: "Flexible / A convenir según etapas" },
];
