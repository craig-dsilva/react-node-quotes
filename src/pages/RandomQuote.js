import React, { useState, useEffect } from "react";
import Quote from "../Components/Quote";

const RandomQuote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchQuotes = async () => {
      const randomId = Math.round(Math.random() * 101);

      const res = await fetch(
        `https://craig-dsilva-quote-server.glitch.me/api/quotes/${randomId}`
      );
      const data = await res.json();
      setQuote(data);
    };

    fetchQuotes().catch(console.error());
  }, []);

  return <Quote key={quote.id} quote={quote.quote} author={quote.author} />;
};

export default RandomQuote;
