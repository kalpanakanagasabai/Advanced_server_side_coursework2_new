import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
          <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
          <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
          <li className="nav-item"><Link to="/country-details" className="nav-link">Country Details</Link></li>
        </ul>
        {/* You could add a logo or other elements here on the left */}
      </nav>
    </header>
  );
};

export default Header;