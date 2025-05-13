import { act, useEffect, useState } from "react";
import "./BuildTeamOption.css";
import { buildTeamOptionsDropDown } from "./BuildTeamOptionsDropDown/BuildTeamOptionsDropDown";
import { PokePageTypeColors } from "../../../PokePage/components/PokePageTypeColors/PokePageTypeColors";
import { BuildTeamOptionsAllPoke } from "./BuildTeamOptionAllPoke/BuildTeamOptionsAllPoke";
import { FaTrashCan } from "react-icons/fa6";
import { useGetPokemonByNameQuery } from "../../../../api/pokemon/pokemonApiEndpoints";
import { useAppSelector } from "../../../../app/hooks";
import { selectTeams } from "../../../../app/userSlice";
import { useUpdatePokemonTeamMutation } from "../../../../api/backend/teamApiEndpoints";

export const BuildTeamOptions = () => {
  let teams = [
    {
      id: "",
      pokemon: [],
    },
    {
      id: "",
      pokemon: [],
    },
    {
      id: "",
      pokemon: [],
    },
  ];

  const allMyTeams = useAppSelector(selectTeams);
  if (allMyTeams) teams = allMyTeams;

  const team1: any = teams[0].pokemon.map((p: any) => p.id);
  const team2: any = teams[1].pokemon.map((p: any) => p.id);
  const team3: any = teams[2].pokemon.map((p: any) => p.id);

  for (let i = 0; team1.length < 6; i++) {
    if (!team1[i]) team1.push("");
  }

  for (let i = 0; team2.length < 6; i++) {
    if (!team2[i]) team2.push("");
  }

  for (let i = 0; team3.length < 6; i++) {
    if (!team3[i]) team3.push("");
  }

  const [teamOne, setTeamOne] = useState([...team1]);
  const [teamTwo, setTeamTwo] = useState([...team2]);
  const [teamThree, setTeamThree] = useState([...team3]);

  const [currentTeam, setCurrentTeam] = useState(teamOne);

  const optionsData = buildTeamOptionsDropDown;

  function getColorByType(type: string): string | undefined {
    const match = PokePageTypeColors.find((t) => t.type === type);
    return match?.color;
  }
  const [isSelected, setIsSelected] = useState(false);

  const [typesToRender, setTypesToRender] = useState(optionsData[0].options);

  const [search, setSearch] = useState("");

  const [activeTeam, setActiveTeam] = useState(1);

  const [updatePokemonTeam] = useUpdatePokemonTeamMutation();

  const setCurrentTeamTo = (nextTeam: any, nextTeamNumber: number) => {
    if (activeTeam === 1) setTeamOne(currentTeam);
    else if (activeTeam === 2) setTeamTwo(currentTeam);
    else if (activeTeam === 3) setTeamThree(currentTeam);
    if (activeTeam !== nextTeamNumber) {
      setActiveTeam(nextTeamNumber);
      setCurrentTeam(nextTeam);
    }
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.innerText);
  };

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    const id = event.dataTransfer.getData("text");
    const tempTeam = [...currentTeam];
    tempTeam[index] = id;
    setCurrentTeam(tempTeam);
    console.log(`${id}`);
  };

  const clearSingleSelection = (index: number) => {
    const tempTeam = [...currentTeam];
    tempTeam[index] = "";
    setCurrentTeam(tempTeam);
  };

  const handleSaveTeam = async (e: any) => {
    e.preventDefault();
    let teamId = "";

    if (activeTeam === 1) teamId = teams[0].id;
    else if (activeTeam === 2) teamId = teams[1].id;
    else if (activeTeam === 3) teamId = teams[2].id;

    console.log(teamId);

    console.log(currentTeam);
    const filteredTeam = currentTeam.filter((t) => t !== "");
    console.log(filteredTeam);

    try {
      const res = await updatePokemonTeam({
        teamId,
        pokemon: filteredTeam,
      }).unwrap();
      console.log(res);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="buildTeamOptions">
      <div className="buildTeamOptions__currentSelection">
        <div className="buildTeamOptions__currentSelection-pokemon">
          {currentTeam.map((p, index) => {
            const [isHovering, setIsHovering] = useState(false);
            const name = p.split(" ")[1];
            const id = p.split(" ")[0];
            return (
              <div
                onDragOver={enableDropping}
                onDrop={(e) => handleDrop(e, index)}
                className="buildTeamOptions__currentSelection-single"
                key={index + 50}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="buildTeamOptions__currentSelection-single-content">
                  <div className="buildTeamOptions__currentSelection-single-name">
                    {name}
                  </div>
                  <img
                    className="buildTeamOptions__currentSelection-single-img"
                    style={currentTeam[index] === "" ? { display: "none" } : {}}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt="Loading . . ."
                  />
                </div>
                <button
                  style={
                    !isHovering || currentTeam[index] === ""
                      ? { display: "none" }
                      : {}
                  }
                  onClick={() => clearSingleSelection(index)}
                  className="buildTeamOptions__currentSelection-single-button"
                >
                  <FaTrashCan color="aliceblue" size={"1rem"} />
                </button>
              </div>
            );
          })}
        </div>
        <div className="buildTeamOptions__currentSelection-buttons">
          <div className="buildTeamOptions__currentSelection-buttons-teams-buttons">
            <button
              style={
                activeTeam === 1
                  ? { backgroundColor: "#4152CC" }
                  : { backgroundColor: "#0d0da7" }
              }
              className="buildTeamOptions__currentSelection-buttons-teams buildTeamOptions__currentSelection-buttons-teams"
              onClick={() => setCurrentTeamTo(teamOne, 1)}
            >
              Team One
            </button>
            <button
              style={
                activeTeam === 2
                  ? { backgroundColor: "#F7665F" }
                  : { backgroundColor: "#920f0b" }
              }
              className="buildTeamOptions__currentSelection-buttons-teams"
              onClick={() => setCurrentTeamTo(teamTwo, 2)}
            >
              Team Two
            </button>
            <button
              onClick={() => setCurrentTeamTo(teamThree, 3)}
              style={
                activeTeam == 3
                  ? { backgroundColor: "#F7F29A" }
                  : { backgroundColor: "#ffde00" }
              }
              className="buildTeamOptions__currentSelection-buttons-teams"
            >
              Team Three
            </button>
          </div>
          <button onClick={handleSaveTeam}>Save Current Team</button>
          <button
            onClick={() => setCurrentTeam(["", "", "", "", "", ""])}
            className="buildTeamOptions__currentSelection-buttons-clear-selection"
          >
            Clear Selection
          </button>
        </div>
      </div>

      <div className="buildTeamOptions__wrap">
        <div className="buildTeamOptions__options">
          <h3 className="buildTeamOptions__options-header">Options</h3>

          <div className="buildTeamOptions__options-options">
            <div className="buildTeamOptions__options-search-wrap">
              <input
                type="text"
                placeholder="Search Pokemon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="buildTeamOptions__options-search"
              />
            </div>
            <div>
              {optionsData.map((option, index) => {
                return (
                  <div className="buildTeamOptions-option-wrap">
                    <button
                      onClick={() => setIsSelected(!isSelected)}
                      className="buildTeamOptions__options-option"
                      key={index}
                    >
                      {option.label}
                    </button>
                    <div
                      className="buildTeamOptions__options-suboption-wrap"
                      style={!isSelected ? { display: "none" } : {}}
                    >
                      {option.label === "Type"
                        ? option.options.map((subOption, index) => {
                            return (
                              <button
                                className="buildTeamOptions__options-suboption-button"
                                style={
                                  typesToRender.includes(subOption)
                                    ? {
                                        backgroundColor:
                                          getColorByType(subOption),
                                      }
                                    : { backgroundColor: "#272e5e" }
                                }
                                onClick={
                                  typesToRender.includes(subOption)
                                    ? () =>
                                        setTypesToRender(
                                          typesToRender.filter(
                                            (item) => item !== subOption
                                          )
                                        )
                                    : () =>
                                        setTypesToRender((prevItems) => [
                                          ...prevItems,
                                          subOption,
                                        ])
                                }
                                key={index}
                              >
                                {subOption}
                              </button>
                            );
                          })
                        : option.options.map((subOption, index) => (
                            <button
                              style={{ backgroundColor: "#4152CC" }}
                              className="buildTeamOptions__options-suboption-button"
                              key={index}
                            >
                              {subOption}
                            </button>
                          ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="buildTeamOptions__pokemon-wrap">
            {optionsData[0].options.map((type) => (
              <div
                style={typesToRender.includes(type) ? {} : { display: "none" }}
              >
                <BuildTeamOptionsAllPoke
                  handleDataTransfer={handleDragStart}
                  searchInput={search}
                  key={type}
                  type={type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
