import { useEffect, useState } from "react";
import "./App.css";
import Competition from "./displayCompetitions";
import Team from "./components/Team";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import SoccerDisplay from "./SoccerDisplay";
import News from "./News";

function App() {
  const [team, setTeam] = useState("");

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/SoccerDisplay"
          element={<SoccerDisplay></SoccerDisplay>}
        ></Route>
        <Route path="/News" element={<News></News>}></Route>
        <Route path="/team/:id" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
