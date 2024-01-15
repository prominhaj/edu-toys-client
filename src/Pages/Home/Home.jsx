/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Search from '../../Components/Search/Search';
import ProductsSection from '../../Components/ProductsSection/ProductsSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Search></Search>
            <ProductsSection></ProductsSection>
        </div>
    );
};

export default Home;