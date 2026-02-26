export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export const reviews: Review[] = [
  {
    name: "Rabih S.",
    rating: 5,
    text: "Réactif, le technicien est arrivé rapidement. Bonne qualité du travail.",
    date: "Février 2026",
    service: "Plomberie dépannage",
  },
  {
    name: "Sigrid H.",
    rating: 5,
    text: "Très bon travail après 18h. Professionnel et efficace même en dehors des heures habituelles.",
    date: "Février 2026",
    service: "Plomberie dépannage",
  },
  {
    name: "Jean-Marc T.",
    rating: 5,
    text: "Remplacement WC un samedi. Rapide et professionnel, rien à redire.",
    date: "Février 2026",
    service: "Plomberie dépannage",
  },
  {
    name: "Françoise G.",
    rating: 5,
    text: "Détection de fuite par ultra son. Impeccable et rapide !",
    date: "Février 2026",
    service: "Recherche de fuite",
  },
  {
    name: "Tiziana M.",
    rating: 5,
    text: "Très professionnel. Il m'a aidée à solutionner mon problème d'évier bouché par téléphone. Encore merci à lui !",
    date: "Décembre 2025",
    service: "Débouchage",
  },
  {
    name: "Maïté P.",
    rating: 5,
    text: "Bon travail et rapide. Je recommande sans hésiter.",
    date: "Décembre 2025",
    service: "Plomberie dépannage",
  },
  {
    name: "Enissa C.",
    rating: 5,
    text: "Super contente du travail effectué. Réparation de fuite rapide.",
    date: "Décembre 2025",
    service: "Réparation de fuite",
  },
  {
    name: "Faila M.",
    rating: 5,
    text: "Très gentil technicien, compétent. Merci Joseph pour la fuite d'évier !",
    date: "Novembre 2025",
    service: "Réparation de fuite",
  },
  {
    name: "Anne R.",
    rating: 5,
    text: "Parfait, super rapide, sympathique et surtout professionnel. Fuite trouvée en 30 min.",
    date: "Novembre 2025",
    service: "Recherche de fuite",
  },
  {
    name: "Alain F.",
    rating: 5,
    text: "Bonne analyse du problème. Merci à vous.",
    date: "Octobre 2025",
    service: "Plomberie dépannage",
  },
  {
    name: "Jan D.",
    rating: 5,
    text: "Merci Joseph pour la détection de fuite dans ma salle de bain à l'aide de caméra thermique. Bon travail !",
    date: "Octobre 2025",
    service: "Recherche de fuite",
  },
  {
    name: "François B.",
    rating: 5,
    text: "Bon service de détection de fuite. Résolution dans l'heure.",
    date: "Octobre 2025",
    service: "Recherche de fuite",
  },
];
