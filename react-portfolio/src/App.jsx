import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact/:email" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>&copy; 2022 Mike Francis</footer>
    </Router>
  );
}

export default App;
