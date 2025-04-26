import { NavBar } from "../../common/components/NavBar/NavBar";
import { PokePagePokemonDisplay } from "./components/PokePagePokemonDisplay/PokePagePokemonDisplay";
import { useGetPokemonByNameQuery } from "../../api/pokemon/pokemonApiEndpoints";
import "./pokePage.css";
import { useParams } from "react-router-dom";
import { PokePageTypeColors } from "./components/PokePageTypeColors/PokePageTypeColors";

export const PokePage = () => {
  const { _pokemonName } = useParams();
  const { data, isLoading, error } = useGetPokemonByNameQuery(
    _pokemonName ? _pokemonName : " "
  );

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
          <PokePagePokemonDisplay id={data.id} />
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
