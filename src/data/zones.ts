export interface Zone {
  id: string;
  name: string;
  slugSuffix: string;
  cities: string[];
  citiesInline: string;
  areasShort: string;
  areasDetailed: string[];
  mapCenter: [number, number];
  mapZoom: number;
  mapRadius: number;
  mapPopupText: string;
  localInfoTitle: string;
  localInfoText: string;
}

export const zones: Zone[] = [
  {
    id: "bruxelles",
    name: "Bruxelles",
    slugSuffix: "bruxelles-schaerbeek-anderlecht",
    cities: ["Bruxelles", "Schaerbeek", "Anderlecht"],
    citiesInline: "Bruxelles, Schaerbeek et Anderlecht",
    areasShort: "Bruxelles et ses alentours",
    areasDetailed: [],
    mapCenter: [50.845, 4.350],
    mapZoom: 11,
    mapRadius: 8000,
    mapPopupText: "<strong>Zone d'intervention ITR Services</strong><br>Bruxelles et toutes les communes",
    localInfoTitle: "Plombier à Bruxelles – Dépannage 24h/24",
    localInfoText: "Une fuite d'eau, une canalisation bouchée ou un problème de plomberie ? Notre plombier intervient rapidement dans toutes les communes de Bruxelles, 24h/24 et 7j/7. Profitez d'un service professionnel, rapide et au prix juste.",
  },
  {
    id: "waterloo",
    name: "Waterloo, Wavre & Nivelles",
    slugSuffix: "waterloo-wavre-nivelles",
    cities: ["Waterloo", "Wavre", "Nivelles"],
    citiesInline: "Waterloo, Wavre et Nivelles",
    areasShort: "Waterloo, Wavre, Nivelles et alentours",
    areasDetailed: [
      "Waterloo", "Wavre", "Nivelles", "Braine-l'Alleud", "Braine-le-Château",
      "Lasne", "La Hulpe", "Rixensart", "Ottignies-Louvain-la-Neuve",
      "Court-Saint-Étienne", "Genappe", "Tubize", "Ittre",
    ],
    mapCenter: [50.62, 4.47],
    mapZoom: 10,
    mapRadius: 15000,
    mapPopupText: "<strong>Zone d'intervention ITR Services</strong><br>Waterloo, Wavre, Nivelles et alentours",
    localInfoTitle: "Votre plombier local à Waterloo, Wavre, Nivelles et alentours",
    localInfoText: "Nous intervenons en <strong class=\"text-dark-blue\">moins d'1 heure</strong> à Waterloo, Wavre, Nivelles et dans toutes les communes du Brabant wallon. Des villas de Waterloo aux habitations de Wavre et Nivelles, nous adaptons nos interventions à chaque situation.",
  },
  {
    id: "charleroi",
    name: "Charleroi, Mons & La Louvière",
    slugSuffix: "charleroi-mons-louviere",
    cities: ["Charleroi", "Mons", "La Louvière"],
    citiesInline: "Charleroi, Mons et La Louvière",
    areasShort: "Charleroi, Mons, La Louvière et alentours",
    areasDetailed: [
      "Charleroi", "Mons", "La Louvière", "Binche", "Manage",
      "Châtelet", "Fontaine-l'Évêque", "Fleurus", "Thuin",
      "Soignies", "Braine-le-Comte", "Seneffe",
    ],
    mapCenter: [50.41, 4.20],
    mapZoom: 10,
    mapRadius: 25000,
    mapPopupText: "<strong>Zone d'intervention ITR Services</strong><br>Charleroi, Mons, La Louvière et alentours",
    localInfoTitle: "Votre plombier local à Charleroi, Mons, La Louvière et alentours",
    localInfoText: "Nous intervenons en <strong class=\"text-dark-blue\">moins d'1 heure</strong> à Charleroi, Mons, La Louvière et dans toutes les communes du Hainaut. Des maisons de Charleroi aux habitations de Mons et La Louvière, nous adaptons nos interventions à chaque situation.",
  },
  {
    id: "namur",
    name: "Namur & Alentours",
    slugSuffix: "namur",
    cities: ["Namur"],
    citiesInline: "Namur et ses alentours",
    areasShort: "Namur et ses alentours",
    areasDetailed: [
      "Namur", "Jambes", "Wépion", "Erpent", "Malonne",
      "Flawinne", "Temploux", "Suarlée", "Belgrade",
      "Bouge", "Champion", "Loyers", "Gelbressée",
    ],
    mapCenter: [50.465, 4.87],
    mapZoom: 11,
    mapRadius: 12000,
    mapPopupText: "<strong>Zone d'intervention ITR Services</strong><br>Namur et alentours",
    localInfoTitle: "Votre plombier local à Namur et ses alentours",
    localInfoText: "Nous intervenons en <strong class=\"text-dark-blue\">moins d'1 heure</strong> à Namur et dans toutes les communes environnantes. Du centre de Namur aux quartiers de Jambes, Wépion et alentours, nous adaptons nos interventions à chaque situation.",
  },
];

export function getZone(id: string): Zone {
  const zone = zones.find(z => z.id === id);
  if (!zone) throw new Error(`Zone not found: ${id}`);
  return zone;
}

export function getNonBruxellesZones(): Zone[] {
  return zones.filter(z => z.id !== "bruxelles");
}

export const serviceBaseSlugs = [
  { baseSlug: "plombier", name: "Plomberie dépannage" },
  { baseSlug: "recherche-reparation-fuite", name: "Recherche & Réparation de fuite" },
  { baseSlug: "remplacement-boiler", name: "Boiler (réparation & remplacement)" },
  { baseSlug: "debouchage", name: "Débouchage" },
  { baseSlug: "renovation-salle-de-bain", name: "Rénovation salle de bain" },
];
