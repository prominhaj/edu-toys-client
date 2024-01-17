/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Search from "../../Components/Search/Search";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import OfferSection from "../../Components/OfferSection/OfferSection";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Footer from "../Shared/Footer/Footer";
import { userContext } from "../../AuthContext/AuthContext";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const { user, authLoading } = useContext(userContext);

  if (authLoading) {
    return (
      <div className="text-center mt-4">
        <Spinner color="red.500" />
      </div>
    );
  }
  return (
    <>
      <HeroSection></HeroSection>
      <Search></Search>
      <ProductsSection></ProductsSection>
      <OfferSection></OfferSection>
      <ImageSlider></ImageSlider>
      <Footer></Footer>
    </>
  );
};

export default Home;
