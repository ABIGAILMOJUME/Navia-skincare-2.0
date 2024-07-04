import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { PiArrowRightThin } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../../assets/naviaskin (1).svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-cont">
        <Link to="/">
          <img src={logo} alt="NAVIASKINCARE" className="logo" />
        </Link>
      </div>

      {isMobile && (
        <button className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={20}/> : <FaBars size={20}/>}
        </button>
      )}

      <ul className={`nav-links ${isMobile && isOpen ? 'active' : ''}`}>
        <li className="li">
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        </li>
        <li className="li">
          <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
        </li>
        <li className="li">
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
        </li>
        <li className="li">
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </li>
      </ul>

      <Link to="/services" className="nav-btn-container">
        <button className="nav-btn">BOOK ONLINE <span><PiArrowRightThin/></span></button>
      </Link>
    </nav>
  );
};

export default NavBar;