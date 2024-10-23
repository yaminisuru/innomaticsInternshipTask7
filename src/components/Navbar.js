import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import custom styles

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand text-danger" to="/"><img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/innomatics-footer-logo.png"
            alt="Innomatics Logo"
            style={{ width: '150px' }}
          /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-danger" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-danger" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-danger" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-danger" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
