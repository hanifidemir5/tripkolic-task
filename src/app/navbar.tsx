"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import tourismCategories, { TourismCategory } from "./Data/categories";
import { NavCategories } from "./components/NavCategories";
import { activities } from "./Data/activities";
import { CheckBox } from "./components/Checkbox";
import themes from "./Data/themes";
import vehicles from "./Data/vehicles";
import features from "./Data/features";
import { useFilter } from "./contexts/FilterContext";
import { FilterState } from "./contexts/FilterContext";

type NavbarProps = {
  onSearch: (filters: FilterState) => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<TourismCategory | null>(null);
  const { setFilterForm } = useFilter();
  const { filterForm } = useFilter();

  const handleFilterChange = (key: keyof FilterState, value: unknown) => {
    setFilterForm((prevFilter) => ({
      ...prevFilter,
      [key]: value,
    }));
  };

  const handleFilter = () => {
    onSearch(filterForm);
  };

  const toggleArrayItem = (key: keyof FilterState, item: string) => {
    setFilterForm((prevFilter) => {
      const currentArray = prevFilter[key] || [];

      if (Array.isArray(currentArray)) {
        const newArray = currentArray.includes(item) ? currentArray.filter((i) => i !== item) : [...currentArray, item];

        return {
          ...prevFilter,
          [key]: newArray,
        };
      }

      return prevFilter;
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category: TourismCategory) => {
    setSelectedCategory((prev) => (prev?.id === category.id ? null : category));
    handleFilterChange("category", category.name); // Use handleFilterChange to update the category
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  };

  return (
    <div className="h-100vh">
      <div className={`flex p-4 w-full text-center gap-4 justify-between items-center font-bold`}>
        <FontAwesomeIcon icon={faBars} className="h-10 w-10 text-[#F2A945]" onClick={toggleSidebar} />
        <Link href="/">Favorites </Link>
        <Link href="/cart">Cart </Link>
        <Link href="/login">Log In</Link>
      </div>
      <div
        className={`border-gray bg-white min-h-screen sm:max-w-[600px] justify-center z-10 border-4 overflow-hidden items-start flex-wrap rounded-3xl absolute transition-all duration-500 ease-linear mx-4 ${
          isOpen ? "translate-y-[0%]" : "translate-y-[+50%] opacity-0 pointer-events-none"
        }`}
        ref={sidebarRef}
      >
        <div className="flex justify-center m-2">
          <p className="underline self-center text-center">Filter</p>
          <FontAwesomeIcon icon={faXmark} className="h-6 w-6 absolute right-4" onClick={toggleSidebar} />
        </div>
        <div className="gap-2 flex flex-row align-top justify-center flex-wrap text-sm">
          {tourismCategories.map((category) => (
            <NavCategories
              key={category.id}
              tourismCategory={category}
              selectedCategory={selectedCategory}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
          {selectedCategory && (
            <div className="w-full">
              <div className="input-container w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Location</h4>
                <input
                  id="location"
                  type="text"
                  className="rounded-md border-[#e5e7eb] border-2 h-10 indent-3"
                  placeholder="Where do you wanna visit?"
                  value={filterForm.location || ""}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                />
              </div>
              <div className="input-container w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Theme</h4>
                <div className="flex flex-row gap-2 flex-wrap">
                  {themes.map((theme) => (
                    <CheckBox
                      key={theme.label}
                      checkboxChoice={theme}
                      checked={(filterForm.themes || []).includes(theme.id)}
                      onChange={() => toggleArrayItem("themes", theme.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="input-container w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Activity</h4>
                <div className="flex flex-row gap-2 flex-wrap">
                  {activities.map((activity) => (
                    <CheckBox
                      key={activity.id}
                      checkboxChoice={activity}
                      checked={(filterForm.activities || []).includes(activity.id)}
                      onChange={() => toggleArrayItem("activities", activity.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="input-container w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Vehicle</h4>
                <div className="flex flex-row gap-2 flex-wrap">
                  {vehicles.map((vehicle) => (
                    <CheckBox
                      key={vehicle.id}
                      checkboxChoice={vehicle}
                      checked={(filterForm.vehicles || []).includes(vehicle.id)}
                      onChange={() => toggleArrayItem("vehicles", vehicle.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="input-container w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Features</h4>
                <div className="flex flex-row gap-2 flex-wrap">
                  {features.map((feature) => (
                    <CheckBox
                      key={feature.id}
                      checkboxChoice={feature}
                      checked={(filterForm.features || []).includes(feature.id)}
                      onChange={() => toggleArrayItem("features", feature.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Price</h4>
                <div className="flex w-full justify-center gap-4 items-center">
                  <input
                    className="range-slider w-[60%] appearance-none h-2 bg-gray-300 rounded-lg outline-none cursor-pointer"
                    id="price"
                    type="range"
                    min={0}
                    max={25000}
                    value={filterForm.discountedPrice}
                    name="price"
                    onChange={(e) => handleFilterChange("discountedPrice", Number(e.target.value))}
                  />
                  <output className="px-1 border-2 rounded-md border-gray">{filterForm.discountedPrice}</output>
                </div>
              </div>
              <div className="w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Start Time</h4>
                <div className="flex w-full justify-center gap-4 items-center">
                  <input
                    className="range-slider w-[60%] appearance-none h-2 bg-gray-300 rounded-lg outline-none cursor-pointer"
                    id="startTime"
                    type="range"
                    min={0}
                    max={1439}
                    value={filterForm.startTime}
                    step={30}
                    name="startTime"
                    onChange={(e) => handleFilterChange("startTime", Number(e.target.value))}
                  />
                  <output className="px-1 border-2 rounded-md border-gray">{formatTime(filterForm.startTime)}</output>
                </div>
              </div>
              <div className="w-full flex flex-col p-2">
                <h4 className="font-bold my-2">Group Size</h4>
                <div className="flex w-full justify-center gap-4 items-center">
                  <input
                    className="range-slider w-[60%] appearance-none h-2 bg-gray-300 rounded-lg outline-none cursor-pointer"
                    id="groupSize"
                    type="range"
                    min={1}
                    max={30}
                    value={filterForm.groupSize}
                    name="groupSize"
                    onChange={(e) => handleFilterChange("groupSize", Number(e.target.value))}
                  />
                  <output className="px-1 border-2 rounded-md border-gray">{filterForm.groupSize}</output>
                </div>
              </div>
              <style jsx>{`
                .range-slider::-webkit-slider-thumb {
                  appearance: none;
                  width: 20px;
                  height: 20px;
                  background: #f2a945;
                  border-radius: 50%;
                  cursor: pointer;
                  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                  vertical-align: center;
                  justify-content: center;
                }

                .range-slider::-moz-range-thumb {
                  width: 20px;
                  height: 20px;
                  background: #f2a945;
                  border-radius: 50%;
                  cursor: pointer;
                  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                }

                .range-slider::-webkit-slider-runnable-track {
                  border-radius: 10px;
                }

                .range-slider::-moz-range-track {
                  border-radius: 10px;
                }
              `}</style>
              <div className="button-container flex justify-between ">
                <button className="p-2 m-4 bg-[#F78410] rounded-md text-white font-bold">Reset</button>
                <button className="p-2 m-4 bg-[#F78410] rounded-md text-white font-bold" onClick={handleFilter}>
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
