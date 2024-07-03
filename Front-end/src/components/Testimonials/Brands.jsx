import React from "react";
import brand1 from "@/assets/image/brands/1.png";
import brand2 from "@/assets/image/brands/2.png";
import brand3 from "@/assets/image/brands/3.png";
import brand4 from "@/assets/image/brands/4.png";
import brand5 from "@/assets/image/brands/5.png";
import brand6 from "@/assets/image/brands/6.png";

const Brands = () => {
  return (
    <div className="px-20 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center mx-auto">
        <div className="border border-[#959595] hover:border-[#373282]">
          <img src={brand1} alt="" />
        </div>
        <div className="border border-[#959595] hover:border-[#373282]">
          <img src={brand2} alt="" />
        </div>
        <div className="border border-[#959595] hover:border-[#373282]">
          <img src={brand3} alt="" />
        </div>
        <div className="border border-[#959595] hover:border-[#373282]">
          <img src={brand4} alt="" />
        </div>
        <div className="border border-[#959595] hover:border-[#373282]">
          <img src={brand5} alt="" />
        </div>
        <div className="border border-[#959595] hover:border-[#373282]">
          <img src={brand6} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Brands;
