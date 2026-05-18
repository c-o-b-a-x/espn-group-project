import "./App.css";
import Team from "./components/Team";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import SportDisplay from "./SportDisplay";
import News from "./News";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/SportDisplay" element={<SportDisplay />} />
        <Route path="/" element={<News />} />
        <Route path="/team/:sport/:id" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
