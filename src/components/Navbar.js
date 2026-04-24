import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-dot">◆</span> Yampati Srujana
      </div>
      <ul className="nav-links">
        <li>
          {/* NavLink automatically adds "active" class when route matches */}
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
