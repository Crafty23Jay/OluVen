import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaGoogle, FaTiktok, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer" role="contentinfo">
      <div className="footer-inner">
        <div className="brand">
            <div>OluVentures Nig Ltd <br />
            <p className="footer-p">
                Our mission is to be a trusted leader in soap manufacturing, committed 
                to sourcing at least 85% of our raw materials locally. By supporting 
                local suppliers and communities, we ensure that every bar of soap reflects 
                quality, sustainability, and authenticity.
            </p>
            </div>
            
        </div>
        

        <div className="links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/our-products">Products</Link>
          <Link to="/our-services">Services</Link>
          <Link to="/contact-us">Contact</Link>
        </div>

        <div className="socials" aria-label="Social links">
          <a href="#" aria-label="instagram">
            <FiInstagram />
          </a>
          <a href="#" aria-label="facebook">
            <FiFacebook />
          </a>
          <a href="#" aria-label="facebook">
            <FiTwitter />
          </a>
          <a href="#" aria-label="google">
            <FaGoogle />
          </a>
          <a href="#" aria-label="tiktok">
            <FaTiktok />
          </a>
          <a href="#" aria-label="youtube">
            <FaYoutube />
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
