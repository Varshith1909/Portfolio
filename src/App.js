import Home from './components/Home';
import Navigation from './components/Navbar';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
    </div>
  );
}

export default App;
