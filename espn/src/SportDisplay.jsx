import { useEffect, useState } from "react";
import "./SportsDisplay.css";

import Competition from "./displayCompetitions";
import { Link, Route, Routes } from "react-router-dom";
import News from "./News";
import { getSportLink } from "./apiLink";

const style = {
  margin: "5px 10px",
};

function SportDisplay() {
  const [sport, setSport] = useState("soccer");
  const [data, setData] = useState(null);

  const link = getSportLink(sport);

  useEffect(() => {
    if (!link) return;

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [link]);

  return (
    <div className="pageLayout">
      <select
        className="navScoreboard"
        value={sport}
        onChange={(e) => setSport(e.target.value)}
      >
        <option value="soccer">Soccer</option>
        <option value="baseball">Baseball</option>
      </select>

      <div className="scoreboard">
        {data?.events?.map((event) =>
          event.competitions?.map((comp) => (
            <Competition key={comp.id} competition={comp} sport={sport} />
          )),
        )}
      </div>
    </div>
  );
}

export default SportDisplay;
