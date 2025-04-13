import "./homeBody.css";
import { Top6PokeCard } from "../../../../common/components/Top6PokeCard/Top6PokeCard";

export const HomeBody = () => {
  return (
    <div className="HomeBody__wrap">
      <section className="HomeBody__search"></section>
      <section className="HomeBody__top6">
        <Top6PokeCard type="FIRE" />
        <Top6PokeCard type="WATER" />
        <Top6PokeCard type="FIRE" />
        <Top6PokeCard type="FIRE" />
        <Top6PokeCard type="FIRE" />
        <Top6PokeCard type="FIRE" />
      </section>
      <section className="HomeBody__build-your-team"></section>
      <footer className="HomeBody__footer"></footer>
    </div>
  );
};
