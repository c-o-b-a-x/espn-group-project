import { useEffect, useState } from "react";
import "./App.css";

function MlsNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/news")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>ESPN Soccer News</h1>

      {news.map((article, index) => (
        <div key={index}>
          <h2>{article.headline}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MlsNews;
