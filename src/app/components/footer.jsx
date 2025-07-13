import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-wrap ">
      <div className=" w-full flex flex-wrap justify-center md:w-1/2 py-32 bg-[rgb(87,142,119)]">
        <p className="w-[90%] font-reza  text-center py-4 lg:text-2xl text-white">
          For privacy reasons Google Maps needs your permission to be loaded.
        </p>
        <button className="w-[90%] py-5 border bg-[rgb(113,168,145)] text-white">
          I Accept
        </button>{" "}
      </div>
      <div className="w-full md:w-1/2 py-32 bg-[rgb(97,158,133)]">
        <div className="ml-[20%]">
          <span className="font-bold text-white ">Avada </span>
          <span className="text-white">HQ</span>
        </div>
        <span className="ml-[20%] px-5 border-white border-b-1"></span>
        <p className="ml-[20%] text-white py-1 font-reza">12345 North Main Street,</p>
        <p className="ml-[20%] text-white py-1 font-reza ">New York, NY 555555</p>
        <p className="ml-[20%] text-white py-1  font-reza">Phone: 0912_0648589</p>
        <p className="ml-[20%] text-white py-2  font-reza">Email: hamidrezanikbakht21@gmail.com</p>
    
      </div>
    </div>
  );
}
