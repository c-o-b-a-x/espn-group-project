import { useEffect, useState } from "react";
import Competition from "./displayCompetitions";
import { Link, Route, Routes } from "react-router-dom";
import News from "./News";
import { getSportLink } from "./apiLink";

const style = {
  margin: "5px 10px",
};

function SportDisplay() {
  const [sport, setSport] = useState("");
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
    <>
      <div>
        <h1>ESPN {sport} Scores</h1>
      </div>

      <div className="sportSelection">
        <button onClick={() => setSport("soccer")}>Soccer</button>
        <button onClick={() => setSport("baseball")}>Baseball</button>
        <button onClick={() => setSport("football")}>Football</button>
      </div>

      {sport && (
        <>
          <div className="news">
            <Link style={style} to="/news">
              News
            </Link>
          </div>

          <div className="scoreboard">
            {data?.events?.map((event) =>
              event.competitions?.map((comp) => (
                <Competition key={comp.id} competition={comp} sport={sport} />
              )),
            )}
          </div>

          <Routes>
            <Route path="/news" element={<News link={link} />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default SportDisplay;
