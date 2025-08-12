import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Home.css";
import loaderGif from "../assets/loader.gif";
import { FaLeaf, FaSoap, FaHandHoldingWater } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
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
        className="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay" >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to Olu Ventures <br />Nigeria Limited

            </motion.h1 >
            <p >Everything We Do is for You...</p>
            <Link to='/about-us'>
            <motion.button
              className="cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know More
            </motion.button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <motion.div
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaLeaf className="feature-icon" />
            <h3>Natural Ingredients</h3>
            <p>
              We use only the finest organic and natural ingredients to create
              our soaps.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaSoap className="feature-icon" />
            <h3>Handmade Quality</h3>
            <p>
              Each soap is handcrafted with care, ensuring consistent quality
              every time.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaHandHoldingWater className="feature-icon" />
            <h3>Gentle on Skin</h3>
            <p>
              Our soaps are gentle, nourishing, and perfect for all skin types.
            </p>
          </motion.div>
        </section>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
}
