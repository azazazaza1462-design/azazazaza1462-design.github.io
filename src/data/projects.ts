export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  company: string;
  description: string;
  tags: string[];
  features: string[];
  problem: string;
  solution: string;
  contribution: string;
  architecture: string[];
  technologies: string[];
  results: string[];
}
export const projects: Project[] = [
  {
    id: "cotizaflow",
    number: "04",
    name: "CotizaFlow",
    category: "SAAS / PRESUPUESTOS / IA APLICADA",
    company: "Proyecto personal",
    description: "De una idea a una propuesta profesional. Presupuestos con asistencia de IA, catálogo propio y revisión humana antes de generar el PDF.",
    tags: [".NET 10", "React 19", "PostgreSQL", "OpenAI", "Docker"],
    features: ["Borradores asistidos por IA", "Catálogo CSV / Excel", "Revisión humana y PDF"],
    problem: "Preparar presupuestos requiere organizar productos y servicios, investigar referencias y calcular importes sin perder el control sobre los precios y el alcance.",
    solution: "SaaS en español para gestionar clientes, catálogo y cotizaciones en MXN. Un asistente investiga referencias y prepara conceptos editables; la persona ajusta cantidades, impuestos y margen, guarda y revisa la propuesta antes de exportarla a PDF.",
    contribution: "Desarrollo full-stack de CotizaFlow con asistencia de agentes de desarrollo: monolito modular, editor responsive, importación de catálogo, cálculo decimal en backend, historial de revisiones e integración de IA con validación de datos y fuentes.",
    architecture: ["React / TypeScript → editor y catálogo", "ASP.NET Core → sesión y aislamiento por empresa", "Búsqueda web → extracción estructurada con IA", "Validación del backend → borrador editable", "EF Core / PostgreSQL → cálculos, snapshots e historial", "Revisión humana → PDFsharp / MigraDoc → PDF"],
    technologies: ["C#", ".NET 10", "ASP.NET Core", "Entity Framework Core", "PostgreSQL 17", "Npgsql", "ASP.NET Core Identity", "React 19", "TypeScript", "Vite", "Tailwind CSS 4", "OpenAI Responses API", "Salidas estructuradas", "Búsqueda web", "PDFsharp / MigraDoc", "ClosedXML", "CsvHelper", "Docker Compose", "Playwright"],
    results: ["Gestión de empresa, clientes, catálogo y cotizaciones con historial de revisiones.", "PDF corporativo con folio, totales y enlaces clicables; revisión humana obligatoria.", "Importaciones CSV/XLSX con vista previa y cálculos decimales validados en servidor.", "34 pruebas de backend y recorridos del asistente en escritorio y móvil documentados en el repositorio; respuestas de IA simuladas en E2E.", "Integración de búsqueda con OpenAI implementada; búsqueda real exitosa pendiente de verificación por saldo de API. Configuración Docker/Railway preparada, sin despliegue público verificado."],
  },
  {
    id: "identity",
    number: "01",
    name: "AI Document Analyzer",
    category: "FULL-STACK / DOCUMENT PROCESSING / FINTECH",
    company: "Helius Consulting",
    description:
      "De un documento a una decisión informada. IA, validaciones determinísticas y revisión humana en una plataforma extensible.",
    tags: [".NET 10", "React", "PostgreSQL", "Azure", "Claude Vision"],
    features: [
      "Identity analysis end-to-end",
      "Validación MRZ · ICAO 9303",
      "Human-in-the-loop",
    ],
    problem:
      "Procesar documentos financieros y de identidad requiere extraer datos estructurados y comprobar su consistencia sin depender exclusivamente de la respuesta de un modelo.",
    solution:
      "Plataforma full-stack extensible para cargar, procesar y revisar documentos. El módulo de identidad fue implementado de extremo a extremo para pasaportes, identificaciones nacionales, licencias de conducir y permisos de residencia. Bank Statements y Credit Reports forman parte de la arquitectura preparada para incorporar nuevos analizadores; no se presentan como módulos completos.",
    contribution:
      "Desarrollo del flujo de análisis de identidad, integración de Claude Vision y extracción JSON restringida por esquema. Implementación de validaciones determinísticas y MRZ basadas en ICAO 9303: número de documento, nacimiento, vencimiento, check digits y consistencia de información.",
    architecture: [
      "Carga de PDF o imagen",
      "API crea un trabajo",
      "Azure Service Bus → Background Worker",
      "Claude Vision → JSON estructurado",
      "Validaciones determinísticas y MRZ",
      "Aprobación o revisión manual",
      "Consulta desde el dashboard",
    ],
    technologies: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "CQRS",
      "Entity Framework Core",
      "PostgreSQL",
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Anthropic SDK",
      "Claude Vision",
      "OCR",
      "Vision Models",
      "Azure Service Bus",
      "Microsoft Entra ID",
      "JWT",
      "API Keys",
      "Rate Limiting",
      "Docker",
      "GitHub Actions",
      "Azure App Service",
      "xUnit",
      "Logging",
      "Health Checks",
    ],
    results: [
      "Flujo de identidad implementado de extremo a extremo.",
      "Revisión manual ante baja confianza, campos faltantes, vencimiento, errores MRZ o inconsistencias.",
      "Procesamiento asíncrono con Azure Service Bus en producción y polling en desarrollo.",
      "Arquitectura extensible para nuevos tipos de analizadores.",
    ],
  },
  {
    id: "metrics",
    number: "02",
    name: "Analyzer Metrics Dashboard",
    category: "ANALYTICS / FULL-STACK / AI MONITORING",
    company: "Helius Consulting",
    description:
      "Una visión clara de la calidad, estabilidad y rendimiento de los analizadores inteligentes de documentos bancarios.",
    tags: [".NET 10", "React 19", "TanStack Query", "Azure"],
    features: [
      "Calidad y cobertura",
      "Latencia y costo operativo",
      "Filtros por periodo",
    ],
    problem:
      "Los equipos técnicos necesitan conocer la calidad, cobertura y nivel de preparación de sus analizadores de documentos bancarios.",
    solution:
      "Plataforma de monitoreo con indicadores de precisión de extracción, discrepancias, cobertura, latencia y costo operativo, consultables por periodos.",
    contribution:
      "Desarrollo full-stack del dashboard, integración con la API y visualización de indicadores, gráficas, filtros y estados con actualización automática.",
    architecture: [
      "React 19 → TanStack Query / Zustand",
      "REST API / OpenAPI",
      "ASP.NET Core → CQRS",
      "Entity Framework Core → PostgreSQL",
      "Azure · GitHub Actions · CI/CD",
    ],
    technologies: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "CQRS",
      "Entity Framework Core",
      "PostgreSQL",
      "REST API",
      "OpenAPI",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Microsoft Azure",
      "GitHub Actions",
      "CI/CD",
    ],
    results: [
      "Consulta centralizada de métricas de calidad y rendimiento.",
      "Selección de periodos y actualización automática.",
      "Visibilidad de discrepancias, cobertura y estados del procesamiento.",
    ],
  },
  {
    id: "livestock",
    number: "03",
    name: "Livestock Management Platform",
    category: "BUSINESS AUTOMATION / BACKEND / CLOUD",
    company: "Automatizaci?n empresarial",
    description:
      "Software que entiende la operación: control de ganado, inventarios y ventas en un solo lugar.",
    tags: ["C#", "ASP.NET Core", "SQL", "Azure"],
    features: [
      "Reglas de negocio",
      "Gestión centralizada",
      "Reportes operativos",
    ],
    problem:
      "Una empresa ganadera necesitaba automatizar procesos y centralizar información de su operación diaria.",
    solution:
      "Sistema de gestión con módulos de control de ganado, inventarios, ventas, procesos administrativos, reportes y seguimiento operativo.",
    contribution:
      "Análisis de procesos de negocio y desarrollo de una solución para automatizar la operación, con reglas de negocio y APIs REST.",
    architecture: [
      "Módulos de gestión empresarial",
      "REST APIs → ASP.NET Core",
      "Reglas de negocio en C# / .NET",
      "Persistencia SQL",
      "Microsoft Azure",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "SQL",
      "Microsoft Azure",
      "REST APIs",
    ],
    results: [
      "Información operativa centralizada.",
      "Módulos para ganado, inventario, ventas y reportes.",
      "Automatización orientada a reducir trabajo manual y ahorrar tiempo operativo; sin métricas de ahorro cuantificadas.",
    ],
  },
];
