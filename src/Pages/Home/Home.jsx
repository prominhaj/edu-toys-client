/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Search from "../../Components/Search/Search";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import OfferSection from "../../Components/OfferSection/OfferSection";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Search></Search>
      <ProductsSection></ProductsSection>
      <OfferSection></OfferSection>
      <ImageSlider></ImageSlider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
