import { useEffect, useState } from "react";
import "./App.css";
import Competition from "./displayCompetitions";
import Team from "./components/Team";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import SportDisplay from "./SportDisplay";
import News from "./News";

function App() {
  const [team, setTeam] = useState("");

  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/NavBar" element={<NavBar />}></Route>
        <Route path="/" element={<News />}></Route>
        <Route path="/team/:id" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
