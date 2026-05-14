import Team from "./displayTeams";
function Competition({ competition }) {
  const competitors = competition?.competitors;

  if (!competitors) return null;

  return (
    <div className="game-card">
      <Team competitor={competitors[0]} />

      <div className="center">
        <div className="vs">VS</div>
        {!competitors[0].winner && !competitors[1].winner && (
          <span className="winner">Tie</span>
        )}
      </div>

      <Team competitor={competitors[1]} />
    </div>
  );
}
export default Competition;
