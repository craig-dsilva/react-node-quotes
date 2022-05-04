import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navigation = () => {
  return (
    <div className="navigation">
      <Button variant="contained" color="primary" component={Link} to="/">
        All Quotes
      </Button>
      <Button variant="contained" color="success" component={Link} to="/random">
        Random Quote
      </Button>
    </div>
  );
};

export default Navigation;
