import { useState } from "react";
import "./BuildTeamOptionsPokemonSingle.css";
import { Link } from "react-router-dom";

interface BuildTeamOptionsPokemonSingleProps {
  url: any;
  name: string;
  handleDataTransfer: any;
}

export const BuildTeamOptionsPokemonSingle = (
  props: BuildTeamOptionsPokemonSingleProps
) => {
  const { url, name, handleDataTransfer } = props;

  const id = url.split("/").filter(Boolean).pop(); // "1"
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
      onDragStart={handleDataTransfer}
      draggable="true"
      className="bTOPS__wrap"
      id={name}
    >
      <div>
        <span>{id} </span>
        {name}
      </div>
      <img draggable="false" alt={name} width={70} height={70} src={imageUrl} />
      <Link
        style={isClicked ? {} : { display: "none" }}
        to={`/pokepage/${name}`}
        className="BTOAPS__details"
      >
        Pokemon Details
      </Link>
    </button>
  );
};
