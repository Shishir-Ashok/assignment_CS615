import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Game from './Game.jsx';
import Contact from './Contact';
import About from './About.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Game</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default App;