import React from "react";
import "./FecthingEmploye.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const FetchingEmployeChild = ({ EmpData }) => {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };
  return (
      <Slider {...settings}>
      <div>
      
        <img src={EmpData.image} alt="" width="200px" height="200px" />

        <h1>{EmpData.name}</h1>
    </div>
      </Slider>
  );
};

export default FetchingEmployeChild;
