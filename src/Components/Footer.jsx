import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer" role="contentinfo">
      <div className="footer-inner">
        <div className="brand">
            <div>OluVentures Nig Ltd <br />
            <p className="footer-p">
                Our mission is to be a leading soap manufacturer using at least 85% raw 
                materials locally generated with the aim of producing high quality 
                soaps at reasonable price for the benefit of our customers.
            </p>
            </div>
            
        </div>
        

        <div className="links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="socials" aria-label="Social links">
          <a href="#" aria-label="instagram">
            <FiInstagram />
          </a>
          <a href="#" aria-label="facebook">
            <FiFacebook />
          </a>
          <a href="#" aria-label="twitter">
            <FiTwitter />
          </a>
        </div>
      </div>

      <hr />

      <div className="copyright">
        © {new Date().getFullYear()} OluVentures Nig Ltd. All rights reserved.
      </div>
    </footer>
  );
}
