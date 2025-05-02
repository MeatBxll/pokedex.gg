import { useEffect, useState } from "react";
import "./BuildTeamOption.css";
import { buildTeamOptionsDropDown } from "./BuildTeamOptionsDropDown/BuildTeamOptionsDropDown";
import { PokePageTypeColors } from "../../../PokePage/components/PokePageTypeColors/PokePageTypeColors";
import { BuildTeamOptionsAllPoke } from "./BuildTeamOptionAllPoke/BuildTeamOptionsAllPoke";

export const BuildTeamOptions = () => {
  const optionsData = buildTeamOptionsDropDown;

  function getColorByType(type: string): string | undefined {
    const match = PokePageTypeColors.find((t) => t.type === type);
    return match?.color;
  }
  const [isSelected, setIsSelected] = useState(false);

  const [typesToRender, setTypesToRender] = useState(optionsData[0].options);

  const [search, setSearch] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="buildTeamOptions__wrap">
      <div className="buildTeamOptions__options">
        <h3 className="buildTeamOptions__options-header">Options</h3>

        <div className="buildTeamOptions__options-options">
          <div className="buildTeamOptions__options-search-wrap">
            <input
              type="text"
              placeholder="Search Pokemon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="buildTeamOptions__options-search"
            />
          </div>
          <div>
            {optionsData.map((option, index) => {
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
                    style={!isSelected ? { display: "none" } : {}}
                  >
                    {option.label === "Type"
                      ? option.options.map((subOption, index) => {
                          return (
                            <button
                              className="buildTeamOptions__options-suboption-button"
                              style={
                                typesToRender.includes(subOption)
                                  ? {
                                      backgroundColor:
                                        getColorByType(subOption),
                                    }
                                  : { backgroundColor: "#272e5e" }
                              }
                              onClick={
                                typesToRender.includes(subOption)
                                  ? () =>
                                      setTypesToRender(
                                        typesToRender.filter(
                                          (item) => item !== subOption
                                        )
                                      )
                                  : () =>
                                      setTypesToRender((prevItems) => [
                                        ...prevItems,
                                        subOption,
                                      ])
                              }
                              key={index}
                            >
                              {subOption}
                            </button>
                          );
                        })
                      : option.options.map((subOption, index) => (
                          <button
                            style={{ backgroundColor: "#4152CC" }}
                            className="buildTeamOptions__options-suboption-button"
                            key={index}
                          >
                            {subOption}
                          </button>
                        ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="buildTeamOptions__pokemon-wrap">
          {optionsData[0].options.map((type) => (
            <div
              style={typesToRender.includes(type) ? {} : { display: "none" }}
            >
              <BuildTeamOptionsAllPoke
                searchInput={search}
                key={type}
                type={type}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
