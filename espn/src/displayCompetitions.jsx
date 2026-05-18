import DisplayTeam from "./displayTeams";
import "./App.css";

function Competition({ competition, sport }) {
  const competitors = competition?.competitors;

  if (!competitors) return null;

  return (
    <div className="competitionCard">
      <DisplayTeam competitor={competitors[0]} sport={sport} />

      <div className="divider" />

      <DisplayTeam competitor={competitors[1]} sport={sport} />
    </div>
  );
}

export default Competition;
