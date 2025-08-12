import React from "react";
import "./Loader.css";
import loaderGif from "../assets/loader.gif";

export default function Loader() {
  return (
    <div className="Loader" aria-hidden="false" role="status">
      <img src={loaderGif} alt="Loading..." />
    </div>
  );
}
