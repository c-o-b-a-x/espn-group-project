import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import SoccerDisplay from "./SoccerDisplay";
import News from "./News";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/SoccerDisplay"
          element={<SoccerDisplay></SoccerDisplay>}
        ></Route>
        <Route path="/News" element={<News></News>}></Route>
      </Routes>
    </>
  );
}

export default App;
