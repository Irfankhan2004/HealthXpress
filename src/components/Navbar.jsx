import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeartbeat, FaBars, FaTimes } from "react-icons/fa";
import "../assets/css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* Logo */}

      <Link to="/" className="logo">
        <FaHeartbeat />
        <span>Health</span>Xpress
      </Link>

      {/* Navigation */}

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/doctor-choice" onClick={closeMenu}>
          Doctors
        </NavLink>

        <NavLink to="/ambulance" onClick={closeMenu}>
          Ambulance
        </NavLink>

        <NavLink to="/disease" onClick={closeMenu}>
          Disease
        </NavLink>

        <NavLink to="/schemes" onClick={closeMenu}>
          Schemes
        </NavLink>

        <NavLink to="/medical-camp" onClick={closeMenu}>
          Medical Camp
        </NavLink>

      </div>

      {/* Register Button */}

      <Link to="/register">
        <button className="nav-btn">
          Register
        </button>
      </Link>

      {/* Mobile Menu */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;