import { useEffect, useState } from "react";
import Competition from "./displayCompetitions";

const link =
  "http://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard?dates=";

function SoccerDisplay() {
  const [date, setDate] = useState("20260505");
  const [data, setData] = useState();

  useEffect(() => {
    if (date === "") return;

    fetch(link + date.split("-").join(""))
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [date]);

  return (
    <>
      <div>
        <h1>ESPN Soccer Scores</h1>

        <input
          type="date"
          id="datepicker"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="scoreboard">
        {data?.events?.map((event) =>
          event.competitions?.map((comp) => (
            <Competition key={comp.id} competition={comp} />
          )),
        )}
      </div>
    </>
  );
}

export default SoccerDisplay;
