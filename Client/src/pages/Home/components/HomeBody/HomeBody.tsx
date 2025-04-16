import "./homeBody.css";
import { Top6PokeCard } from "../Top6PokeCard/Top6PokeCard";
import { useState } from "react";

export const HomeBody = () => {
  const [isHovered, setIsHovered] = useState(false);

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
      <a
        href="/buildTeam"
        className="HomeBody__build-your-team"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="HomeBody__build-your-team-title">Build Your Team</h3>
        <div className="HomeBody__build-your-team-img-wrap">
          <img
            className={
              isHovered
                ? "HomeBody__build-your-team-img-large"
                : "HomeBody__build-your-team-img"
            }
            src="https://www.pngplay.com/wp-content/uploads/11/Mewtwo-Pokemon-No-Background-Clip-Art.png"
          />
          <img
            className={
              isHovered
                ? "HomeBody__build-your-team-img-large"
                : "HomeBody__build-your-team-img"
            }
            src="https://www.pngplay.com/wp-content/uploads/10/Blastoise-Pokemon-PNG-Pic-Background.png"
          />
        </div>
      </a>
      <footer className="HomeBody__footer">
        <p className="HomeBody__footer-text">
          We dont have any copyright so I am just going to ipsum lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis.
          Sapiente culpa dolor maiores blanditiis soluta, voluptatibus vero
          nesciunt reiciendis cupiditate, accusamus dignissimos quod eum sed
          provident sit. Vel, laborum. ipsum Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Velit, omnis itaque maxime incidunt
          minus odit, accusantium esse dicta sit laudantium non. Unde quaerat
          accusamus laborum officia magni cum reiciendis doloremque. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non sapiente architecto
          id ipsa odit molestias, libero asperiores unde. Voluptatibus officiis
          eligendi odio sint impedit consequatur sit. Enim voluptatibus odio
          quisquam.
        </p>
      </footer>
    </div>
  );
};
