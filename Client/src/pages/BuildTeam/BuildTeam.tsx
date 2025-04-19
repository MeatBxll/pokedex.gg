import { NavBar } from "../../common/components/NavBar/NavBar";
import { BuildTeamCurrentSelection } from "./components/BuildTeamCurrentSelection/BuildTeamCurrentSelection";
import { BuildTeamOptions } from "./components/BuildTeamOptions/BuildTeamOptions";
import "./buildTeam.css";

export const BuildTeam = () => {
  return (
    <div>
      <NavBar currentPage="BUILDTEAM" />
      <div className="buildTeam__wrap">
        <BuildTeamCurrentSelection />
        <BuildTeamOptions />
      </div>
    </div>
  );
};
