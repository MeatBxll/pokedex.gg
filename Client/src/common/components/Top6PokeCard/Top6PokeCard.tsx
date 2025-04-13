import "./top6PokeCard.css";

interface Top6PokeCardProps {
  type: PokemonTypes;
}

type PokemonTypes = "FIRE" | "WATER";

export const Top6PokeCard = (props: Top6PokeCardProps) => {
  const { type } = props;
  return <a className="top6PokeCard__wrap"></a>;
};
