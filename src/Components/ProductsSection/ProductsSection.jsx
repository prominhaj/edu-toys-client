/* eslint-disable no-unused-vars */
import React from "react";
import products_bg from "../../assets/Product-Section/Product-bg.png";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick/lib/slider";

// Slider Config
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  appendDots: (dots) => (
    <div
      style={{
        bottom: "-60px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
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

const ProductsSection = () => {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${products_bg}')` }}
    >
      <div className="container mx-auto px-5 py-7">
        <div className="text-center">
          <h4 className="text-pink-600 text-base font-semibold font-['Inter'] leading-normal">
            Trending Products
          </h4>
          <h2 className="text-gray-900 text-4xl font-bold font-['Nunito'] leading-[44px] mt-[12px] mb-[20px]">
            Popular Product
          </h2>
          <p className="text-gray-500 text-lg font-normal font-['Inter'] leading-7">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>
        </div>
        <div className="py-5">
          <Tabs variant="soft-rounded">
            <TabList className="flex flex-wrap items-center !justify-center gap-5">
              <Tab _selected={{ color: "white", bg: "pink.500" }}>Cars</Tab>
              <Tab _selected={{ color: "white", bg: "pink.500" }}>Trucks</Tab>
              <Tab _selected={{ color: "white", bg: "pink.500" }}>
                Air Plane
              </Tab>
              <Tab _selected={{ color: "white", bg: "pink.500" }}>Bikes</Tab>
            </TabList>
            <TabPanels className="py-8">
              <TabPanel>
                <Slider {...settings}>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                </Slider>
              </TabPanel>
              <TabPanel>
                <Slider {...settings}>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                </Slider>
              </TabPanel>
              <TabPanel>
                <Slider {...settings}>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                </Slider>
              </TabPanel>
              <TabPanel>
                <Slider {...settings}>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                </Slider>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
