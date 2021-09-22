import React from "react";
import Marquee from "react-fast-marquee";
import "./Marque.css";

export const Marque = () => {
  return (
    <div className="text">
      <Marquee
        speed="200"
        gradient={false}
      >
        Intelizign Engineering Services
      </Marquee>
    
    </div>
  );
};
