import './App.scss'
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar"
import CollapsedNavBar from "./components/NavBar/CollapsedNavBar"
import Footer from './components/Footer/Footer';
import useWindowSize from "./helpers/useWindowSize";


function App() {
  const windowDimensions = useWindowSize()

  return (
    <div className="App">
      <Router>
        {windowDimensions.width <= 500 ? (
          <CollapsedNavBar />
        ) : (<NavBar />)}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;