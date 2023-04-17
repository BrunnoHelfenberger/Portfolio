import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="logo-container"  smooth={true} duration={1000} className="nav-logo">Helfen</Link>
      <ul className={`nav-links ${menuOpen ? 'active' : ''} center-links`}>
        <li><Link to="about" smooth={true} duration={1000} onClick={handleMenuToggle}>Sobre</Link></li>
        <li><Link to="panel-container" smooth={true} offset={-75} duration={1000} onClick={handleMenuToggle}>Projetos</Link></li>
        <li><Link to="contact" smooth={true} duration={1000} onClick={handleMenuToggle}>Contato</Link></li>
      </ul>
      <div className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;