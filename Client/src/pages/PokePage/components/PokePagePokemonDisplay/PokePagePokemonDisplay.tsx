import { useState } from "react";
import "./pokePagePokemonDisplay.css";
import { MdFlipCameraAndroid } from "react-icons/md";
import { GiShinyIris } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";

interface PokePagePokemonDisplayProps {
  id: number;
}

export const PokePagePokemonDisplay = (props: PokePagePokemonDisplayProps) => {
  const { id } = props;
  const baseUrlStart =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown";
  const [currentDisplay, setCurrentDisplay] = useState(
    baseUrlStart + `/${id}.gif`
  );

  const [isFlipped, setIsFlipped] = useState(false);
  function isFlippedOnClick() {
    if (isFlipped) {
      setIsFlipped(false);
      if (isShiny) setCurrentDisplay(baseUrlStart + `/shiny/${id}.gif`);
      else setCurrentDisplay(baseUrlStart + `/${id}.gif`);
    } else {
      setIsFlipped(true);
      if (isShiny) setCurrentDisplay(baseUrlStart + `/back/shiny/${id}.gif`);
      else setCurrentDisplay(baseUrlStart + `/back/${id}.gif`);
    }
  }

  const [isShiny, setIsShiny] = useState(false);

  function isShinyOnClick() {
    if (isShiny) {
      setIsShiny(false);
      if (isFlipped) setCurrentDisplay(baseUrlStart + `/back/${id}.gif`);
      else setCurrentDisplay(baseUrlStart + `/${id}.gif`);
    } else {
      setIsShiny(true);
      if (isFlipped) setCurrentDisplay(baseUrlStart + `/back/shiny/${id}.gif`);
      else setCurrentDisplay(baseUrlStart + `/shiny/${id}.gif`);
    }
  }

  return (
    <div>
      <img
        alt="Loading Pokemon Img"
        className="pokePagePokemonDisplay__img"
        src={currentDisplay}
      />
      <div className="pokePagePokemonDisplay__button-wrap">
        <button
          className="pokePagePokemonDisplay__button"
          onClick={isFlippedOnClick}
        >
          <MdFlipCameraAndroid size={"1.7rem"} />
        </button>
        <button
          className="pokePagePokemonDisplay__button"
          onClick={isShinyOnClick}
        >
          {isShiny ? (
            <FaRegCircle size={"1.7rem"} />
          ) : (
            <GiShinyIris size={"1.7rem"} />
          )}
        </button>
      </div>
    </div>
  );
};
