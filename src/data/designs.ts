export const designs = [
  {
    id: "saas",
    name: "Orbit — SaaS & Product",
    category: "PRODUCT LANDING PAGE",
    description:
      "Una landing de producto con jerarquía clara, una interfaz de trabajo como protagonista y acentos violeta.",
    details:
      "Diseño orientado a explicar un producto digital rápidamente: propuesta de valor, visual del producto y llamadas a la acción. Composición modular y adaptación a móvil.",
  },
  {
    id: "architecture",
    name: "Forma — Architecture Studio",
    category: "EDITORIAL & CORPORATE",
    description:
      "Dirección editorial, tonos cálidos y arquitectura geométrica para una presencia de marca sofisticada.",
    details:
      "Un concepto para un estudio de arquitectura: tipografía editorial, navegación discreta y una composición visual que da espacio a los proyectos. La ilustración arquitectónica está construida en CSS.",
  },
  {
    id: "commerce",
    name: "Aural — Digital Commerce",
    category: "E-COMMERCE & BRAND",
    description:
      "Una experiencia de producto con contraste, formas tridimensionales y una identidad visual contundente.",
    details:
      "Concepto de comercio digital centrado en producto, con una ilustración original de audífonos, detalles de colección y una composición adaptable. Es una propuesta visual; no incluye carrito ni pagos.",
  },
] as const;
export type Design = (typeof designs)[number];
