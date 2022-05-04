import React from "react";

const Quote = ({ quote, author }) => {
  return quote ? (
    <div className="quote">
      <p className="quote-text">{quote}</p>
      <p className="quote-author">{`- ${author}`}</p>
    </div>
  ) : (
    <p>Loading Quote...</p>
  );
};

export default Quote;
