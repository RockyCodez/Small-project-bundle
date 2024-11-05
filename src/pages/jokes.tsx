import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "src/components";
import { ROUTES } from "src/constants";

import "../styles/pages/jokes.css";

const Jokes = () => {
  const navigate = useNavigate();

  const [joke, setJoke] = useState();
  const [date, setDate] = useState<string>();

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      const data = await response.json();
      setJoke(data.value);
      const date = new Date().toLocaleString();
      setDate(date);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchJoke();

    const interval = setInterval(fetchJoke, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="jokes-container">
      <div className="back-btn-wrapper">
        <Button
          text="Back"
          onClick={() => {
            setJoke(undefined);
            navigate(ROUTES.landing);
          }}
        />
      </div>
      <div className="jokes-content">
        <h1>Chuck norris jokes</h1>
        <p>{joke || "Loading..."}</p>
        <p>Last updated: {date ?? "Was not fetched yet"}</p>
      </div>
    </div>
  );
};

export default Jokes;
