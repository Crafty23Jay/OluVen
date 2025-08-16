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
            <p>Crafting natural soaps for a better tomorrow</p>
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
              At Olu Ventures, we believe in the power of nature. Our journey
              began with a passion for crafting soaps that are pure, gentle, and
              environmentally friendly. Every bar we create is a result of
              careful selection of ingredients, ensuring your skin receives the
              best care.
            </p>
            <p>
              We are committed to sustainability, using eco-friendly packaging
              and supporting local suppliers. With each purchase, you’re not
              only caring for your skin but also contributing to a greener
              planet.
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
