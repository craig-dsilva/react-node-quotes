import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import RandomQuotes from "./pages/RandomQuotes";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<RandomQuotes />} />
      </Routes>
    </div>
  );
};

export default App;
