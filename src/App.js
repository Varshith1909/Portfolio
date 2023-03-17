import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navbar';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import PreviousWorks from './components/PreviousWorks';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="*" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/skills" element={ <Skills/> } />
          <Route path="/project" element={ <Project/> } />
          <Route path="/previousworks" element={ <PreviousWorks/> } />
          <Route path="/contact" element={ <Contact/> } />
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
