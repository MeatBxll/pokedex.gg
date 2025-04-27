import { useState } from "react";
import "./BuildTeamOption.css";
import { buildTeamOptionsDropDown } from "./BuildTeamOptionsDropDown/BuildTeamOptionsDropDown";

export const BuildTeamOptions = () => {
  const optionsData = buildTeamOptionsDropDown;

  return (
    <div className="buildTeamOptions__wrap">
      <div className="buildTeamOptions__options">
        <h3 className="buildTeamOptions__options-header">Options</h3>
        <div className="buildTeamOptions__options-options">
          {optionsData.map((option, index) => {
            const [isSelected, setIsSelected] = useState(false);

            return (
              <div className="buildTeamOptions-option-wrap">
                <button
                  onClick={() => setIsSelected(!isSelected)}
                  className="buildTeamOptions__options-option"
                  key={index}
                >
                  {option.label}
                </button>
                <div
                  className="buildTeamOptions__options-suboption-wrap"
                  style={isSelected ? { display: "none" } : {}}
                >
                  {option.options.map((subOption, index) => (
                    <button key={index}>{subOption}</button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buildTeamOptions__pokemon"></div>
    </div>
  );
};
