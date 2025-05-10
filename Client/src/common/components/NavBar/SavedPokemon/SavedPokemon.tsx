import { useState } from "react";
import "./SavedPokemon.css";
import { motion } from "framer-motion";
import { SavedPokemonSingle } from "./SavedPokemonSingle/SavedPokemonSingle";
import { useAppSelector } from "../../../../app/hooks";
import { selectFavoritePokemon } from "../../../../app/userSlice";
import { useRemoveFavoritePokemonMutation } from "../../../../api/backend/userApiEndpoints";
import { selectUserId } from "../../../../app/userSlice";

interface SavedPokemonProps {
  isBuildTeamPage: boolean;
}

export const SavedPokemon = (props: SavedPokemonProps) => {
  const { isBuildTeamPage } = props;
  const [isOpen, setIsOpen] = useState(false);

  const [removeFavoritePokemon] = useRemoveFavoritePokemonMutation();
  const favoritePokemon = useAppSelector(selectFavoritePokemon);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="savedPokemon__button"
      >
        Saved Pokemon
      </button>
      {isOpen ? (
        <motion.div
          initial={{ x: 0, y: 50, opacity: 0, scale: 0.5 }}
          animate={{ x: -100, y: 50, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="savedPokemon__toolbar"
        >
          {favoritePokemon?.map((n: any, index) => (
            <SavedPokemonSingle key={index} id={n.id} />
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};
