"use client";

import Navbar from "./navbar";
import { tourPackages } from "./Data/DummyData";
import { useState } from "react";
import { FilterState } from "./contexts/FilterContext";
import EventCard from "./components/EventCard";

export default function Home() {
  const [filteredPackages, setFilteredPackages] = useState(tourPackages);
  const convertTimeStringToMinutes = (timeString: string): number => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const handleSearch = (filters: FilterState) => {
    console.log(filters);
    const newFilteredPackages = tourPackages.filter((tourPackage) => {
      return (
        (filters.category ? tourPackage.category === filters.category : true) &&
        (filters.themes && filters.themes.length > 0
          ? tourPackage.themes.some((theme) => filters.themes?.includes(theme))
          : true) &&
        (filters.activities && filters.activities.length > 0
          ? tourPackage.activities.some((activity) => filters.activities?.includes(activity))
          : true) &&
        (filters.vehicles && filters.vehicles.length > 0
          ? tourPackage.vehicles.some((vehicle) => filters.vehicles?.includes(vehicle))
          : true) &&
        (filters.features && filters.features.length > 0
          ? tourPackage.features.some((feature) => filters.features?.includes(feature))
          : true) &&
        (filters.discountedPrice ? tourPackage.discountedPrice <= filters.discountedPrice : true) &&
        (filters.groupSize ? tourPackage.groupSize <= filters.groupSize : true) &&
        (filters.startTime ? convertTimeStringToMinutes(tourPackage.startTime) >= filters.startTime : true) &&
        (filters.location && filters.location.length > 0 ? tourPackage.location === filters.location : true)
      );
    });

    setFilteredPackages(newFilteredPackages);
  };

  return (
    <div className="absolute w-full">
      <Navbar onSearch={handleSearch} />
      <main className="flex w-full justify-center flex-wrap">
        {filteredPackages.map(
          (
            tourPackage // Use filteredPackages here
          ) => (
            <EventCard tourPackage={tourPackage} key={tourPackage.id} />
          )
        )}
      </main>
    </div>
  );
}
