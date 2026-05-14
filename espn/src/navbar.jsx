import "./navbar.css";
import { Link } from "react-router-dom";

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
            </div>
          </nav>
        </div>
        <div className="news">
          <Link style={style} to="/News">
            News
          </Link>
        </div>
      </div>
    </>
  );
}
