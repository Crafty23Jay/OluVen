import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="Hero" aria-label="Hero">
      <div className="hero-inner">
        <motion.h1
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle}
        </motion.p>

        {ctaText && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {ctaLink ? (
              <Link to={ctaLink} className="hero-cta">
                {ctaText}
              </Link>
            ) : (
              <button className="hero-cta">{ctaText}</button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
