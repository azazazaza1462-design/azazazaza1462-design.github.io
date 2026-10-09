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
      "Una web editorial con fotografía arquitectónica, tipografía elegante y espacio para que cada proyecto destaque.",
    details:
      "Un concepto para un estudio de arquitectura: fotografía de referencia de Unsplash, tipografía editorial y navegación discreta. La interfaz se construye con HTML y CSS y se adapta a escritorio y móvil. La fotografía ilustra la dirección visual; no es un proyecto del estudio ficticio.",
  },
  {
    id: "commerce",
    name: "Aural — Digital Commerce",
    category: "E-COMMERCE & BRAND",
    description:
      "Fotografía de producto, una composición limpia y detalles de colección para una experiencia de compra con identidad.",
    details:
      "Concepto de comercio digital con fotografía de audífonos de Unsplash, detalles de colección y una composición adaptable. La imagen es una referencia visual para la marca ficticia Aural. Es una propuesta de interfaz; no incluye carrito ni pagos.",
  },
] as const;
export type Design = (typeof designs)[number];
