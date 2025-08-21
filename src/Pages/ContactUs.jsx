import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./ContactUs.css";
import loaderGif from "../assets/loader.gif";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { RiTimerFlashFill } from "react-icons/ri";
import MapComponent from "../Components/MapComponent";


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
            <p>
              We’d love to hear from you—reach out with your questions, feedback, or orders, and 
              our team will be glad to assist.
            </p>
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
              <FaMapLocationDot className="info-icon" />
              <p>No, 5 Unity Estate Road Lafenwa-Ayetoro Road, Abeokuta Ogun State.</p>
            </div>
            <div className="info-box">
              <IoIosMailUnread className="info-icon" />
              <p>oluventuresltd@yahoo.com</p>
            </div>
            <div className="info-box">
              <BiSolidContact className="info-icon" />
              <p>+234(0)813-192-4356 , +234(0)706-129-5923</p>
            </div>
            <div className="info-box">
              <RiTimerFlashFill className="info-icon" />
              <p>Mon - Sat: 08:00 Am - 07:00 Pm</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="input-row-cont">
              <div className="input-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="input-row">
                <input type="email" placeholder="E-mail" required />
                <input type="text" placeholder="Subject" required />
              </div>
            </div>
            <textarea placeholder="Your Message" rows="8" required></textarea>
            <button type="submit">Send Message</button>
          </motion.form>
        </section>

        <main className="facty-sec">
          <div className="facty-img"></div>
        </main>



        <div className="map-cont">
          {/* <MapComponent /> */}

          {/* <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=6.5244,3.3792&hl=es;z=14&output=embed">
          </iframe> */}

            

        </div>


      </motion.div>
      <Footer />
    </>
  );
}
