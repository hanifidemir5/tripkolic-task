"use client";

import Navbar from "./navbar";
import coast from "../../public/DSC_0753.jpg";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tourPackages } from "./Data/DummyData";
import { useState } from "react";
import { FilterState } from "./contexts/FilterContext";

export default function Home() {
  const currency = "THB";
  const [filteredPackages, setFilteredPackages] = useState(tourPackages);

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
            <div
              className="m-4 h-[350px] min-w-[300px] max-w-[300px] overflow-hidden rounded-xl shadow-md"
              key={tourPackage.id}
            >
              <div>
                <img src={coast.src} alt="coast" className="w-[300px] h-[150px]" />
              </div>
              <div className="h-[200px] w-full p-2 flex flex-col justify-between">
                <div className="overflow-hidden w-full flex flex-row flex-nowrap text-ellipsi text-sm">
                  <p className="w-1/2 flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} color="gold" />
                    <strong>{tourPackage.rating}</strong> ({tourPackage.reviews})
                  </p>
                  <p className="w-1/2 whitespace-nowrap overflow-hidden text-ellipsis">
                    <FontAwesomeIcon icon={faLocationDot} color="gold" className="mr-1" />
                    <span className="inline text-gray-600">{tourPackage.location}</span>
                  </p>
                </div>
                <h1 className="text-lg font-bold font-sans">{tourPackage.title}</h1>
                <p className="flex justify-end gap-2 items-center">
                  <span className="line-through text-red-500">
                    {currency} {tourPackage.originalPrice}
                  </span>
                  <span className="rotate-90 text-red-500 text-2xl">&#8599;</span>
                  <strong>
                    {currency} {tourPackage.discountedPrice}
                  </strong>
                </p>
                <div className="flex justify-between">
                  <a className="text-[#F78410] underline items-center">
                    Details <span className="text-2xl">&#8594;</span>
                  </a>
                  <button className="px-2 py-1 my-1 bg-[#F78410] text-white rounded-md text-sm">Book Now</button>
                </div>
              </div>
            </div>
          )
        )}
      </main>
    </div>
  );
}
