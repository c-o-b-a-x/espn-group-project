import { useEffect, useState } from "react";
import "./App.css";
import Competition from "./displayCompetitions";
import Team from "./components/Team";
import teamContext from "./contexts/teamContext";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import SoccerDisplay from "./SoccerDisplay";
import BaseBallDisplay from "./BaseBallDisplay";
import News from "./News";

function App() {
  const [team, setTeam] = useState("");

  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
