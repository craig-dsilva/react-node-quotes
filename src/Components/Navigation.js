import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">All Quotes</Link>
      <Link to="/random">Random Quotes</Link>
    </div>
  );
};

export default Navigation;
