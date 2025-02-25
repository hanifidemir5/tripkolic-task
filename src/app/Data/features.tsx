export type Feature = {
  id: string;
  label: string;
  count: number;
};

const features: Feature[] = [
  {
    id: "transfer",
    label: "Transfer",
    count: 43,
  },
  {
    id: "halalFood",
    label: "Halal Food",
    count: 43,
  },
  {
    id: "vegetarianFood",
    label: "Vegetarian Food",
    count: 43,
  },
];

export default features;
