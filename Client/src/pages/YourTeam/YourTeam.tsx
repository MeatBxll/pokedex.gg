import { NavBar } from "../../common/components/NavBar/NavBar";
import "./YourTeam.css";
import { useGetPokemonByNameQuery } from "../../api/pokemon/pokemonApiEndpoints";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";

export const YourTeam = () => {
  const teamOne = [
    "Cramorant",
    "Roserade",
    "charmander",
    "Talonflame",
    "Garbodor",
    "Wailord",
  ];
  const teamTwo = [
    "Bellibolt",
    "Ludicolo",
    "Darkrai",
    "Trevenant",
    "Miltank",
    "Amoonguss",
  ];
  const teamThree = [
    "Latios",
    "ditto",
    "Floatzel",
    "charizard",
    "Wooloo",
    "Lapras",
  ];
  const { name, username, email } = {
    name: "name",
    username: "username",
    email: "email@gmail.com",
  };

  const [isEditable, setIsEditable] = useState(false);

  const getPokemonImgByName = (name: string) => {
    const { data, isLoading, error } = useGetPokemonByNameQuery(name);

    if (isLoading) return "";
    if (error)
      return "data:image/png;base64,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";
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data?.id}.gif`;
  };

  return (
    <div>
      <NavBar currentPage="YOURTEAM" />
      <div className="YourTeam__wrap">
        <div className="YourTeam__header">
          <div className="YourTeam__header-sub">
            <h2 style={{ textTransform: "capitalize" }}>{name}'s Team</h2>
            <p>Username : {username}</p>
            <p>Email : {email}</p>
            <p>Password : ********</p>
          </div>
          <div
            className="YourTeam__header-about"
            style={
              isEditable
                ? { outline: "aliceblue 0.07rem solid", borderRadius: "1rem" }
                : {}
            }
          >
            About User :
            <div
              className="YourTeam__header-about-edditabletext"
              contentEditable={isEditable}
            ></div>
            <button
              className="YourTeam__header-about-button"
              onClick={() => setIsEditable(!isEditable)}
            >
              <MdModeEdit size={"1.2rem"} />
            </button>
          </div>
        </div>

        <div className="YourTeam__pokemon">
          <div className="YourTeam__pokemon-single-wrap">
            {teamOne.map((name, index) => (
              <div className="YourTeam__pokemon-single" key={index}>
                <div className="YourTeam__pokemon-name">{name}</div>
                {teamOne[index] !== "" ? (
                  <img
                    className="YourTeam__pokemon-img"
                    src={getPokemonImgByName(name)}
                    alt="loading . . ."
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="YourTeam__pokemon-single-wrap">
            {teamTwo.map((name, index) => (
              <div className="YourTeam__pokemon-single" key={index}>
                <div className="YourTeam__pokemon-name">{name}</div>
                {teamTwo[index] !== "" ? (
                  <img
                    className="YourTeam__pokemon-img"
                    src={getPokemonImgByName(name)}
                    alt="loading . . ."
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="YourTeam__pokemon-single-wrap">
            {teamThree.map((name, index) => (
              <div className="YourTeam__pokemon-single" key={index}>
                <div className="YourTeam__pokemon-name">{name}</div>
                {teamThree[index] !== "" ? (
                  <img
                    className="YourTeam__pokemon-img"
                    src={getPokemonImgByName(name)}
                    alt="loading . . ."
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            draggable="false"
            className="side-im-1"
            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/_tiles/2024/year-of-the-dragon/trainers/inline/raihan.png"
            alt="PokemonAvatar"
          />
          <img
            draggable="false"
            className="side-im-2"
            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/_tiles/2024/year-of-the-dragon/trainers/inline/cynthia.png"
            alt="PokemonAvatar"
          />
        </div>
      </div>
    </div>
  );
};
