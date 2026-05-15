import { Link } from "react-router-dom";
import Team from "./components/Team";
import { Route, Routes } from "react-router-dom";
function DisplayTeam({ competitor }) {
  const team = competitor?.team;

  if (!team) return null;

  return (
    <>
      <div className="team">
        <Link to={`/team/${team.id}`}>
          <img src={team.logo} alt={team.displayName} />
        </Link>
        {console.log(team)}
        <p>{team.displayName}</p>
        <p>{competitor.score}</p>
        {competitor.winner && <span className="winner">Winner</span>}
      </div>
    </>
  );
}

export default DisplayTeam;
