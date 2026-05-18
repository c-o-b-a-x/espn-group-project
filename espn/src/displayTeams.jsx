function DisplayTeam({ competitor, sport }) {
  const team = competitor?.team;
  if (!team) return null;

  return (
    <div className="teamRow">
      <div className="teamLeft">
        <img className="teamLogo" src={team.logo} alt={team.abbreviation} />
        <span className="teamAbbr">{team.abbreviation}</span>
      </div>

      <div className={`teamScore ${competitor.winner ? "winnerScore" : ""}`}>
        {competitor.score}
      </div>
    </div>
  );
}

export default DisplayTeam;
