/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick/lib/slider";
import ImageSliderItem from "../ImageSliderItem/ImageSliderItem";

// Slider Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ImageSlider = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <Slider {...settings}>
            <ImageSliderItem></ImageSliderItem>
            <ImageSliderItem></ImageSliderItem>
            <ImageSliderItem></ImageSliderItem>
            <ImageSliderItem></ImageSliderItem>
            <ImageSliderItem></ImageSliderItem>
            <ImageSliderItem></ImageSliderItem>
      </Slider>
    </div>
  );
};

export default ImageSlider;
