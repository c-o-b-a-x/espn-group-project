import { useEffect, useState } from "react";
import "./App.css";

export default function News() {
  const [news, setNews] = useState("");
  const link =
    "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/news";
  return <p>Hello</p>;
}
