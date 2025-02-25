"use client";

import React, { createContext, useContext, useState } from "react";

export type FilterState = {
  discountedPrice: number;
  activities?: string[];
  features?: string[];
  themes?: string[];
  vehicles?: string[];
  category: string;
  startTime: number;
  groupSize: number;
  location?: string;
};

interface FilterContextProps {
  filterForm: FilterState;
  setFilterForm: React.Dispatch<React.SetStateAction<FilterState>>;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filterForm, setFilterForm] = useState<FilterState>({
    discountedPrice: 12500,
    category: "",
    startTime: 720,
    groupSize: 30,
  });

  return <FilterContext.Provider value={{ filterForm, setFilterForm }}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
