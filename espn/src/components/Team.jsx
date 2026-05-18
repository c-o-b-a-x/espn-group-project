import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Roster from "./Roster";
import { getTeamLink } from "../apiLink";

function Team() {
  const { sport, id } = useParams();

  const [team, setTeam] = useState(null);

  const link = getTeamLink(sport, id);

  useEffect(() => {
    if (!link) return;

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeam(data.team);
      });
  }, [link]);

  if (!team) return <p>Loading...</p>;
  if (sport === "soccer") {
    return (
      <>
        <div>
          <h1>{team.displayName}</h1>
          <img src={team.logos?.[0]?.href} alt={team.displayName} />

          <h2>Next Event</h2>
          <p>{team.nextEvent?.[0]?.name}</p>
          <p>{team.nextEvent?.[0]?.date}</p>

          <h2>Record</h2>
          <p>{team.record?.items?.[0]?.summary}</p>

          <h3>Home Record</h3>
          <p>
            {team.record?.items?.[0]?.stats?.[22]?.value}-
            {team.record?.items?.[0]?.stats?.[21]?.value}-
            {team.record?.items?.[0]?.stats?.[18]?.value}
          </p>

          <h3>Away Record</h3>
          <p>
            {team.record?.items?.[0]?.stats?.[15]?.value}-
            {team.record?.items?.[0]?.stats?.[14]?.value}-
            {team.record?.items?.[0]?.stats?.[11]?.value}
          </p>
        </div>

        <Roster />
      </>
    );
  }
  if (sport === "football") {
    return (
      <>
        <div>
          <h1>{team.displayName}</h1>
          <img src={team.logos?.[0]?.href} alt={team.displayName} />

          <h2>Next Event</h2>
          <p>{team.nextEvent?.[0]?.name}</p>
          <p>{team.nextEvent?.[0]?.date}</p>

          <h2>Record</h2>
          <p>{team.record?.items?.[0]?.summary}</p>

          <h3>Home Record</h3>
          <p>
            {team.record?.items?.[0]?.stats?.[22]?.value}-
            {team.record?.items?.[0]?.stats?.[21]?.value}-
            {team.record?.items?.[0]?.stats?.[18]?.value}
          </p>

          <h3>Away Record</h3>
          <p>
            {team.record?.items?.[0]?.stats?.[15]?.value}-
            {team.record?.items?.[0]?.stats?.[14]?.value}-
            {team.record?.items?.[0]?.stats?.[11]?.value}
          </p>
        </div>

        <Roster />
      </>
    );
  }
  if (sport === "baseball") {
    return (
      <>
        <div>
          <h1>{team.displayName}</h1>
          <img src={team.logos?.[0]?.href} alt={team.displayName} />

          <h2>Next Event</h2>
          <p>{team.nextEvent?.[0]?.name}</p>
          <p>{team.nextEvent?.[0]?.date}</p>

          <h2>Record</h2>
          <p>{team.record?.items?.[0]?.summary}</p>

          <h3>Home Record</h3>
          <p>{team.record?.items?.[1]?.summary}</p>

          <h3>Away Record</h3>
          <p>{team.record?.items?.[2]?.summary}</p>
        </div>

        <Roster />
      </>
    );
  }
}

export default Team;
