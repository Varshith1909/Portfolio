import Home from './components/Home';
import Navigation from './components/Navbar';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Home />
        <About />
        <Skills />
        <Works />
    </div>
  );
}

export default App;
