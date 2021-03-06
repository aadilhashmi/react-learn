import React from 'react';
import { SlickReducer } from "../../../State/Reducers/SlickReducer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SlickCarousel.css"


const SlickCarousel = () => {
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
      <div>
        <Slider {...settings}>
          {SlickReducer.Employe.map((slickData) => {
            return (
              <div>
                <img className="images" src={slickData.image} alt="error" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
};

export default SlickCarousel;