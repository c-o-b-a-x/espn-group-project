import { Link } from "react-router-dom";
function DisplayTeam({ competitor, sport }) {
  const team = competitor?.team;

  if (!team) return null;

  return (
    <div className="team">
      <Link to={`/team/${sport}/${team.id}`}>
        <img src={team.logo} alt={team.displayName} />
      </Link>

      <p>{team.displayName}</p>
      <p>{competitor.score}</p>

      {competitor.winner && <span className="winner">Winner</span>}
    </div>
  );
}

export default DisplayTeam;
