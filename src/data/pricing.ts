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
