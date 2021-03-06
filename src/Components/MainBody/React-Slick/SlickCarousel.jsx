import React from 'react';
import { SlickReducer } from "../../../State/Reducers/SlickReducer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SlickCarousel.css"


const SlickCarousel = () => {
        const settings = {
          dots: true,
          lazyLoad: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        };

    return (
      <div className="slider">
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