import Home from './components/Home';
import Navigation from './components/Navbar';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Home />
        <About />
    </div>
  );
}

export default App;
