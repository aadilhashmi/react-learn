import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PlacementReducer } from "../../States/Reducers/PlacementRedeucer";
import "./PlacementCarasoul.css";

const PlacementCarasoul = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider className="place" {...settings}>
        {PlacementReducer.Placement.map((PlacementData) => {
          return (
            <div>
              <img className="Img" src={PlacementData.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PlacementCarasoul;
