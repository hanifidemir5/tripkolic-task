export type Theme = {
  id: string;
  label: string;
  count: number;
};

const themes: Theme[] = [
  {
    id: "islandTour",
    label: "Island Tour",
    count: 43,
  },
  {
    id: "landTour",
    label: "Land Tour",
    count: 43,
  },
  {
    id: "safari",
    label: "Safari",
    count: 43,
  },
  {
    id: "cityTour",
    label: "City Tour",
    count: 30,
  },
  {
    id: "mountainTrek",
    label: "Mountain Trek",
    count: 25,
  },
  {
    id: "riverCruise",
    label: "River Cruise",
    count: 50,
  },
  {
    id: "desertSafari",
    label: "Desert Safari",
    count: 18,
  },
  {
    id: "historicalTour",
    label: "Historical Tour",
    count: 12,
  },
  {
    id: "foodTour",
    label: "Food Tour",
    count: 36,
  },
];

export default themes;
