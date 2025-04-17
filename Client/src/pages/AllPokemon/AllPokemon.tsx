import { useState } from "react";
import { NavBar } from "../../common/components/NavBar/NavBar";
import { AllPokemonSingle } from "./components/AllPokemonSingle/AllPokemonSingle";
import ".//allPokemon.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export const AllPokemon = () => {
  const totalPages = 10;
  const [thisPage, setThisPage] = useState(1);

  function raisePageNumber() {
    if (thisPage === totalPages) return;
    setThisPage(thisPage + 1);
  }

  function lowerPageNumber() {
    if (thisPage === 1) return;
    setThisPage(thisPage - 1);
  }

  const [current20Pokemon, setCurrent20Pokemon] = useState(
    Array.from({ length: 104 }, () => ({
      name: "charizard",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    }))
  );

  return (
    <div>
      <NavBar currentPage="ALLPOKEMON" />
      <div className="AllPokemon__current-20-wrap">
        {current20Pokemon.map((item, index) => {
          return (
            <AllPokemonSingle
              key={index}
              href="/pokePage"
              pokeImg={<img src={item.img} />}
              pokeName={item.name}
            />
          );
        })}
      </div>
      <div className="AllPokemon__next-page">
        <button
          onClick={lowerPageNumber}
          className="AllPokemon__next-page-button"
        >
          <FaAngleLeft size={"1.5rem"} />
        </button>

        <p>
          {thisPage} of {totalPages}
        </p>

        <button
          onClick={raisePageNumber}
          className="AllPokemon__next-page-button"
        >
          <FaAngleRight size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
};
