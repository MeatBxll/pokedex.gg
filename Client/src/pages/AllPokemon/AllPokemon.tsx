import { useState } from "react";
import { NavBar } from "../../common/components/NavBar/NavBar";
import { AllPokemonSingle } from "./components/AllPokemonSingle/AllPokemonSingle";
import ".//allPokemon.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useGetAllPokemonQuery } from "../../api/pokemon/pokemonApiEndpoints";

export const AllPokemon = () => {
  const [page, setPage] = useState(0);
  const limit = 56;
  const offset = page * limit;

  const { data, isLoading, error } = useGetAllPokemonQuery({ limit, offset });

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));

  const getPokemonIdFromUrl = (url: string): string => {
    const parts = url.split("/");
    return parts[parts.length - 2]; // the ID is before the last slash
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Pokémon</div>;

  return (
    <div>
      <NavBar currentPage="ALLPOKEMON" />
      <div className="AllPokemon__current-20-wrap">
        {data?.results.map((pokemon, index) => {
          const id = getPokemonIdFromUrl(pokemon.url);
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <AllPokemonSingle
              key={pokemon.name}
              pokeImg={
                <img
                  src={imageUrl}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                  style={{ marginRight: "12px" }}
                />
              }
              pokeName={pokemon.name}
            />
          );
        })}
      </div>
      <div className="AllPokemon__next-page">
        <button
          className="AllPokemon__next-page-button"
          onClick={handlePrev}
          disabled={page === 0}
        >
          <FaAngleLeft size={"1.5rem"} />
        </button>
        <button
          className="AllPokemon__next-page-button"
          onClick={handleNext}
          disabled={!data?.next}
        >
          <FaAngleRight size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
};
