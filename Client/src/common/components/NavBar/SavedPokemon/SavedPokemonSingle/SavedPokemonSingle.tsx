import "./SavedPokemonSingle.css";
import { useGetPokemonByNameQuery } from "../../../../../api/pokemon/pokemonApiEndpoints";
import { useAppSelector } from "../../../../../app/hooks";
import { useRemoveFavoritePokemonMutation } from "../../../../../api/backend/userApiEndpoints";
import { selectUserId } from "../../../../../app/userSlice";

interface SavedPokemonSingleProps {
  id: string;
}

export const SavedPokemonSingle = (props: SavedPokemonSingleProps) => {
  const [removeFavoritePokemon] = useRemoveFavoritePokemonMutation();
  const userId = useAppSelector(selectUserId);
  const { id } = props;

  async function removePokemonFromSaved(e: any) {
    e.preventDefault();
    try {
      const res = await removeFavoritePokemon({
        userId,
        pokemonId: Number(id),
      }).unwrap();
      console.log(res);
    } catch (err: any) {
      console.log(err.data);
    }
  }

  const { data, isLoading, error } = useGetPokemonByNameQuery(id);
  if (isLoading) return "";
  if (error) return "";

  return (
    <div className="savedPokemonSingle__wrap">
      <div className="savedPokemonSingle__name">{data?.name}</div>
      <img
        className="savedPokemonSingle__img"
        draggable="false"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Loading . . ."
      />
      <button onClick={removePokemonFromSaved}>Remove</button>
    </div>
  );
};
