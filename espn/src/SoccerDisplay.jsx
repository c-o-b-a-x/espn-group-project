import { useEffect, useState } from "react";
import Competition from "./displayCompetitions";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import News from "./News";

const link =
  "http://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard";

const style = {
  margin: "5px 10px",
};

function SoccerDisplay() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>ESPN Soccer Scores</h1>

        <div className="news">
          <Link style={style} to="/News">
            News
          </Link>
        </div>
      </div>

      <div className="scoreboard">
        {data?.events?.map((event) =>
          event.competitions?.map((comp) => (
            <Competition key={comp.id} competition={comp} />
          )),
        )}
      </div>
      <Routes>
        <Route path="/News" element={<News />}></Route>
      </Routes>
    </>
  );
}

export default SoccerDisplay;
