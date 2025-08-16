import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./OurProducts.css";
import loaderGif from "../assets/loader.gif";

import soap1 from "../assets/soaps/kerro_soap.jpg";
import soap2 from "../assets/soaps/de_reel.jpg"
import soap3 from "../assets/soaps/de_reel_2.jpg"
import soap4 from "../assets/soaps/hotel_soap.jpg"
import soap5 from "../assets/soaps/de_reel_3.jpg"
import soap6 from "../assets/soaps/kerro_cool.jpg"
import soap7 from "../assets/soaps/olu_quality.jpg"


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
      name: 'KERRO ANTISEPTIC SOAP',
      description: 'A skin-friendly therapeutic herb supplement for healing and smoothing the skin. Complete antidote for acne, blemish, and wrinkles.',
      image: soap1
    },
    {
      id: 2,
      name: 'DE-REEL ANTISEPTIC SOAP',
      description: 'An antiseptic soap made from pure natural ingredients and enriched with antioxidant properties.',
      image: soap2
    },
    {
      id: 3,
      name: 'DE-REEL MULTIPURPOSE SOAP',
      description: 'A multipurpose soap rich in fragrance with citron flavor; can serve as either bathing or laundry soap.',
      image: soap3
    },
    {
      id: 4,
      name: 'HOTEL SOAP',
      description: 'Custom-made small sized soaps tailored for hospitality businesses and their guests.',
      image: soap4
    },
    {
      id: 5,
      name: 'DE-REEL MULTIPURPOSE SOAP',
      description: 'Is a bar multipurpose soap, gentle on the skin and not harsh on clothes when used for laundry purposes.',
      image: soap5
    },
    {
      id: 6,
      name: 'KERRO COOL SOAP',
      description: "A bathing soap rich in fragrance and cool on the skin, It's a complete skin rejuvinating soap.",
      image: soap6
    },
    {
      id: 7,
      name: 'OLU QUALITY SOAP',
      description: 'A multipurpose soap that can be used both for laundry and bathing purposes',
      image: soap7
    },
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
        <section className="soap-products">
          <div className="soap-container">
            <h2 className="soap-heading">Our Premium Soap Collection</h2>
            <p className="soap-subtitle">Natural ingredients for healthy, beautiful skin</p>
            
            <div className="products-grid">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-image"
                      loading="lazy"
                    />
                    {/* <div className="product-badge">New</div> */}
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-actions">
                      {/* <button className="product-button">
                        View Details
                        <span className="button-icon">→</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
