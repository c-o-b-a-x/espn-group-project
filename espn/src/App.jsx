import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Competition from "./displayCompetitions";
import Team from "./components/Team";
import teamContext from "./contexts/teamContext";

const link =
  "http://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard?dates=";

function App() {
  const [team, setTeam] = useState("");

  return (
    <>
      <teamContext.Provider value={{ team, setTeam }}>
        <Routes>
          <Route path="/team" element={<Team />} />
        </Routes>
      </teamContext.Provider>
    </>
  );
}

export default App;
