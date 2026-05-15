import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Roster() {
  const { id } = useParams();

  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(
      `https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/${id}/roster`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeam(data.athletes);
      });
  }, [id]);

  if (!team) return <p>Loading...</p>;

  return (
    <div>
      <h1>Roster</h1>

      {team.map((i) => (
        <div key={i.id}>
          <img src={i.headshot?.href} alt={i.fullName} />

          <h2>{i.fullName}</h2>

          <p>{i.position?.displayName}</p>
        </div>
      ))}
    </div>
  );
}

export default Roster;
