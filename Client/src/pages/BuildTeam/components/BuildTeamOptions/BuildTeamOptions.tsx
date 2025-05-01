import { useEffect, useState } from "react";
import "./BuildTeamOption.css";
import { buildTeamOptionsDropDown } from "./BuildTeamOptionsDropDown/BuildTeamOptionsDropDown";
import { PokePageTypeColors } from "../../../PokePage/components/PokePageTypeColors/PokePageTypeColors";
import { BuildTeamOptionsPokemonSingle } from "./BuildTeamOptionsPokemonSingle/BuildTeamOptionsPokemonSingle";
import { useGetAllPokemonQuery } from "../../../../api/pokemon/pokemonApiEndpoints";

export const BuildTeamOptions = () => {
  const optionsData = buildTeamOptionsDropDown;

  function getColorByType(type: string): string | undefined {
    const match = PokePageTypeColors.find((t) => t.type === type);
    return match?.color;
  }

  const limit = 1025;
  const offset = 0;

  const { data, isLoading, error } = useGetAllPokemonQuery({ limit, offset });

  const getPokemonIdFromUrl = (url: string): string => {
    const parts = url.split("/");
    return parts[parts.length - 2]; // the ID is before the last slash
  };

  useEffect(() => {}, []);

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
                  style={!isSelected ? { display: "none" } : {}}
                >
                  {option.label === "Type"
                    ? option.options.map((subOption, index) => (
                        <button
                          className="buildTeamOptions__options-suboption-button"
                          style={{ backgroundColor: getColorByType(subOption) }}
                          key={index}
                        >
                          {subOption}
                        </button>
                      ))
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

        <div className="buildTeamOptions__pokemon-wrap">
          {data?.results.map((pokemon, index) => {
            const id = getPokemonIdFromUrl(pokemon.url);
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return (
              <BuildTeamOptionsPokemonSingle
                key={index}
                img={
                  <img
                    src={imageUrl}
                    alt={pokemon.name}
                    width={70}
                    height={70}
                  />
                }
                name={pokemon.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
