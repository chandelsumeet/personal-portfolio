import React from "react";
import logo from "./logo.svg";
import Navbar from "./Components/NavbarComponent/Navbar";
import Home from "./Components/HomeComponent/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./Components/ProjectComponent/Project";
import Contact from "./Components/ContactComponent/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
