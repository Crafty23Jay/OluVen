import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./ContactUs.css";
import loaderGif from "../assets/loader.gif";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <img src={loaderGif} alt="Loading..." className="loader-gif" />
      </div>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        className="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-overlay">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Contact Us
            </motion.h1>
            <p>We’d love to hear from you</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 Soap Street, Clean City, Earth</p>
            </div>
            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <p>info@soapbusiness.com</p>
            </div>
            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <p>info@soapbusiness.com</p>
            </div>
            <div className="info-box">
              <FaPhone className="info-icon" />
              <p>+123 456 7890</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </motion.form>
        </section>

        {/* <div style="width: 100vw; height: 400px; border: 0; border-radius: 10px; overflow: hidden; border: 1px solid red">
          <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=6.5244,3.3792&hl=es;z=14&output=embed">
          </iframe>
        </div> */}


      </motion.div>
      {/* <Footer /> */}
    </>
  );
}
