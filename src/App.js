import "./App.css";
import React, { Component } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={<TextForm heading="Write a letter to your mom" />}
            />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
