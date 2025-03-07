export type TourPackage = {
  id: number;
  title: string;
  rating: number;
  reviews: number;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  activities: string[];
  features: string[];
  themes: string[];
  vehicles: string[];
  category: string;
  startTime: string;
  groupSize: number;
};

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Phi Phi, Khai Islands Tour with Speedboat Full Day",
    rating: 4.3,
    reviews: 20,
    location: "Rossada Pier/Rassada",
    originalPrice: 1820,
    discountedPrice: 1400,
    activities: ["swimming", "snorkelling"],
    features: ["transfer", "halalFood"],
    themes: ["islandTour"],
    vehicles: ["speedboat"],
    category: "Tours",
    startTime: "18:00",
    groupSize: 5,
  },
  {
    id: 2,
    title: "James Bond Island Tour by Longtail Boat",
    rating: 4.7,
    reviews: 35,
    location: "Ao Por Pier/Phang Nga Bay",
    originalPrice: 2000,
    discountedPrice: 1650,
    activities: ["swimming", "snorkelling"],
    features: ["transfer", "vegetarianFood"],
    themes: ["islandTour", "historicalTour"],
    vehicles: ["speedboat"],
    category: "Tours",
    startTime: "19:00",
    groupSize: 20,
  },
  {
    id: 3,
    title: "Similan Islands Snorkeling Adventure",
    rating: 4.5,
    reviews: 28,
    location: "Tap Lamu Pier/Khao Lak",
    originalPrice: 2500,
    discountedPrice: 2100,
    activities: ["swimming", "snorkelling"],
    features: ["transfer", "halalFood", "vegetarianFood"],
    themes: ["islandTour"],
    vehicles: ["speedboat", "yacht"],
    category: "Tours",
    startTime: "17:30",
    groupSize: 15,
  },
  {
    id: 4,
    title: "Bangkok City Tour & Grand Palace",
    rating: 4.8,
    reviews: 50,
    location: "Bangkok",
    originalPrice: 1800,
    discountedPrice: 1500,
    activities: ["running"],
    features: ["transfer", "vegetarianFood"],
    themes: ["cityTour", "historicalTour"],
    vehicles: ["bus"],
    category: "Tickets",
    startTime: "19:30",
    groupSize: 10,
  },
  {
    id: 5,
    title: "Chiang Mai Food Tour - Northern Delicacies",
    rating: 4.9,
    reviews: 22,
    location: "Chiang Mai",
    originalPrice: 1200,
    discountedPrice: 950,
    activities: ["foodTour"],
    features: ["vegetarianFood"],
    themes: ["foodTour"],
    vehicles: ["walking"],
    category: "Tickets",
    startTime: "15:00",
    groupSize: 12,
  },
  {
    id: 6,
    title: "Ayutthaya Historical Tour & River Cruise",
    rating: 4.6,
    reviews: 38,
    location: "Ayutthaya",
    originalPrice: 2600,
    discountedPrice: 2300,
    activities: ["running"],
    features: ["transfer", "vegetarianFood"],
    themes: ["historicalTour", "riverCruise"],
    vehicles: ["boat", "bus"],
    category: "Tickets",
    startTime: "18:30",
    groupSize: 5,
  },
  {
    id: 7,
    title: "Floating Market & River Cruise",
    rating: 4.4,
    reviews: 32,
    location: "Damnoen Saduak",
    originalPrice: 2200,
    discountedPrice: 1850,
    activities: ["running"],
    features: ["transfer", "halalFood"],
    themes: ["riverCruise", "foodTour"],
    vehicles: ["boat"],
    category: "Rent",
    startTime: "17:00",
    groupSize: 15,
  },
  {
    id: 8,
    title: "Mount Doi Inthanon Trekking Adventure",
    rating: 4.7,
    reviews: 29,
    location: "Doi Inthanon National Park",
    originalPrice: 3200,
    discountedPrice: 2800,
    activities: ["running"],
    features: ["transfer"],
    themes: ["mountainTrek"],
    vehicles: ["walking"],
    category: "Rent",
    startTime: "16:30",
    groupSize: 15,
  },
  {
    id: 9,
    title: "Desert Safari with Camel Ride & BBQ Dinner",
    rating: 4.5,
    reviews: 45,
    location: "Dubai Desert",
    originalPrice: 3500,
    discountedPrice: 3100,
    activities: ["running"],
    features: ["transfer", "halalFood"],
    themes: ["desertSafari"],
    vehicles: ["jeep", "camel"],
    category: "Transfer",
    startTime: "14:00",
    groupSize: 20,
  },
  {
    id: 10,
    title: "Safari Wildlife & Elephant Care Experience",
    rating: 4.6,
    reviews: 40,
    location: "Khao Sok National Park",
    originalPrice: 3000,
    discountedPrice: 2700,
    activities: ["elephantCare"],
    features: ["transfer"],
    themes: ["safari"],
    vehicles: ["jeep"],
    category: "Transfer",
    startTime: "14:00",
    groupSize: 15,
  },
];
