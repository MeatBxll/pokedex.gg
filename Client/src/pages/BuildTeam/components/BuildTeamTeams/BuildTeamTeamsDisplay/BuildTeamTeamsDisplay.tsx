import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { useGetPokemonByNameQuery } from "../../../../../api/pokemon/pokemonApiEndpoints";

interface BuildTeamTeamsDisplayProps {
  enableDropping: any;
  handleDrop: any;
  index: number;
  id: number;
  isEmpty: boolean;
  clearSelectionOnClick: any;
}

// currentTeam[index] === ""

export const BuildTeamTeamsDisplay = (props: BuildTeamTeamsDisplayProps) => {
  const {
    enableDropping,
    handleDrop,
    index,
    id,
    isEmpty,
    clearSelectionOnClick,
  } = props;

  const [isHovering, setIsHovering] = useState(false);

  function GetPokemonName(id: number) {
    if (id === 0) {
      const { data, isLoading, error } = useGetPokemonByNameQuery("1");
      if (isLoading) return "";
      if (error) return "";
      return "";
    }
    const { data, isLoading, error } = useGetPokemonByNameQuery(id.toString());
    if (isLoading) return "Loading ...";
    if (error) return "Something went wrong";

    return data?.name;
  }

  return (
    <div
      onDragOver={enableDropping}
      onDrop={(e) => handleDrop(e, index)}
      className="buildTeamOptions__currentSelection-single"
      key={index}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="buildTeamOptions__currentSelection-single-content">
        <div className="buildTeamOptions__currentSelection-single-name">
          {GetPokemonName(id)}
        </div>
        <img
          className="buildTeamOptions__currentSelection-single-img"
          style={isEmpty ? { display: "none" } : {}}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="Loading . . ."
        />
      </div>
      <button
        style={!isHovering || isEmpty ? { display: "none" } : {}}
        onClick={() => clearSelectionOnClick(index)}
        className="buildTeamOptions__currentSelection-single-button"
      >
        <FaTrashCan color="aliceblue" size={"1rem"} />
      </button>
    </div>
  );
};
