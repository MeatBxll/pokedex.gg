import "./BuildTeamTeams.css";
import { useState } from "react";
import "./BuildTeamTeams.css";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { selectTeams } from "../../../../app/userSlice";
import { useUpdatePokemonTeamMutation } from "../../../../api/backend/teamApiEndpoints";
import { BuildTeamTeamsButton } from "./BuildTeamTeamsButton/BuildTeamTeamsButton";
import { BuildTeamTeamsDisplay } from "./BuildTeamTeamsDisplay/BuildTeamTeamsDisplay";
import { setTeams } from "../../../../app/userSlice";
import { selectUserId } from "../../../../app/userSlice";

interface BuildTeamTeamsProps {
  enableDropping: any;
}

export const BuildTeamTeams = (props: BuildTeamTeamsProps) => {
  const { enableDropping } = props;
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
    if (!team1[i]) team1.push(0);
  }

  for (let i = 0; team2.length < 6; i++) {
    if (!team2[i]) team2.push(0);
  }

  for (let i = 0; team3.length < 6; i++) {
    if (!team3[i]) team3.push(0);
  }

  const [updatePokemonTeam] = useUpdatePokemonTeamMutation();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);

  const handleSaveTeam = async (e: any) => {
    e.preventDefault();
    let teamId = "";
    if (activeTeam === 1) teamId = teams[0].id;
    else if (activeTeam === 2) teamId = teams[1].id;
    else if (activeTeam === 3) teamId = teams[2].id;
    const filteredTeam = currentTeam.filter((t) => t !== 0);
    console.log(filteredTeam);
    try {
      const res = await updatePokemonTeam({
        teamId,
        pokemon: filteredTeam,
      }).unwrap();
      console.log(res);
      dispatch(setTeams(res));
    } catch (err: any) {
      console.log(err);
    }
  };

  //my stuff

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    const dataXfer = event.dataTransfer.getData("text");
    const id = dataXfer.split(" ")[0];
    const tempTeam = [...currentTeam];
    tempTeam[index] = Number(id);
    setCurrentTeam(tempTeam);
  };

  const setCurrentTeamTo = (nextTeam: any, nextTeamNumber: number) => {
    if (activeTeam === 1) setTeamOne(currentTeam);
    else if (activeTeam === 2) setTeamTwo(currentTeam);
    else if (activeTeam === 3) setTeamThree(currentTeam);
    if (activeTeam !== nextTeamNumber) {
      setActiveTeam(nextTeamNumber);
      setCurrentTeam(nextTeam);
    }
  };
  const [teamOne, setTeamOne] = useState([...team1]);
  const [teamTwo, setTeamTwo] = useState([...team2]);
  const [teamThree, setTeamThree] = useState([...team3]);

  const [currentTeam, setCurrentTeam] = useState(teamOne);

  const [activeTeam, setActiveTeam] = useState(1);

  const clearSingleSelection = (index: number) => {
    const tempTeam = [...currentTeam];
    tempTeam[index] = 0;
    setCurrentTeam(tempTeam);
  };

  return (
    <div className="buildTeamOptions">
      <div className="buildTeamOptions__currentSelection">
        <div className="buildTeamOptions__currentSelection-pokemon">
          {currentTeam.map((id, index) => (
            <BuildTeamTeamsDisplay
              enableDropping={enableDropping}
              handleDrop={handleDrop}
              index={index}
              id={id}
              isEmpty={currentTeam[index] === 0}
              clearSelectionOnClick={clearSingleSelection}
              key={index}
            />
          ))}
        </div>

        <div className="buildTeamOptions__currentSelection-buttons">
          <div className="buildTeamOptions__currentSelection-buttons-teams-buttons">
            <BuildTeamTeamsButton
              team={1}
              activeTeam={activeTeam}
              onclick={() => setCurrentTeamTo(teamOne, 1)}
            />
            <BuildTeamTeamsButton
              team={2}
              activeTeam={activeTeam}
              onclick={() => setCurrentTeamTo(teamTwo, 2)}
            />
            <BuildTeamTeamsButton
              team={3}
              activeTeam={activeTeam}
              onclick={() => setCurrentTeamTo(teamThree, 3)}
            />
          </div>
          {userId && (
            <button
              className="buildTeamOptions__currentSelection-buttons-clear-selection"
              onClick={handleSaveTeam}
            >
              Save Current Team
            </button>
          )}
          <button
            onClick={() => setCurrentTeam([0, 0, 0, 0, 0, 0])}
            className="buildTeamOptions__currentSelection-buttons-clear-selection"
          >
            Clear Selection
          </button>
        </div>
      </div>
    </div>
  );
};
