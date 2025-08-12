// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaHome, FaInfoCircle, FaSoap, FaServicestack, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="navbar-logo" onClick={closeMenu}>
//           Olu<span>Ventures</span>
//         </Link>

//         {/* Hamburger Icon */}
//         <div className="menu-icon" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         {/* Links */}
//         <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <NavLink exact="true" to="/" className="nav-links" onClick={closeMenu}>
//               <FaHome className="nav-icon" /> Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/about-us" className="nav-links" onClick={closeMenu}>
//               <FaInfoCircle className="nav-icon" /> About Us
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/our-products" className="nav-links" onClick={closeMenu}>
//               <FaSoap className="nav-icon" /> Our Products
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/our-services" className="nav-links" onClick={closeMenu}>
//               <FaServicestack className="nav-icon" /> Our Services
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/contact-us" className="nav-links" onClick={closeMenu}>
//               <FaEnvelope className="nav-icon" /> Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiInfo, FiBox, FiTool, FiMail,} from "react-icons/fi";
import "./Navbar.css";
import logo from "../assets/logo.svg"; // Assuming you have a logo image

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth > 800) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="Navbar" role="navigation" aria-label="Main Navigation">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
         <img src={logo} className="brand-logo" alt="Olu Venture Logo" />
          <p className="brand-name">Olu Ventures</p>
        </Link>

        <button
          className="hamburger"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              <FiHome /> <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/about-us" onClick={() => setOpen(false)}>
              <FiInfo /> <span>About Us</span>
            </Link>
          </li>

          <li>
            <Link to="/our-products" onClick={() => setOpen(false)}>
              <FiBox /> <span>Our Products</span>
            </Link>
          </li>

          <li>
            <Link to="/our-services" onClick={() => setOpen(false)}>
              <FiTool /> <span>Our Services</span>
            </Link>
          </li>

          <li>
            <Link to="/contact-us" onClick={() => setOpen(false)}>
              <FiMail /> <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

