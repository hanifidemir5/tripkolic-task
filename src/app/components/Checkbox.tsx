import React from "react";
import { activity } from "../Data/activities";
import { Theme } from "../Data/themes";
import { Feature } from "../Data/features";
import { Vehicle } from "../Data/vehicles";

type CheckBoxProps = {
  checkboxChoice: activity | Theme | Feature | Vehicle;
  checked: boolean; // Add checked prop
  onChange: () => void; // Add onChange prop
};

export const CheckBox: React.FC<CheckBoxProps> = ({ checkboxChoice, checked, onChange }) => {
  return (
    <div className="my-4">
      <input type="checkbox" id={checkboxChoice.label} className="peer hidden" checked={checked} onChange={onChange} />
      <label
        htmlFor={checkboxChoice.label}
        className="cursor-pointer p-2 text-sm border-2 border-gray-400 rounded-md transition-colors peer-checked:bg-[#F2A945]"
      >
        {checkboxChoice.label} ({checkboxChoice.count})
      </label>
    </div>
  );
};
