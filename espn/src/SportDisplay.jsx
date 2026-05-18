import { useEffect, useState } from "react";
import "./SportsDisplay.css";

import Competition from "./displayCompetitions";
import { Link, Route, Routes } from "react-router-dom";

const style = {
  margin: "5px 10px",
};

function SportDisplay() {
  const [sport, setSport] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    let link = "";

    if (sport === "soccer") {
      link =
        "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard";
    } else if (sport === "baseball") {
      link =
        "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard";
    }

    if (link) {
      fetch(link)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }, [sport]);

  return (
    <>
      <select
        className="navScoreboard"
        value={sport}
        onChange={(e) => setSport(e.target.value)}
      >
        <option value="">Select Sport</option>
        <option value="soccer">Soccer</option>
        <option value="baseball">Baseball</option>
      </select>

      {sport && (
        <>
          <div className="scoreboard">
            {data?.events?.map((event) =>
              event.competitions?.map((comp) => (
                <Competition key={comp.id} competition={comp} />
              )),
            )}
          </div>
        </>
      )}
    </>
  );
}

export default SportDisplay;
