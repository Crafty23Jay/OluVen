import React from "react";
import "./Certificate.css";
import certificate from "../assets/news/certificate.jpg";
import { useState } from "react";

const Certificate = () => {

    const [expanded, setExpanded] = useState(false);

  return (
    <section className="certificate-section">
        <h2>Our Legal Registration</h2>

        <p className="intro-text">
            At <strong>Olu Ventures Nigeria Limited</strong>, we believe in
            transparency and credibility. We are proudly incorporated under the{" "}
            <strong>Companies and Allied Matters Act (CAMA), 1990</strong> with the
            Corporate Affairs Commission of Nigeria.
        </p>

        <div
            className={`certificate-box ${expanded ? "expanded" : ""}`}
            onClick={() => setExpanded(!expanded)}
        >
            <img src={certificate} alt="Certificate of Incorporation" />
            <div className="overlay"></div>
        </div>

        <p className="certificate-details">
            <em>Registered Name:</em> OLU VENTURES NIGERIA LIMITED <br />
            <em>Incorporated:</em> 1st November, 2007 <br />
            <em>Registration Number (RC):</em> 141124
        </p>
    </section>
  );
};

export default Certificate;
