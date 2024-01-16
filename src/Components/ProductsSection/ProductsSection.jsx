/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import products_bg from "../../assets/Product-Section/Product-bg.png";
import {
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick/lib/slider";

// Slider Config
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
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
        slidesToScroll: 1,
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCars = () => {
    setLoading(true);
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleTrucks = () => {
    setLoading(true);
    fetch("http://localhost:5000/trucks")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleAirPlane = () => {
    setLoading(true);
    fetch("http://localhost:5000/airplane")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleBikes = () => {
    setLoading(true);
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

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
              <Tab
                onClick={handleCars}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Cars
              </Tab>
              <Tab
                onClick={handleTrucks}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Trucks
              </Tab>
              <Tab
                onClick={handleAirPlane}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Air Plane
              </Tab>
              <Tab
                onClick={handleBikes}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Bikes
              </Tab>
            </TabList>

            {/* Loading */}
            {loading ? (
              <div className="text-center mt-10">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </div>
            ) : (
              ""
            )}

            <TabPanels className="py-8">
              {/* Cars Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))}
                </Slider>
              </TabPanel>
              {/* Trucks Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))}
                </Slider>
              </TabPanel>
              {/* Air Plane Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))}
                </Slider>
              </TabPanel>
              {/* Bikes Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))}
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
