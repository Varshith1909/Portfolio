import Home from './components/Home';
import Navigation from './components/Navbar';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Home />
        <About />
        <Skills />
    </div>
  );
}

export default App;
