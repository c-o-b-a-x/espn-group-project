import { useState } from "react";
import "./App.css";

function MlsNews() {
  // Stores the team name the user types into the input
  const [team, setTeam] = useState("");

  // Stores the list of news articles returned from the API
  const [articles, setArticles] = useState([]);

  // Runs when the user clicks the Search button
  function getNews() {
    // Sends a request to the API using the team the user typed
    fetch(
      `https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/news=${team}`,
    )
      // Converts the API response into usable JavaScript data
      .then((response) => response.json())
      // Saves the API data into the articles state variable
      .then((data) => {
        setArticles(data);
      });
  }

  return (
    <div>
      <h1>ESPN Soccer News</h1>
      {/* Input box where the user types an MLS team name */}
      <input
        value={team}
        // Updates team every time the user types
        onChange={(e) => setTeam(e.target.value)}
        placeholder="Enter MLS team"
      />

      {/* Button that runs getNews when clicked */}
      <button onClick={getNews}>Search</button>

      {/* Loops through the articles array and displays each title */}
      {articles.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  );
}

export default MlsNews;
