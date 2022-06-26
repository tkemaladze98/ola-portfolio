import './App.scss'
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/about/About";
import HomePage from "./components/homePage/HomePage";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import NavBar from "./components/navBar/NavBar"
import CollapsedNavBar from "./components/navBar/CollapsedNavBar"
import Footer from './components/footer/Footer';

const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

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