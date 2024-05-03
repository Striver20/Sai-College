import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/MyCarousel.css";

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Optional: to show navigation arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className=" mt-24 mb-10 h-fit">
      <Slider {...settings}>
        <div className="slider">
          <img
            className="w-full h-full object-cover"
            src={require("../assets/Car1.avif")}
          />
        </div>
        <div className="slider">
          <img
            className="w-full h-full object-cover"
            src={require("../assets/Car2.avif")}
          />
        </div>
        <div className="slider">
          <img
            className="w-full h-full object-cover"
            src={require("../assets/Car3.avif")}
          />
        </div>
        <div className="slider">
          <img
            className="w-full h-full object-cover"
            src={require("../assets/Car4.avif")}
          />
        </div>
        <div className="slider">
          <img
            className="w-full h-full object-cover"
            src={require("../assets/Car5.avif")}
          />
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
};

export default MyCarousel;
