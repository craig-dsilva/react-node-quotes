import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RandomQuotes from "./pages/RandomQuotes";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/random" element={<RandomQuotes />} />
    </Routes>
  );
};

export default App;
