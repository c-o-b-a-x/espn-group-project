function Team({ competitor }) {
  const team = competitor?.team;

  if (!team) return null;

  return (
    <div className="team">
      <img src={team.logo} alt={team.displayName} />
      <p>{team.displayName}</p>
      <p>{competitor.score}</p>
      {competitor.winner && <span className="winner">Winner</span>}
    </div>
  );
}

export default Team;
