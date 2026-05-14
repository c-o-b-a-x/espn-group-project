import { useContext } from "react";
import { Link } from "react-router-dom";
import teamContext from "./contexts/teamContext";

function DisplayTeam({ competitor }) {
  const { setTeam } = useContext(teamContext);
  const team = competitor?.team;

  if (!team) return null;

  return (
    <div className="team">
      <Link to="/team" onClick={() => setTeam(team)}>
        <img src={team.logo} alt={team.displayName} />
      </Link>

      <p>{team.displayName}</p>
      <p>{competitor.score}</p>
      {competitor.winner && <span className="winner">Winner</span>}
    </div>
  );
}

export default DisplayTeam;
