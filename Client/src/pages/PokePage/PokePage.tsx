import { NavBar } from "../../common/components/NavBar/NavBar";
import { PokePagePokemonDisplay } from "./components/PokePagePokemonDisplay/PokePagePokemonDisplay";
import "./pokePage.css";

export const PokePage = () => {
  return (
    <div className="pokePage__wrap">
      <NavBar currentPage="NONEOFTHESE" />
      <article className="pokePage__body">
        <div className="pokePage__pokemon-img">
          <PokePagePokemonDisplay />
        </div>
      </article>
    </div>
  );
};
