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
          <img className="navbar_logo" alt="logo" src="/images/Nav/Logo.png" />
        </Link>
      </div>
      <div className="navbar_links">
        <NavLink className={getActiveClassName} to="/trips" end>
          <img
            className="navbar_icon"
            alt="icon"
            src="/images/Nav/Receipt.png"
          />
          Туры
        </NavLink>
        <NavLink className={getActiveClassName} to="/about" end>
          <img className="navbar_icon" alt="icon" src="/images/Nav/Heart.png" />
          О нас
        </NavLink>
        <NavLink className={getActiveClassName} to="/admin" end>
          <img className="navbar_icon" alt="icon" src="/images/Nav/Call.png" />
          Контакты
        </NavLink>
        <NavLink className={getActiveClassName} to="/admin" end>
          <img className="navbar_icon" alt="icon" src="/images/Nav/User.png" />
          Войти
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
