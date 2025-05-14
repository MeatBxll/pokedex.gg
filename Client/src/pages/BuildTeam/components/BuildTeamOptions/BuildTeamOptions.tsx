import { useState } from "react";
import "./BuildTeamOption.css";
import { PokePageTypeColors } from "../../../PokePage/components/PokePageTypeColors/PokePageTypeColors";
import { BuildTeamOptionsAllPoke } from "./BuildTeamOptionAllPoke/BuildTeamOptionsAllPoke";

interface BuildTeamOptionsProps {
  dragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const BuildTeamOptions = (props: BuildTeamOptionsProps) => {
  const { dragStart } = props;
  const [search, setSearch] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [typesToRender, setTypesToRender] = useState(
    PokePageTypeColors.map((obj) => Object.values(obj)[0])
  );

  return (
    <div className="buildTeamOptions__wrap">
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
          <button
            className="buildTeamOptions__options-option"
            onClick={() => setIsSelected(!isSelected)}
          >
            Types
          </button>
          <div
            className="buildTeamOptions__options-suboption-wrap"
            style={!isSelected ? { display: "none" } : {}}
          >
            {PokePageTypeColors.map((g: any, index) => (
              <button
                className="buildTeamOptions__options-suboption-button"
                style={
                  typesToRender.includes(g.type)
                    ? {
                        backgroundColor: g.color,
                      }
                    : { backgroundColor: "#272e5e" }
                }
                onClick={
                  typesToRender.includes(g.type)
                    ? () =>
                        setTypesToRender(
                          typesToRender.filter((item) => item !== g.type)
                        )
                    : () =>
                        setTypesToRender((prevItems) => [...prevItems, g.type])
                }
                key={index}
              >
                {g.type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="buildTeamOptions__pokemon-wrap">
        {PokePageTypeColors.map((n) => (
          <div
            style={typesToRender.includes(n.type) ? {} : { display: "none" }}
            key={n.type}
          >
            <BuildTeamOptionsAllPoke
              handleDataTransfer={dragStart}
              searchInput={search}
              type={n.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
