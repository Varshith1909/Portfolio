import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navbar';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/skills" element={ <Skills/> } />
          <Route path="/works" element={ <Works/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
