"use client";
import React, { useState } from "react";

export default function Section8() {
  const [active, setActive] = useState("a");

  return (
    <div className="w-full flex flex-wrap justify-center bg-[#f0f0f0] py-20">
      <div className="w-full flex flex-wrap justify-center  m-0">
        <div className="w-[90%]  lg:w-[60%] flex justify-center flex-wrap relative  *:py-5 ">
          
          {/* دکمه‌ها */}
          <span
            onClick={() => setActive("a")}
            className={`text-white cursor-pointer  px-6 py-2 rounded my-2 ${
              active === "a" ? "bg-[#619e85]" : "bg-[#4f826d]"
            }`}
          >
            Supertechnologies
          </span>
          <span
            onClick={() => setActive("b")}
            className={`text-white cursor-pointer px-6 py-2  rounded mx-2 my-2 ${
              active === "b" ? "bg-[#619e85]" : "bg-[#4f826d]"
            }`}
          >
            Multisensory
          </span>
          <span
            onClick={() => setActive("c")}
            className={`text-white cursor-pointer px-6 py-2  rounded my-2 ${
              active === "c" ? "bg-[#619e85]" : "bg-[#4f826d]"
            }`}
          >
            Cybercultural
          </span>

          {/* متن توضیحی */}
          <div className="mt-6">
            <p className="text-black  text-center lg:px-10 font-reza">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              finibus lorem dui, a gravida justo porttitor tincidunt. Quisque
              rhoncus feugiat massa et congue. Nulla libero sapien, egestas sed
              ante vel, posuere pretium risus. Curabitur urna arcu, hendrerit ac
              augue nec, consequat tincidunt lorem. Nulla facilisi.
            </p>
          </div>

          {/* عکس‌ها */}
          <div className="relative w-full h-[300px] mt-10 overflow-hidden flex justify-center items-end">
            <img
              src="/tech-head-left.png"
              alt=""
              className={`absolute bottom-0 w-[250px] max-w-full transition-opacity duration-1000 ${
                active === "a" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/tech-head-center.png"
              alt=""
              className={`absolute bottom-0 w-[250px] max-w-full transition-opacity duration-1000 ${
                active === "b" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/tech-head-right.png"
              alt=""
              className={`absolute bottom-0 w-[250px] max-w-full transition-opacity duration-1000 ${
                active === "c" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
