export interface PricingCard {
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingHomepage: PricingCard[] = [
  {
    title: "Débouchage",
    price: "69",
    unit: "€",
    description: "Débouchage rapide de vos canalisations",
    features: [
      "Intervention en 30-60 min",
      "Devis gratuit sur place",
      "Matériel professionnel",
      "Garantie de résultat",
    ],
  },
  {
    title: "Réparation de fuite",
    price: "89",
    unit: "€",
    description: "Détection et réparation de toute fuite d'eau",
    features: [
      "Diagnostic complet",
      "Réparation durable",
      "Pièces de qualité incluses",
      "Garantie sur la réparation",
    ],
    highlighted: true,
  },
  {
    title: "Remplacement boiler",
    price: "349",
    unit: "€",
    description: "Installation d'un nouveau boiler électrique",
    features: [
      "Dépose ancien boiler",
      "Installation neuf",
      "Mise en service complète",
      "Garantie constructeur",
    ],
  },
];

export const pricingFull: PricingCard[] = [
  ...pricingHomepage,
  {
    title: "Déplacement",
    price: "50",
    unit: "€",
    description: "Frais de déplacement dans la région bruxelloise",
    features: [
      "Diagnostic sur place inclus",
      "Devis gratuit avant travaux",
      "Toute la région de Bruxelles",
      "Disponible 24h/24, 7j/7",
    ],
  },
];
