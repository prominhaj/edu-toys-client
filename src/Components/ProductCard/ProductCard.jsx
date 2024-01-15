/* eslint-disable no-unused-vars */
import React from "react";
import card from "../../assets/Card/card.png";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg border mx-[10px] border-stone-300">
      <div className="px-8 py-4">
        <img className="w-full" src={card} alt="" />
      </div>
      <footer className="bg-[#FAF5F9] rounded-lg border border-stone-300 py-[15px] px-[30px] flex flex-col gap-5">
        <h2 className="text-black text-lg font-medium font-['Inter'] leading-tight">
          Pirate Barrel Games
        </h2>
        <div className="flex items-center justify-between">
          <h4 className="text-pink-600 text-xl font-bold font-['Inter'] leading-tight">
            $25
          </h4>
          <button className="bg-pink-600 text-white text-base font-medium font-['Inter'] leading-normal rounded-md px-3 lg:px-5 py-2">Details</button>
        </div>
      </footer>
    </div>
  );
};

export default ProductCard;
