// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import JadidchiDetails from "./JadidchiDetails";
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jadidchi/:id" element={<JadidchiDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
