export interface Service {
  name: string;
  slug: string;
  shortDesc: string;
  icon: string;
}

export const services: Service[] = [
  {
    name: "Plomberie dépannage",
    slug: "plombier-bruxelles-schaerbeek-anderlecht",
    shortDesc: "Intervention rapide pour tous vos problèmes de plomberie, fuites et urgences.",
    icon: "wrench",
  },
  {
    name: "Recherche & Réparation de fuite",
    slug: "recherche-reparation-fuite-bruxelles-schaerbeek-anderlecht",
    shortDesc: "Détection précise et réparation durable de toutes les fuites d'eau.",
    icon: "droplet",
  },
  {
    name: "Remplacement boiler",
    slug: "remplacement-boiler-bruxelles-schaerbeek-anderlecht",
    shortDesc: "Installation et remplacement de boilers électriques, rapide et garanti.",
    icon: "flame",
  },
  {
    name: "Débouchage",
    slug: "debouchage-bruxelles-schaerbeek-anderlecht",
    shortDesc: "Débouchage professionnel de canalisations, WC, éviers et douches.",
    icon: "pipe",
  },
  {
    name: "Rénovation salle de bain",
    slug: "renovation-salle-de-bain-bruxelles-schaerbeek-anderlecht",
    shortDesc: "Rénovation complète de votre salle de bain, du sol au plafond.",
    icon: "bath",
  },
];
