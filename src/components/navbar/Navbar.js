import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { SiAnaconda } from "react-icons/si";
import group46 from "../../assets/group46.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <p className="logo-text">
          {/* <SiAnaconda color="#000" size={33} /> */}
          <Link to="/about"><img className='mainlogo' src={group46} /></Link>
          <br />
          Where Technology Meets Agriculture
        </p>
      </div>

      <div> 
        <ul className="nav-links">
          <li><Link to="/about">About Us</Link></li>

          {/* Dropdown for Products */}
          <li className="dropdown">
            <span className="dropdown-title">Products</span>
            <ul className="dropdown-menu">
              <li><Link to="/device">Hardware</Link></li>
              <li><Link to="/insights">Software</Link></li>
            </ul>
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
