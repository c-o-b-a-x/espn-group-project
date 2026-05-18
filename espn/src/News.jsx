import { useState } from "react";
import "./App.css";

function MlsNews() {
  // Stores the team name the user types into the input
  const [sport, setSport] = useState("");

  // Stores the list of news articles returned from the API
  const [articles, setArticles] = useState([]);

  // Runs when the user clicks the Search button
  function getNews() {
    // Sends a request to the API using the team the user typed
    fetch(
      `https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/news=${sport}`,
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
      {/* Loops through the articles array and displays each title */}
      {articles.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  );
}

export default MlsNews;
