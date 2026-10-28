export interface PricingCard {
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

/** Shown under every pricing grid */
export const pricingNote =
  "Prix HTVA. TVA 6 % (logement de plus de 10 ans) ou 21 %. Le prix total TVAC est toujours communiqué avant l'intervention. Déplacement de 60 à 120 € selon la zone. Majoration : +50 % après 18h et le samedi, +100 % après 22h, le dimanche et les jours fériés.";

export const pricingDebouchageIntro =
  "Chaque bouchon est différent. Notre technicien fait d'abord un diagnostic, puis vous annonce le prix exact avant de commencer. Vous décidez, sans engagement. Aucun travail n'est effectué sans votre accord : pas de mauvaise surprise sur la facture.";

export const pricingHomepage: PricingCard[] = [
  {
    title: "Dépannage plomberie",
    description: "Intervention rapide pour tout problème de plomberie",
    features: [
      "Prix annoncé avant intervention",
      "Pièces de qualité",
      "Travaux garantis 2 ans",
    ],
    highlighted: true,
  },
  {
    title: "Détection de fuite",
    description: "390 € HTVA — recherche de fuite uniquement",
    features: [
      "Détection non destructive",
      "Caméra thermique & endoscopique",
      "Réparation en plus, dès 390 € HTVA",
      "Ouverture et remise en état chiffrées à part",
    ],
  },
];

export const pricingFuite: PricingCard[] = [
  {
    title: "Détection de fuite",
    description: "390 € HTVA — recherche de fuite uniquement",
    features: [
      "Détection non destructive",
      "Caméra thermique & endoscopique",
      "Localisation précise de la fuite",
    ],
    highlighted: true,
  },
  {
    title: "Réparation de fuite",
    description: "Dès 390 € HTVA — prix annoncé avant les travaux",
    features: [
      "Réparation durable",
      "Ouverture et remise en état chiffrées à part",
      "Travaux garantis 2 ans",
    ],
  },
];

export const pricingDebouchage: PricingCard[] = [
  {
    title: "Débouchage classique",
    description: "Débouchage rapide de vos canalisations",
    features: [
      "Diagnostic avant tout travail",
      "Prix exact annoncé avant de commencer",
      "Matériel professionnel",
      "Garantie 3 mois (même bouchon)",
    ],
  },
  {
    title: "Curage haute pression",
    description: "Curage de vos canalisations à l'eau haute pression",
    features: [
      "Diagnostic avant tout travail",
      "Prix exact annoncé avant de commencer",
      "Eau haute pression professionnelle",
      "Garantie 3 mois (même bouchon)",
    ],
  },
  {
    title: "Débouchage hydrocurage",
    description: "Débouchage haute pression de vos canalisations",
    features: [
      "Hydrocurage haute pression",
      "Bouchons tenaces et profonds",
      "Prix exact annoncé avant de commencer",
      "Garantie 3 mois (même bouchon)",
    ],
    highlighted: true,
  },
];

export const pricingBoiler: PricingCard[] = [
  {
    title: "Diagnostic",
    description: "Diagnostic complet de votre installation",
    features: [
      "Intervention rapide",
      "Analyse complète du système",
      "Prix annoncé avant réparation",
      "Sans engagement",
    ],
  },
  {
    title: "Groupe de sécurité",
    description: "290 € HTVA de main-d'œuvre, pièce en plus",
    features: [
      "Vidange comprise",
      "Remise en service comprise",
      "Pièces de qualité",
      "Travaux garantis 2 ans",
    ],
  },
  {
    title: "Remplacement boiler",
    description: "Boiler électrique complet dès 1 290 € HTVA",
    features: [
      "Appareil et groupe de sécurité",
      "Dépose de l'ancien boiler",
      "Placement, déplacement et main-d'œuvre",
      "Garantie 2 ans appareil et installation",
    ],
    highlighted: true,
  },
];
