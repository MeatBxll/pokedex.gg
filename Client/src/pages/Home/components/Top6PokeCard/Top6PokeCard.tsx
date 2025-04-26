import { useState } from "react";
import "./top6PokeCard.css";
import { Link } from "react-router-dom";

interface Top6PokeCardProps {
  type: PokemonTypes;
  img: string;
  name: string;
}

type PokemonTypes =
  | "FIRE"
  | "WATER"
  | "ELECTRIC"
  | "GRASS"
  | "POISON"
  | "PSYCHIC"
  | "NORMAL";

export const Top6PokeCard = (props: Top6PokeCardProps) => {
  const { type, img, name } = props;
  const [isHovered, setIsHovered] = useState(false);
  const typeClassName =
    "top6PokeCard__type " + "top6PokeCard__" + type.toLowerCase() + "Type";

  return (
    <div className="top6PokeCard__wrap">
      <Link
        to={`/pokePage/${name}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={typeClassName}
      >
        <img
          className={isHovered ? "top6PokeCard__imgHover" : "top6PokeCard__img"}
          src={img}
        />
      </Link>
      <h3 className="top6PokeCard__name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
    </div>
  );
};
