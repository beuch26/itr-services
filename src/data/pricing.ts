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
    title: "Dépannage plomberie",
    price: "149",
    unit: "€",
    description: "Intervention rapide pour tout problème de plomberie",
    features: [
      "Diagnostic sur place inclus",
      "Devis gratuit avant travaux",
      "Pièces de qualité incluses",
      "Garantie sur la réparation",
    ],
    highlighted: true,
  },
  {
    title: "Détection de fuite",
    price: "249",
    unit: "€",
    description: "Détection et réparation de toute fuite d'eau",
    features: [
      "Détection non destructive",
      "Caméra thermique & endoscopique",
      "Réparation durable",
      "Garantie sur la réparation",
    ],
  },
];

export const pricingFuite: PricingCard[] = [
  {
    title: "Détection de fuite",
    price: "249",
    unit: "€",
    description: "Détection et réparation de toute fuite d'eau",
    features: [
      "Détection non destructive",
      "Caméra thermique & endoscopique",
      "Réparation durable",
      "Garantie sur la réparation",
    ],
    highlighted: true,
  },
];

export const pricingDebouchage: PricingCard[] = [
  {
    title: "Débouchage classique",
    price: "149",
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
    price: "149",
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
    price: "249",
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
    price: "149",
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
    title: "Groupe de sécurité",
    price: "149",
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
    price: "249",
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
