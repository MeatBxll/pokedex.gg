import "./homeBody.css";
import { Top6PokeCard } from "../../../../common/components/Top6PokeCard/Top6PokeCard";

export const HomeBody = () => {
  return (
    <div className="HomeBody__wrap">
      <section className="HomeBody__search-Wrap">
        <img
          className="HomeBody__searchImg"
          src="https://www.pngplay.com/wp-content/uploads/11/Heliolisk-Pokemon-PNG-HD-Quality.png"
        />
        <div className="HomeBody__search"></div>
      </section>
      <section className="HomeBody__top6-Wrap">
        <h2 className="HomeBody__top6-Header">Popular Pokemon</h2>

        <div className="HomeBody__top6">
          <Top6PokeCard
            img="https://www.pngplay.com/wp-content/uploads/10/Charizard-Pokemon-Free-PNG.png"
            type="FIRE"
            name="Charzard"
          />
          <Top6PokeCard
            img="https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-PNG-HD-Images.png"
            type="ELECTRIC"
            name="Pikachu"
          />
          <Top6PokeCard
            img="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
            type="GRASS"
            name="Bulbasaur"
          />
          <Top6PokeCard
            img="https://www.pngplay.com/wp-content/uploads/11/Gengar-PNG-Photos.png"
            type="POISON"
            name="Gengar"
          />
          <Top6PokeCard
            img="https://www.pngplay.com/wp-content/uploads/11/Gardevoir-PNG-Photos.png"
            type="PSYCHIC"
            name="Gardevoir"
          />
          <Top6PokeCard
            img="https://www.pngplay.com/wp-content/uploads/12/Snorlax-Pokemon-Transparent-Images.png"
            type="NORMAL"
            name="Snorelax"
          />
        </div>
      </section>
      <section className="HomeBody__build-your-team"></section>
      <footer className="HomeBody__footer"></footer>
    </div>
  );
};
