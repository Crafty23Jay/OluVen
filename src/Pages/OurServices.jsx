import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./OurServices.css";
import loaderGif from "../assets/loader.gif";
import { FaLeaf, FaSpa, FaSoap, FaHandsHelping } from "react-icons/fa";

export default function OurServices() {
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

  const services = [
    {
      id: 1,
      title: "Custom Soap Orders",
      desc: "Get handmade soaps tailored to your preferred scent, shape, and skin type.",
      icon: <FaSoap />
    },
    {
      id: 2,
      title: "Spa & Wellness Supplies",
      desc: "Providing natural soaps for spas, hotels, and wellness centers.",
      icon: <FaSpa />
    },
    {
      id: 3,
      title: "Eco-Friendly Packaging",
      desc: "All products are packaged using biodegradable and eco-conscious materials.",
      icon: <FaLeaf />
    },
    {
      id: 4,
      title: "Workshops & Training",
      desc: "Hands-on training sessions for those who want to learn soap-making.",
      icon: <FaHandsHelping />
    }
  ];

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        className="services-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-overlay">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our Services
            </motion.h1>
            <p>Quality care and personalized soap solutions</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </section>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
}
