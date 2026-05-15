import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Team() {
  const { id } = useParams();

  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(
      `https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/${id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeam(data.team);
      });
  }, [id]);

  if (!team) return <p>Loading...</p>;

  return (
    <div>
      <h1>{team.displayName}</h1>
      <img src={team.logos?.[0]?.href} alt={team.displayName} />
      <h2>Next Event</h2>
      <p>{team.nextEvent[0].name}</p>
      <p>{team.nextEvent[0].date}</p>
      <h2> Record</h2>
      <p> {team.record.items[0].summary}</p>
      <h3> Home Record</h3>
      <p>
        {team.record.items[0].stats[22].value}-
        {team.record.items[0].stats[21].value}-
        {team.record.items[0].stats[18].value}
      </p>
      <h3> Away Record</h3>
      <p>
        {team.record.items[0].stats[15].value}-
        {team.record.items[0].stats[14].value}-
        {team.record.items[0].stats[11].value}
      </p>
    </div>
  );
}

export default Team;
