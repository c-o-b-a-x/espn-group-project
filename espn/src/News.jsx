import { useState } from "react";
import "./App.css";

export default function News() {
  const [news, setNews] = useState("");
  const contextObj = {
    news: news,
    setNews: setNews,
  };
  const link =
    "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/news";
  return (
    <>
      <h1>ESPN Soccer News</h1>
      <input
        type="text"
        placeholder="Search for news"
        value={news}
        onChange={(e) => {
          setNews(e.target.value);
        }}
      />
      <p>
        {news === "" // This means the question is being checked
          ? "Please enter an MLS team to see any news articles." /* Question mark means if that is true, use this */
          : `You searched for: ${news}`}
        {/* Means, otherwise use this instead */}
      </p>
    </>
  );
}
