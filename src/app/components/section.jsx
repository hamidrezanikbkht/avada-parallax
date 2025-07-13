"use client";
import React, { useRef, useState } from "react";

export default function Section() {
  const tech = useRef();
  const tech2 = useRef();
  const tech3 = useRef();
  const tech4 = useRef();
  const [slaider, setSlaider] = useState(false);
  const cont = 40;
  const ereth = () => {
    setSlaider(true);
    tech.current.style.transform = "translateX(0)";
    tech2.current.style.transform = "translateX(0)";
    tech3.current.style.transform = "translateX(200px)";
    tech4.current.style.transform = "translateX(-200px)";
    tech.current.style.opacity = "1";
    tech2.current.style.opacity = "1";
    tech3.current.style.opacity = "0";
    tech4.current.style.opacity = "0";
  };
  const wifi = () => {
    setSlaider(false);
    tech.current.style.transform = "translateX(200px)";
    tech2.current.style.transform = "translateX(-200px)";
    tech3.current.style.transform = "translateX(0px)";
    tech4.current.style.transform = "translateX(0px)";
    tech.current.style.opacity = "1";
    tech2.current.style.opacity = "1";
    tech3.current.style.opacity = "1";
    tech4.current.style.opacity = "1";
  };
  return (
    <div className="w-full flex justify-center flex-wrap relative overflow-hidden ">
      <div className=" w-[45%] lg:w-[100%]  flex md:gap-2 lg:text-4xl xl:text-6xl xl:gap-4 flex-wrap justify-center  items-center text-2xl  py-18 ">
        <p className="font-medium text-[rgb(154,124,126)] font-reza">THE </p>
        <p className="text-[rgb(87,142,119)] font-bold ">FUTURE</p>
        <p className="text-[rgb(154,124,126)] font-reza">IS</p>
        <p className="text-[rgb(154,124,126)] font-reza"> HERE</p>
        <p className="text-[rgb(87,142,119)] font-bold ">AVADA</p>
        <p className="text-[rgb(154,124,126)] font-reza">TECHNOLOGY</p>
      </div>
      <div className="border-b-1 border-[rgb(224,224,224)]  w-[65%]"></div>
      <div className="w-[85%] flex justify-center text-center py-20 lg:text-2xl ">
        <p className="font-reza">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur vulputate elit ac luctus. Cras urna urna, eleifend mollis
          finibus in, efficitur feugiat leo. Morbi eleifend gravida iaculis
        </p>
      </div>
      <div className="xl:pt-[450px]">
        <span
          onClick={ereth}
          className={`
          w-10 h-10 xl:flex hidden z-40 cursor-pointer rounded-full absolute bottom-[53%] left-[38%]
          transition-all duration-700 ease-in-out
          ${
            slaider
              ? "bg-purple-600 scale-75 shadow-[0_0_20px_6px_rgba(147,51,234,0.6)] rotate-180"
              : "bg-red-600 scale-50"
          }
        `}
        ></span>
        <span
          onClick={wifi}
          className={`
          w-10 h-10 xl:flex hidden z-40 cursor-pointer rounded-full absolute bottom-[53%] right-[40%]
          transition-all duration-700 ease-in-out
          ${
            slaider
              ? "bg-red-600 scale-50"
              : "bg-purple-600 scale-75 shadow-[0_0_20px_6px_rgba(147,51,234,0.6)] rotate-180"
          }
        `}
        ></span>
        <div
          className={` transition-all duration-[1s] hidden xl:flex absolute ${
            slaider ? " bottom-[-100%] left-[8%]" : "bottom-0 left-[8%]"
          }    `}
        >
          <img src="/tech-world.png" alt="" />
          <div ref={tech3} className="absolute bottom-[19%] left-[18%]  transition-all duration-[1s] ">
            <img src="/01-tech-left.png" alt="" />
            <div className="absolute bottom-[80%] left-[-70%]  text-center  transition-all duration-[1s] "><p className="font-bold">vitury</p><p>Lorem ipsum dolor sit amet.</p></div>
          </div>
          <div ref={tech4} className="absolute bottom-[42%] right-[22%] transition-all duration-[1s]">
            <img src="/01-tech-right.png" alt="" />
            <div className="absolute bottom-[70%] right-[-70%]  text-center  transition-all duration-[1s] "><p className="font-bold">vitury</p><p>Lorem ipsum dolor sit amet.</p></div>
          </div>
        </div>
        <div
          className={` transition-all duration-[1s] hidden xl:flex absolute ${
            slaider ? " bottom-0 left-[8%]" : " bottom-[-100%] left-[8%]"
          }`}
        >
          <img src="/tech-vr-headset.png" alt="" />
          <div
            ref={tech}
            className={`absolute bottom-[19%] left-[18%] transition-all duration-[1s] `}
          >
            <img src="/01-tech-left.png" alt="" />
            <div className="absolute bottom-[80%] left-[-70%]  text-center  transition-all duration-[1s] "><p className="font-bold">vitury</p><p>Lorem ipsum dolor sit amet.</p></div>
          </div>
          <div ref={tech2} className="absolute bottom-[42%]   right-[22%] transition-all duration-[1s]">
            <img src="/01-tech-right.png" alt="" />
            <div className="absolute bottom-[69%] right-[-60%]  text-center  transition-all duration-[1s] "><p className="font-bold">vitury</p><p>Lorem ipsum dolor sit amet.</p></div>
          </div>
        </div>
        <div className="w-full flex overflow-hidden   ">
          {Array.from({ length: cont }).map((_, index) => {
            return (
              <img
                className="object-contain"
                key={index}
                src="/mesh_bg.png"
                alt={cont + "mesh_bg.png"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
