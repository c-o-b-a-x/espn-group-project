import "./navbar.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SportDisplay from "./SportDisplay";

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
              <Link to="/SportDisplay">Sport Scoreboards</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
