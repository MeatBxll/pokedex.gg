import { useGetAllPokemonOfTypeQuery } from "../../../../../api/pokemon/pokemonApiEndpoints";
import { BuildTeamOptionsPokemonSingle } from "../BuildTeamOptionsPokemonSingle/BuildTeamOptionsPokemonSingle";

interface PokemonListByTypeProps {
  type: string;
  searchInput: string;
}

export const BuildTeamOptionsAllPoke = ({
  type,
  searchInput,
}: PokemonListByTypeProps) => {
  const { data, isLoading, error } = useGetAllPokemonOfTypeQuery(type);

  const filteredPokemon = data?.pokemon.filter((p: any) =>
    p.pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  if (isLoading) return <p>Loading {type} Pokémon...</p>;
  if (error) return <p>Error loading {type} Pokémon.</p>;
  if (!data) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <div
        // if list is empty i want to do something here
        style={
          filteredPokemon?.length !== 0
            ? {
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "1.1rem",
                color: "aliceblue",
                textTransform: "capitalize",
                backgroundColor: "#464653",
                borderRadius: "1rem",
                padding: "1rem",
              }
            : { display: "none" }
        }
      >
        {type} Types :
      </div>
      {filteredPokemon.map((p: any) => (
        <BuildTeamOptionsPokemonSingle
          key={p.pokemon.name}
          name={p.pokemon.name}
          url={p.pokemon.url}
        />
      ))}
    </div>
  );
};
