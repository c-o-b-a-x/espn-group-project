import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const style = {
    display: "inline-block",
    margin: "5px 10px",
  };
  return (
    <>
      <div className="navbar">
        <div className="dropdown">
          <nav>
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <Link to="/SoccerDisplay" style={style}>
                Soccer
              </Link>
            </div>
          </nav>
        </div>
        <div>
          <Link to="/News" style={style}>
            News
          </Link>
        </div>
      </div>
    </>
  );
}
