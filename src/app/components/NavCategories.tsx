import React from "react";
import { TourismCategory } from "../Data/categories";

type NavCategoriesProps = {
  tourismCategory: TourismCategory;
  onClick: () => void;
  selectedCategory: TourismCategory | null;
};

export const NavCategories: React.FC<NavCategoriesProps> = ({ tourismCategory, onClick, selectedCategory }) => {
  return (
    <p
      className={`
        p-2 bg-[#F78410] rounded-2xl m-1 text-center text-white font-bold cursor-pointer transition-all duration-500 ease-in-out transform
        ${selectedCategory?.id === tourismCategory.id ? "absolute top-0 left-0" : "relative"}
        ${selectedCategory && selectedCategory.id !== tourismCategory.id ? "hidden" : ""}
      `}
      onClick={onClick}
    >
      {tourismCategory.name}
    </p>
  );
};
