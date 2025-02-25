export type TourismCategory = {
  id: number;
  name: string;
};

const tourismCategories: TourismCategory[] = [
  { id: 1, name: "Tours" },
  { id: 2, name: "Hotels" },
  { id: 3, name: "Restaurants" },
  { id: 4, name: "Activities" },
  { id: 5, name: "Transportation" },
];

export default tourismCategories;
