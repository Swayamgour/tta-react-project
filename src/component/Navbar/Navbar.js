import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://marketplace.canva.com/EAExYGW5F_w/1/0/1600w/canva-white-black-m-letter-logo-design-business-identity-for-digital-design-company-cvlPTTOU2Ak.jpg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
