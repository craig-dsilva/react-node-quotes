import React, { useState, useEffect } from "react";

import Quotes from "../Components/Quotes";

const Home = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch(
        "https://craig-dsilva-quote-server.glitch.me/api/quotes/with-id"
      );
      const data = await res.json();
      setQuotes(data);
    };

    fetchQuotes().catch(console.error());
  }, []);

  return (
    <div className="Home">
      <h1>Quotes</h1>
      <Quotes quotes={quotes} />
    </div>
  );
};

export default Home;
