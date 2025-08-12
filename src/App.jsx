import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurProducts from "./Pages/OurProducts";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-products" element={<OurProducts />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
