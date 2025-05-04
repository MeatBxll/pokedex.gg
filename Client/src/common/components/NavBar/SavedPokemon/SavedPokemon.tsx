import { useState } from "react";
import "./SavedPokemon.css";
import { motion } from "framer-motion";
import { SavedPokemonSingle } from "./SavedPokemonSingle/SavedPokemonSingle";

interface SavedPokemonProps {
  isBuildTeamPage: boolean;
}

export const SavedPokemon = (props: SavedPokemonProps) => {
  const { isBuildTeamPage } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [allSavePokemon, setAllSavedPokemon] = useState([
    "Dragonite",
    "charizard",
    "Koraidon",
    "Donphan",
    "Meowscarada",
    "charizard",
  ]);

  const removePokemonFromSaved = (index: number) => {
    setAllSavedPokemon((prev) => prev.filter((_, i) => i !== index));
  };

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
          {allSavePokemon.map((n, index) => (
            <SavedPokemonSingle
              key={index}
              isOnBuildTeamPage={isBuildTeamPage}
              name={n}
              onClick={() => removePokemonFromSaved(index)}
            />
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};
