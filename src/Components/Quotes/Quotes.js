import React from "react";
import Quote from "./Quote/Quote";

const Quotes = ({ quotes }) => {
  return (
    <div>
      {quotes.map((quote, index) => (
        <Quote key={quote.id} quote={quote.quote} author={quote.author} />
      ))}
    </div>
  );
};

export default Quotes;
