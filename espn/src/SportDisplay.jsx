import { useEffect, useState } from "react";
import Competition from "./displayCompetitions";
import { Link, Route, Routes } from "react-router-dom";
import News from "./News";

const style = {
  margin: "5px 10px",
};

function SportDisplay() {
  const [sport, setSport] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    let link = "";
    let links = {
      soccer: "usa.1",
      baseball: "mlb",
      football: "nfl",
    };

    link = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${links[sport]}/scoreboard`;

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
      <div>
        <h1>ESPN {sport} Scores</h1>
      </div>

      <div className="sportSelection">
        <button
          onClick={() => {
            setSport("soccer");
          }}
        >
          Soccer
        </button>
        <button
          onClick={() => {
            setSport("baseball");
          }}
        >
          Baseball
        </button>{" "}
        <button
          onClick={() => {
            setSport("football");
          }}
        >
          football
        </button>
      </div>

      {sport && (
        <>
          <div className="news">
            <Link style={style} to="/">
              News
            </Link>
          </div>

          <div className="scoreboard">
            {data?.events?.map((event) =>
              event.competitions?.map((comp) => (
                <Competition key={comp.id} competition={comp} />
              )),
            )}
          </div>

          <Routes>
            <Route path="/" element={<News />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default SportDisplay;
