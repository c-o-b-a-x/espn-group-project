import "./App.css";
import { Link } from "react-router-dom";
import SportDisplay from "./SportDisplay";

export default function NavBar() {
  const style = {
    margin: "5px 10px",
  };
  return (
    <>
      <div className="navbar">
        <SportDisplay></SportDisplay>
      </div>
    </>
  );
}
