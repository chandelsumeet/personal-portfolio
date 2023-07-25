import React, { useEffect } from "react";
import logo from "./logo.svg";
import Navbar from "./Components/NavbarComponent/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./Components/ProjectComponent/Project";
import Contact from "./Components/ContactComponent/Contact";
import "./App.css";
import Home from "./Components/HomeComponent/Home";
function App() {
  useEffect(() => {
    document.title = "Home";
  });

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
