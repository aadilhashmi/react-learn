import React from "react";
import "./overley.css";

export const Overley = () => {
  return (
    <>
      <div className="container">
        <img src="nskcet.jpg" className="image"></img>
        <div className="overlay"></div>
        <img className="image2" src="mech.jpg"></img>
        <div className="text">MECHANICAL ENGINEERING</div>
      </div>
    </>
  );
};
