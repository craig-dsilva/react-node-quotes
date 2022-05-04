import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navigation = () => {
  return (
    <div className="Navigation">
      {/* <Link to="/">All Quotes</Link>
      <Link to="/random">Random Quotes</Link> */}
      <Button variant="contained" color="success" component={Link} to="/">
        All Quotes
      </Button>
      <Button variant="contained" color="success" component={Link} to="/random">
        Random Quotes
      </Button>
    </div>
  );
};

export default Navigation;
