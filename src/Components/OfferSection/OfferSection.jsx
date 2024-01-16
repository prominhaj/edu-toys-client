/* eslint-disable no-unused-vars */
import React from "react";
import bg_img from "../../assets/Offer-Section-img/Offer-Bg.png";
import darry from "../../assets/Offer-Section-img/darry.png";
import born_Care from "../../assets/Offer-Section-img//baby-care.png";
import toddlers from "../../assets/Offer-Section-img/toddlers.png";
import toys_games from "../../assets/Offer-Section-img/toys-games.png";

const OfferSection = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url('${bg_img}')` }}>
      <div className="container mx-auto py-16 px-5">
        <h2 className="text-pink-600 text-center text-2xl font-bold font-['Nunito'] leading-tight">
          Our Offer
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 pt-8 items-center md:px-16">
          <div className="w-full">
            <img className="drop-shadow-2xl" src={darry} alt="" />
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="bg-orange-50 rounded-lg border-2 border-dashed border-amber-400 flex items-center flex-wrap gap-4 p-[33px]">
                <img src={born_Care} alt="" />
                <div>
                    <h4 className="text-amber-400 text-2xl font-bold font-['Nunito'] leading-tight">New Born & Baby Care Shop</h4>
                    <p className="text-neutral-400 text-sm font-semibold font-['Nunito'] mt-3 leading-tight">Mauris vitae erat non nisi consequat</p>
                </div>
            </div>
            <div className="bg-violet-50 rounded-lg border-2 border-dashed border-indigo-400 flex items-center flex-wrap gap-4 p-[33px]">
                <img src={toddlers} alt="" />
                <div>
                    <h4 className="text-indigo-400 text-2xl font-bold font-['Nunito'] leading-tight">New Born & Baby Care Shop</h4>
                    <p className="text-neutral-400 text-sm font-semibold font-['Nunito'] mt-3 leading-tight">Mauris vitae erat non nisi consequat</p>
                </div>
            </div>
            <div className="bg-slate-50 rounded-lg border-2 border-dashed border-teal-500 flex items-center flex-wrap gap-4 p-[33px]">
                <img src={toys_games} alt="" />
                <div>
                    <h4 className="text-teal-500 text-2xl font-bold font-['Nunito'] leading-tight">New Born & Baby Care Shop</h4>
                    <p className="text-neutral-400 text-sm font-semibold font-['Nunito'] mt-3 leading-tight">Mauris vitae erat non nisi consequat</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
