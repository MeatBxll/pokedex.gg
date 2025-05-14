import "./BuildTeamTeamsButton.css";

interface BuildTeamsTeamsButtonProps {
  activeTeam: number;
  team: number;
  onclick: () => void;
}

export const BuildTeamTeamsButton = ({
  team,
  activeTeam,
  onclick,
}: BuildTeamsTeamsButtonProps) => {
  let color = "#ffffff";
  let lightenColor = "#dddddd";

  if (team === 1) {
    color = "#0d0da7";
    lightenColor = "#4152CC";
  } else if (team === 2) {
    color = "#F7665F"; // Removed extra #
    lightenColor = "#920f0b";
  } else if (team === 3) {
    color = "#ffde00";
    lightenColor = "#F7F29A";
  }

  return (
    <button
      style={{
        backgroundColor: activeTeam === team ? lightenColor : color,
      }}
      className="buildTeamOptions__currentSelection-buttons-teams"
      onClick={onclick}
    >
      Team {team}
    </button>
  );
};
