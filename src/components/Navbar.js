import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as EsperantoStar } from './logo.svg'; // We'll create this SVG file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <EsperantoStar className="logo-icon" />
        <NavLink to="/">Lernu Esperanton</NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/grammar">Grammar</NavLink></li>
        <li><NavLink to="/vocabulary">Vocabulary</NavLink></li>
        <li><NavLink to="/translator">Translator</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;