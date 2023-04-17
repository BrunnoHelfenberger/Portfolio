import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Logo from './components/Logo';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import SimpleCssWaves from './components/SimpleCssWaves';
import './components/semi-circle.css'
import './App.css'




function App() {


  const [activeLink, setActiveLink] = useState('link1');

  function handleLinkClick(link) {
    setActiveLink(link);
  }


  return (
    <div>
      <Logo />
      <Navbar />
      <About />
      <SimpleCssWaves />

      <div className="panel-container">
        <LeftPanel handleLinkClick={handleLinkClick} />
        <div id="svg">

          <svg id="semi-circle" viewBox="0 0 100 100" width="100" height="100" transform="rotate(90)">
            <path d="M 50 0 A 50 50 0 0 0 100 50 L 50 50 Z" fill="rgba(40,40,40)" />
          </svg>

        </div>

        <div id="svg_2">

          <svg id="semi-circle_2" viewBox="0 0 100 100" width="100" height="100" transform="rotate(0)">
            <path d="M 50 0 A 50 50 0 0 0 100 50 L 50 50 Z" fill="rgba(40,40,40)" />
          </svg>

        </div>

        <RightPanel activeLink={activeLink} />

      </div>

      <Contact />
    </div>
  );
}

export default App;