import { useState } from "react";
import "./top6PokeCard.css";

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
      <a
        href="/pokePage"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={typeClassName}
      >
        <img
          className={isHovered ? "top6PokeCard__imgHover" : "top6PokeCard__img"}
          src={img}
        />
      </a>
      <h3 className="top6PokeCard__name">{name}</h3>
    </div>
  );
};
