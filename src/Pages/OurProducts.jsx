import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./OurProducts.css";
import loaderGif from "../assets/loader.gif";

export default function OurProducts() {
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

  const products = [
    {
      id: 1,
      name: "Lavender Bliss",
      price: "$8.99",
      image: "../assets/images/lavender.jpg",
      desc: "Soothing lavender scent for relaxation."
    },
    {
      id: 2,
      name: "Citrus Fresh",
      price: "$7.99",
      image: "../assets/images/citrus.jpg",
      desc: "Refreshing citrus aroma to awaken your senses."
    },
    {
      id: 3,
      name: "Herbal Care",
      price: "$9.50",
      image: "../assets/images/herbal.jpg",
      desc: "Infused with natural herbs for deep skin nourishment."
    },
    {
      id: 4,
      name: "Honey Glow",
      price: "$10.00",
      image: "../assets/images/honey.jpg",
      desc: "Sweet honey soap for glowing, hydrated skin."
    }
  ];

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        className="products-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="products-hero">
          <div className="products-overlay">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our Products
            </motion.h1>
            <p>Handcrafted soaps made with love</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid">
          {products.map((product, index) => (
            <motion.div
              className="product-card"
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <span className="product-price">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
}
