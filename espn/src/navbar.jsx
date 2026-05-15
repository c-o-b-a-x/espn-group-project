import "./navbar.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SoccerDisplay from "./SoccerDisplay";
import BaseBallDisplay from "./BaseBallDisplay";

import TeamContext from "./contexts copy/namecontext";

export default function NavBar() {
  const style = {
    margin: "5px 10px",
  };
  return (
    <>
      <div className="navbar">
        <div className="dropdown">
          <nav>
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <Link to="/SoccerDisplay">Soccer</Link>
              <Link to="/BaseBallDisplay">BaseBall</Link>
            </div>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/SoccerDisplay" element={<SoccerDisplay />}></Route>
        <Route path="/BaseBallDisplay" element={<BaseBallDisplay />}></Route>
      </Routes>
    </>
  );
}
