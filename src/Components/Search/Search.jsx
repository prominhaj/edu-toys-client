/* eslint-disable no-unused-vars */
import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="container mx-auto px-5 xl:w-1/2 py-10">
      <div className="flex flex-wrap items-center justify-center gap-6 p-[22px] bg-pink-600 rounded-[51px] shadow">
        <label htmlFor="search" className="bg-[#FAE527] rounded-full p-3">
          <CiSearch className="w-[42px] h-[42px]" />
        </label>
        <h4 className="text-white text-[32px] font-semibold font-['Nunito'] leading-normal">Find your product</h4>
        <input className="bg-white rounded-[29px] text-stone-600 text-2xl font-semibold font-['Nunito'] leading-normal outline-none py-2 px-4" type="text" placeholder="Search" id="search" />
      </div>
    </div>
  );
};

export default Search;
