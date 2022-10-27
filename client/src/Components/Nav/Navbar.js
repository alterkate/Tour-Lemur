import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function getActiveClassName({ isActive }) {
  return isActive ? 'selected' : 'menu_links';
}
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            className="navbar_logo"
            alt="logo"
            src="/images/loader.png"
          />
        </Link>
      </div>
      <div className="navbar_links">
        <NavLink className={getActiveClassName} to="/" end>
          Main
        </NavLink>
        <div className="divider" />
        <NavLink className={getActiveClassName} to="/about" end>
          About
        </NavLink>
        <div className="divider" />
        <NavLink className={getActiveClassName} to="/trips" end>
          Trips
        </NavLink>
        <div className="divider" />
        <NavLink className={getActiveClassName} to="/admin" end>
          Admin
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
