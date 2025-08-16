import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./OurServices.css";
import loaderGif from "../assets/loader.gif";

import { FaSoap } from "react-icons/fa6";
import { MdImportExport } from "react-icons/md";
import { TbTournament } from "react-icons/tb";
import { MdOutlineModelTraining } from "react-icons/md";

import img1 from "../assets/images/machine1.jpg";
import img2 from "../assets/images/machine2.jpg";
import img3 from "../assets/images/machine3.jpg";
import img4 from "../assets/images/machine4.jpg";
import img5 from "../assets/images/machine5.jpg";
import img6 from "../assets/images/machine6.jpg";
import img7 from "../assets/images/machine7.jpg";
import img8 from "../assets/images/machine8.jpg";

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
      title: "Soap Production:",
      desc: " We proud ourselves for the production of the most cost-effective range of soaps; bathing soaps, laundry soaps and multipurpose soaps. We make the best quality soap.",
      icon: <FaSoap />
    },
    {
      id: 2,
      title: "Importation:",
      desc: "Importation of various production machineries, e.g. Soap Production, Sealing Machine, Packaging Machine, Bottling Machine, Wrapping Machine etc",
      icon: <MdImportExport />
    },
    {
      id: 3,
      title: "Tourism:",
      desc: "Providing an easy, smooth and hitch-free travel arrangements to China and its environs, either for business or leisure. You will be placed in good hands and a good hospitality is guanranteed.",
      icon: <TbTournament />
    },
    {
      id: 4,
      title: "Workshops & Training",
      desc: "We offer hands-on training sessions to help you confidently learn and master the art of soap-making. Each workshop is packed with tips, techniques, and creative inspiration.",
      icon: <MdOutlineModelTraining />
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


        <section className="prod-sec">
          <main className="prod-cont">
            <div className="image-img">
              <img className="p-img" src={img1} alt="Production Img" />
            </div>
            <div className="image-img">
              <img className="p-img" src={img2} alt="Production Img" />
            </div>
            <div className="image-img">
              <img className="p-img" src={img3} alt="Production Img" />
            </div>

            <div className="image-img">
              <img className="p-img" src={img4} alt="Production Img" />
            </div>
            <div className="image-img">
              <img className="p-img" src={img5} alt="Production Img" />
            </div>
            <div className="image-img">
              <img className="p-img" src={img6} alt="Production Img" />
            </div>

            <div className="image-img">
              <img className="p-img" src={img7} alt="Production Img" />
            </div>
            <div className="image-img">
              <img className="p-img" src={img8} alt="Production Img" />
            </div>
          </main>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
