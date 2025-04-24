import { NavBar } from "../../common/components/NavBar/NavBar";
import { HomeBody } from "./components/HomeBody/HomeBody";
import { useGetOnePokemonQuery } from "../../api/pokemon/pokemonApiEndpoints";

export const Home = () => {
  const poke = "kyogre";
  const { data, isLoading, error } = useGetOnePokemonQuery(poke);

  return (
    <div style={{ userSelect: "none", width: "100%" }}>
      <NavBar currentPage="HOME" />
      <HomeBody />


      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_default} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};
