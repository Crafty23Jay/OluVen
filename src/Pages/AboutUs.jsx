import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./AboutUs.css";
import loaderGif from "../assets/loader.gif";
import Hon_j from "../assets/images/hon_j.jpg";

export default function AboutUs() {
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
        className="aboutus-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="aboutus-hero">
          <div className="aboutus-overlay">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              About Us
            </motion.h1>
            <p>Discover the inspiring story behind our soaps, the passion that drives 
              us, and our commitment to quality and sustainability.</p>
          </div>
        </section>

        {/* About Content */}
        <section className="aboutus-content">
          <motion.div
            className="aboutus-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2>Our Story</h2>
            <p>
              At Olu Ventures, we believe true skincare starts with nature. What 
              began as a passion for making gentle soaps has grown into a mission 
              to provide families with safe, eco-friendly alternatives for everyday care.
            </p>
            <p>
              Each bar is handcrafted with natural oils, herbs, and vitamins—like aloe 
              vera, turmeric, and shea butter—chosen to keep your skin healthy and radiant.
               We also support local farmers and use biodegradable packaging, ensuring our 
               products are as kind to the planet as they are to your skin.
            </p>
            <p>
              With every purchase, you join us in creating a world where self-care, 
              community, and sustainability go hand in hand.
            </p>
          </motion.div>

          <motion.div
            className="aboutus-image-cont"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="image-cont">
              <img
              className="hon-img"
              src={Hon_j}
              alt="About Olu Ventures"
              loading="lazy"
            />
            </div>
            <h4>OWNER/MD, OLU VENTURES NIGERIA LIMITED</h4>
            <p>HON. JOHNSON OLU FATOKI</p>
          </motion.div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
