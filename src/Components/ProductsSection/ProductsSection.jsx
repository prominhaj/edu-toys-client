/* eslint-disable no-unused-vars */
import React from "react";
import products_bg from "../../assets/Product-Section/Product-bg.png";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const ProductsSection = () => {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${products_bg}')` }}
    >
      <div className="container mx-auto px-5 py-7">
        <div>
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
        <div className="flex justify-end">
          <Tabs
            variant="soft-rounded"
          >
            <TabList className="flex gap-5">
              <Tab _selected={{ color: "white", bg: "pink.500" }}>Cars</Tab>
              <Tab _selected={{ color: "white", bg: "pink.500" }}>Trucks</Tab>
              <Tab _selected={{ color: "white", bg: "pink.500" }}>Air Plane</Tab>
              <Tab _selected={{ color: "white", bg: "pink.500" }}>Bikes</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>Third!</p>
              </TabPanel>
              <TabPanel>
                <p>Four!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
