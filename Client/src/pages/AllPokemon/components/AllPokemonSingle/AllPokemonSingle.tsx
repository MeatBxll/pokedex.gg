import "./allPokemonSingle.css";

interface AllPokemonSingleProps {
  href: string;
  pokeName: string;
  pokeImg: any;
}

export const AllPokemonSingle = (props: AllPokemonSingleProps) => {
  const { href, pokeImg, pokeName } = props;
  return (
    <a className="AllPokemonSingle__wrap" href={href}>
      <h4 className="AllPokemonSingle__poke-name">{pokeName}</h4>
      <div className="AllPokemonSingle__poke-img">{pokeImg}</div>
    </a>
  );
};
