import { Link } from "react-router-dom";
import "./displayTeams.css";

function DisplayTeam({ competitor, sport }) {
  const team = competitor?.team;

  if (!team) return null;

  return (
    <div className="teamRow">
      <Link to={`/team/${sport}/${team.id}`} className="teamLeft">
        <img src={team.logo} alt={team.displayName} className="teamLogo" />
        <span className="teamAbbr">{team.abbreviation}</span>
      </Link>

      <div className={`teamScore ${competitor.winner ? "winnerScore" : ""}`}>
        {competitor.score}
      </div>
    </div>
  );
}

export default DisplayTeam;
