import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Home.css";
import loaderGif from "../assets/loader.gif";
import { Link } from "react-router-dom";

import { FaSoap } from "react-icons/fa6";
import { MdImportExport } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

import stab1 from "../assets/images/stab1.png";
import featureslid1 from "../assets/images/featureslid1.jpg";
import abright from "../assets/images/abright.png";


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
              Welcome to <span className="olu-txt">Olu Ventures</span> <br/> 
              <span className="n-l">Nigeria Limited</span>

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
            <FaSoap className="feature-icon" />
            <h3>SOAP PRODUCTION</h3>
            {/* <p>
              We use only the finest organic and natural ingredients to create
              our soaps.
            </p> */}
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <MdImportExport className="feature-icon" />
            <h3>IMPORTATION</h3>
            {/* <p>
              Each soap is handcrafted with care, ensuring consistent quality
              every time.
            </p> */}
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <IoAnalyticsOutline className="feature-icon" />
            <h3>SOURCING</h3>
            {/* <p>
              Our soaps are gentle, nourishing, and perfect for all skin types.
            </p> */}
          </motion.div>
          
          <motion.div
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <TbTruckDelivery className="feature-icon" />
            <h3>CHEAP DELIVERY</h3>
            {/* <p>
              Our soaps are gentle, nourishing, and perfect for all skin types.
            </p> */}
          </motion.div>

        </section>

        <main className="sec1-cont">
          <div className="left">
            <h3>ALL NATURAL BODY CARE PRODUCTS</h3>
            <p>Our mission is to be a leading soap manufacturer, using at least 85% raw 
              materials locally generated with the aim of producing high quality soaps at 
              reasonable price for the benefit of our customers.
            </p>
            <Link to="/our-products">
            <button className="view-btn">View Details</button>
            </Link>
          </div>

          <div className="right">
            <img src={stab1} className="right-img" alt="" />
          </div>
        </main>

        <section className="partners-sec">
          <h3>WHO ARE OUR PARTNERS?</h3>

          <main className="sec1-cont">
            <div className="right">
              <img src={featureslid1} className="right-img" alt="" />
            </div>

            <div className="left">
              <p>
                We have mutual partnerships with various chinese nationals and that keeps 
                us at the forefront of soap production in Nigeria by being dynamic in 
                production processes.
              </p>
            </div>
          </main>
        </section>

        <section className="partners-sec">
          <h3>PRODUCT FEATURES</h3>
          <main className="sec1-cont">
            <div className="left" id="feat-sec">

              <div className="left-cont">
                <div className="icon-cont">
                  <FaSoap className="feat-icon"/>
                </div>
                <div className="cont-cont">
                  <h4>BEAUTIFULLY PACKED</h4>
                  <p>Enjoy colorful and nice packagings that are perfect for gifts and occasions</p>
                </div>
              </div>

              <div className="left-cont">
                <div className="icon-cont">
                  <FaSoap className="feat-icon"/>
                </div>
                <div className="cont-cont">
                  <h4>HYPOALLERGENIC</h4>
                  <p>Only fresh, pure and organic materials are used to help you avoid allergy or side effect.</p>
                </div>
              </div>
              <div className="left-cont">
                <div className="icon-cont">
                  <FaSoap className="feat-icon"/>
                </div>
                <div className="cont-cont">
                  <h4>BONUS PROGRAM</h4>
                  <p>Our regular customers receives pleasant bonuses upon further purchases.</p>
                </div>
              </div>
            </div>

            <div className="features-cont">
              <img className="features-img"  src={abright} alt="Factory-Machine-img" />
            </div>
          </main>
        </section>

      </motion.div>
      {/* <Footer /> */}
    </>
  );
}
