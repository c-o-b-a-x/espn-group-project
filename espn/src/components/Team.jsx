import { useContext } from "react";
import teamContext from "../contexts/teamContext";

function Team() {
  const { team } = useContext(teamContext);
  console.log(team);
  if (!team) return <p>No team selected</p>;

  return (
    <div>
      <h1>{team.displayName}</h1>
      <img src={team.logo} alt={team.displayName} />
    </div>
  );
}

export default Team;
