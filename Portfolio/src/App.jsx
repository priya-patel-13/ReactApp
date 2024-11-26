import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />           
          </Routes>
      </div>
    </Router>
  );
}

export default App;
