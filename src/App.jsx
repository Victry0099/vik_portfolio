import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="waving-star-background">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
      
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes> */}
      </div>
    </Router>
  );
};

export default App;
