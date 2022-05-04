import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import RandomQuote from "./pages/RandomQuote";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<RandomQuote />} />
      </Routes>
    </div>
  );
};

export default App;
