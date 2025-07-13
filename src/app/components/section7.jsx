import React from "react";

export default function Section7() {
  return (
    <div className="w-full flex flex-wrap justify-around items-center px-4 gap-y-10 bg-[rgb(97,158,133)] py-10  *:flex *:justify-center *:flex-wrap">
      <div className="w-full md:w-1/3">
        <p className="text-white text-2xl w-full">
          Get Hands On With Avada Technology
        </p>
        <p className="text-white pt-3 font-reza">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur vulputate elit ac luctus.
        </p>
      </div>
      <div className=" w-full md:w-1/3">
        <button className="text-white py-5 cursor-pointer px-20 bg-[rgb(113,168,145)]">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
