import React from "react";

const Quote = ({ id, quote, author }) => {
  return <p>{`${quote} by ${author}`}</p>;
};

export default Quote;
