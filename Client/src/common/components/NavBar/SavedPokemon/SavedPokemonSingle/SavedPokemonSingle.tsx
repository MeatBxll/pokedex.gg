import { useGetPokemonByNameQuery } from "../../../../../api/pokemon/pokemonApiEndpoints";

interface SavedPokemonSingleProps {
  name: string;
  isOnBuildTeamPage: boolean;
  onClick: any;
}

export const SavedPokemonSingle = (props: SavedPokemonSingleProps) => {
  const { name, isOnBuildTeamPage, onClick } = props;
  const { data, isLoading, error } = useGetPokemonByNameQuery(name);
  if (isLoading) return "";
  if (error) return "";

  return (
    <div draggable={isOnBuildTeamPage}>
      <div>{name}</div>
      <img
        draggable="false"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`}
        alt="Loading . . ."
      />
      <button onClick={onClick}>Remove</button>
    </div>
  );
};
