import React from "react";

const Quote = ({ quote, author }) => {
  return quote ? (
    <p className="quote">
      <q className="quote-text">{quote}</q>
      <em className="quote-author">{`- ${author}`}</em>
    </p>
  ) : (
    <p>Loading Quote...</p>
  );
};

export default Quote;
