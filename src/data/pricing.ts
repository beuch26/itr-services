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
    title: "Détection de fuite",
    price: "390",
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
    price: "899",
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

export const pricingFuite: PricingCard[] = [
  {
    title: "Détection de fuite",
    price: "390",
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
];

export const pricingDebouchage: PricingCard[] = [
  {
    title: "Débouchage classique",
    price: "129",
    unit: "€",
    description: "Débouchage rapide de vos canalisations",
    features: [
      "Intervention rapide",
      "Devis gratuit sur place",
      "Matériel professionnel",
      "Garantie de résultat",
    ],
  },
  {
    title: "Curage haute pression",
    price: "199",
    unit: "€",
    description: "Curage de vos canalisations à l'eau haute pression",
    features: [
      "Intervention rapide",
      "Devis gratuit sur place",
      "Eau haute pression professionnelle",
      "Garantie de résultat",
    ],
  },
  {
    title: "Débouchage hydrocurage",
    price: "390",
    unit: "€",
    description: "Débouchage haute pression de vos canalisations",
    features: [
      "Hydrocurage haute pression",
      "Bouchons tenaces et profonds",
      "Caméra d'inspection incluse",
      "Garantie de résultat",
    ],
    highlighted: true,
  },
];

export const pricingBoiler: PricingCard[] = [
  {
    title: "Diagnostic",
    price: "99",
    unit: "€",
    description: "Diagnostic complet de votre installation",
    features: [
      "Intervention rapide",
      "Analyse complète du système",
      "Devis détaillé fourni",
      "Sans engagement",
    ],
  },
  {
    title: "Débouchage classique",
    price: "129",
    unit: "€",
    description: "Débouchage rapide de vos canalisations",
    features: [
      "Intervention rapide",
      "Devis gratuit sur place",
      "Matériel professionnel",
      "Garantie de résultat",
    ],
  },
  {
    title: "Groupe de sécurité",
    price: "199",
    unit: "€",
    description: "Remplacement du groupe de sécurité",
    features: [
      "Pièces de qualité",
      "Installation professionnelle",
      "Mise en service incluse",
      "Garantie sur la réparation",
    ],
  },
  {
    title: "Remplacement boiler",
    price: "899",
    unit: "€",
    description: "Installation d'un nouveau boiler électrique",
    features: [
      "Dépose ancien boiler",
      "Installation neuf",
      "Mise en service complète",
      "Garantie constructeur",
    ],
    highlighted: true,
  },
];

export const pricingFull: PricingCard[] = [
  ...pricingHomepage,
  {
    title: "Déplacement",
    price: "60 à 120",
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
