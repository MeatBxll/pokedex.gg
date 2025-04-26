import "./allPokemonSingle.css";
import { Link } from "react-router-dom";

interface AllPokemonSingleProps {
  pokeName: string;
  pokeImg: any;
}

export const AllPokemonSingle = (props: AllPokemonSingleProps) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const { pokeImg, pokeName } = props;
  return (
    <Link className="AllPokemonSingle__wrap" to={`/pokePage/${pokeName}`}>
      <h4 className="AllPokemonSingle__poke-name">
        {capitalizeFirstLetter(pokeName)}
      </h4>
      <div className="AllPokemonSingle__poke-img">{pokeImg}</div>
    </Link>
  );
};
