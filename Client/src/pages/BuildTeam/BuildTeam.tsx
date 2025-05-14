import { useCallback } from "react";
import { NavBar } from "../../common/components/NavBar/NavBar";
import "./buildTeam.css";
import { BuildTeamOptions } from "./components/BuildTeamOptions/BuildTeamOptions";
import { BuildTeamTeams } from "./components/BuildTeamTeams/BuildTeamTeams";

export const BuildTeam = () => {
  const handleDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData("text", event.currentTarget.innerText);
    },
    []
  );

  const enableDropping = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    },
    []
  );

  return (
    <div>
      <NavBar currentPage="BUILDTEAM" />
      <div className="buildTeam__wrap">
        <BuildTeamTeams enableDropping={enableDropping} />
        <BuildTeamOptions dragStart={handleDragStart} />
      </div>
    </div>
  );
};
