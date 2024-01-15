/* eslint-disable no-unused-vars */
import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="container px-5 mx-auto py-10">
      <form className="lg:w-3/4 mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-5 p-[22px] bg-pink-600 rounded-[51px] shadow">
          <div className="flex items-center justify-center lg:justify-start gap-5">
            <button type="submit" className="bg-[#FAE527] rounded-full p-3">
              <CiSearch className="w-[42px] h-[42px]" />
            </button>
            <h4 className="text-white text-[32px] font-semibold font-['Nunito'] leading-normal">
              Find your product
            </h4>
          </div>
          <input
            className="bg-white rounded-[29px] text-stone-600 text-2xl font-semibold font-['Nunito'] leading-normal outline-none py-2 h-[58px] w-full px-4"
            type="text"
            placeholder="Search"
            id="search"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
