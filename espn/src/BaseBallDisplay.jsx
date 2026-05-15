import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import News from "./News";
import Competition from "./displayCompetitions";
import { Route, Routes } from "react-router-dom";
const style = {
  margin: "5px 10px",
};

const link =
  "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard";

function BaseBallDisplay() {
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
        <h1>ESPN BaseBall Scores</h1>

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

export default BaseBallDisplay;
