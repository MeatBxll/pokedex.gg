import { NavBar } from "../../common/components/NavBar/NavBar";
import { PokePagePokemonDisplay } from "./components/PokePagePokemonDisplay/PokePagePokemonDisplay";
import {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesQuery,
  useGetEvolutionChainQuery,
} from "../../api/pokemon/pokemonApiEndpoints";
import "./pokePage.css";
import { Link, useParams } from "react-router-dom";
import { PokePageTypeColors } from "./components/PokePageTypeColors/PokePageTypeColors";

interface EvolutionChainNode {
  species: { name: string };
  evolves_to: EvolutionChainNode[];
}

import { FaArrowRight } from "react-icons/fa6";

interface EvolutionChainProps {
  chain: EvolutionChainNode | null;
}

const EvolutionChainLine = ({ chain }: EvolutionChainProps) => {
  if (!chain) return null;

  const traverseChain = (node: EvolutionChainNode): string[] => {
    if (!node || !node.species) return [];

    let names: string[] = [node.species.name];
    if (node.evolves_to && node.evolves_to.length > 0) {
      for (let evo of node.evolves_to) {
        names = names.concat(traverseChain(evo));
      }
    }
    return names;
  };

  const evolutionNames = traverseChain(chain);

  if (evolutionNames.length === 0) return <div>No evolutions found.</div>;

  return (
    <div style={{ fontSize: "1.5rem", color: "white", marginTop: "1rem" }}>
      {evolutionNames.map((name, idx) => (
        <Link
          to={`/pokePage/${name}`}
          className="evolutionChainLine__link"
          key={name}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
          {idx < evolutionNames.length - 1 && <FaArrowRight />}
        </Link>
      ))}
    </div>
  );
};
export const PokePage = () => {
  const { _pokemonName } = useParams();
  const { data, isLoading, error } = useGetPokemonByNameQuery(
    _pokemonName ? _pokemonName : " "
  );

  const { data: speciesData, isLoading: speciesLoading } =
    useGetPokemonSpeciesQuery(_pokemonName);

  const evolutionChainId = speciesData?.evolution_chain?.url
    .split("/")
    .filter(Boolean)
    .pop();

  const { data: evolutionData, isLoading: evolutionLoading } =
    useGetEvolutionChainQuery(evolutionChainId, {
      skip: !evolutionChainId, // Skip fetching until we have the ID
    });

  if (speciesLoading || evolutionLoading) return <div>Loading...</div>;

  function getColorByType(type: string): string | undefined {
    const match = PokePageTypeColors.find((t) => t.type === type);
    return match?.color;
  }

  if (isLoading) return <div>Loading {_pokemonName} stats...</div>;
  if (error || !data)
    return <div>Could not fetch details for {_pokemonName}</div>;

  return (
    <div className="pokePage__wrap">
      <NavBar currentPage="NONEOFTHESE" />

      <article className="pokePage__body">
        <h2 className="pokePage__pokemon-name">{data.name}</h2>
        <div className="pokePage_pokemon-header-wrap">
          <PokePagePokemonDisplay key={_pokemonName} id={data.id} />
          <div className="pokePage_pokemon-header-middle">
            <div
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "aliceblue",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "1.3rem",
              }}
              className="pokePage_pokemon-header-types-wrap"
            >
              <h4>Type:</h4>
              <ul
                style={{ display: "flex", gap: ".2rem" }}
                className="pokePage_pokemon-header-lists"
              >
                {data.types.map((t) => (
                  <li
                    style={{
                      padding: ".2rem 0.5rem",
                      borderRadius: ".4rem",
                      backgroundColor: getColorByType(t.type.name),
                      textShadow: `
                    -1px -1px 0 #000,  
                    1px -1px 0 #000,
                    -1px  1px 0 #000,
                    1px  1px 0 #000
                    `,
                    }}
                    key={t.type.name}
                  >
                    {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pokePage_pokemon-header-starting-ablilities">
              <h2 style={{ fontSize: "1.3rem", whiteSpace: "noWrap" }}>
                Abilities:
              </h2>
              <div>
                {data.abilities.map((g) => (
                  <div key={g.ability.name}>{g.ability.name}</div>
                ))}
              </div>
            </div>

            {evolutionData && (
              <div>
                <h3 style={{ color: "white" }}>Evolution Chain:</h3>
                <EvolutionChainLine chain={evolutionData.chain} />
              </div>
            )}
          </div>

          <ul className="pokePage_pokemon-header-lists pokePage_pokemon-header-stats-wrap">
            {data.stats.map((stat) => (
              <div
                key={stat.stat.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <li style={{ whiteSpace: "nowrap" }}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
                <div style={{ height: "100%", width: "25rem" }}>
                  <div
                    style={{
                      width: `${(stat.base_stat / 255) * 100}%`,
                      backgroundColor: `rgb(${
                        stat.base_stat > 255 ? 0 : 255 - stat.base_stat - 60
                      }, ${stat.base_stat > 255 ? 255 : stat.base_stat}, 0)`,
                      height: "90%",
                      borderRadius: ".1rem",
                    }}
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="pokePage__games-featured">
          <h3>Moves :</h3>
          <div className="pokePage__games-featured-games">
            {data.moves.map((m) => (
              <div
                style={{
                  backgroundColor: "#4151cc1c",
                  padding: ".5rem",
                  borderRadius: "1rem",
                }}
              >
                {m.move.name}
              </div>
            ))}
          </div>
        </div>
        <div className="pokePage__games-featured">
          <h3>Games Featured :</h3>
          <div className="pokePage__games-featured-games">
            {data.game_indices.map((game) => (
              <div
                style={{
                  backgroundColor: "#4151cc1c",
                  padding: ".5rem",
                  borderRadius: "1rem",
                }}
              >
                Pokemon {game.version.name}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
