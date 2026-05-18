import DisplayTeam from "./displayTeams";
import "./App.css";
function Competition({ competition, sport }) {
  const competitors = competition?.competitors;

  if (!competitors) return null;

  return (
    <>
      <div className="competitionCard">
        <div className="game-card">
          <DisplayTeam competitor={competitors[0]} sport={sport} />
          <div className="center">
            <div className="vs">VS</div>
            {!competitors[0].winner && !competitors[1].winner && (
              <span className="winner">Tie</span>
            )}
          </div>

          <DisplayTeam competitor={competitors[1]} sport={sport} />
        </div>
      </div>
    </>
  );
}

export default Competition;
