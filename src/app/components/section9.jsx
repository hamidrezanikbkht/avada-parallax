'use client'
import React from "react";
import { useState, useEffect, useRef } from "react";
export default function Section9() {
      const [data,setdata]=useState(false)
      const yes=useRef(null)
    useEffect(() => {
      const eh = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setdata(false); // ریست انیمیشن
            setTimeout(() => setdata(true), 10); // دوباره اجرا بشه
            console.log("Triggered");
          }
        },
        { threshold: 0 }
      );
    
      if (yes.current) {
        eh.observe(yes.current);
      }
    
      return () => {
        if (yes.current) {
          eh.unobserve(yes.current);
        }
      };
    }, []);
  return (
    <div className="w-full flex flex-wrap justify-center pb-20 bg-[rgb(97,158,133)]">
      <div className="  w-full ">
        <img className="h-6 object-cover" src="/blog-line.png" alt="" />
      </div>
      <div className=" w-full flex flex-wrap justify-center">
        <div className="w-full  text-center py-10 md:flex md:justify-center md:gap-2 lg:*:text-4xl ">
          <p className="text-2xl text-white">CONTACT </p>
          <span className="font-bold text-white text-2xl">VIRTUAL REALITY</span>
          <p className="text-2xl text-white">TODAY</p>
        </div>
        <div className="w-full  py-5 flex justify-center">
          {" "}
          <span className="w-[15%] border-b-1 border-[rgb(55,101,82)] px-8"></span>
        </div>{" "}
        <div className="w-[75%] flex justify-center md:w-[90%]">
          <p className="text-white text-center text-xl py-10 font-reza">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur vulputate elit ac luctus. Cras urna urna, eleifend
            mollis finibus in, efficitur feugiat leo. Morbi eleifend gravida
            iaculis ets ipsums dolores.
          </p>
        </div>
        <div ref={yes}  className="w-[80%] md:w-[70%] lg:w-[50%] border   border-[rgb(118,170,149)]">
          <div
            className={` w-full h-full bg-[rgb(247,247,247)] py-20 flex flex-wrap justify-center ${data?'animate-clipy2':''} `}
            
          >
            <div className="w-full  py-16"></div>
            <div className=" w-full flex flex-wrap justify-center ">
              <div className="w-[80%]">
                <div className="py-3 text-[rgb(69,73,89)]">Your name</div>{" "}
                <input
                  className="w-[90%] border border-[rgb(221,221,221)]"
                  id="ss"
                  type="text"
                />
              </div>
              <div className="w-[80%]">
                <div className="py-3 text-[rgb(69,73,89)]">Your gmail</div>
                <input
                  className="w-[90%] border border-[rgb(221,221,221)]"
                  id="ss"
                  type="text"
                />
              </div>
              <div className="w-[80%] ">
                <div className="py-3 text-[rgb(69,73,89)]"> masege</div>
                <input
                  className="w-[90%] border py-20 border-[rgb(221,221,221)]"
                  id="ss"
                  type="text"
                />
              </div>
              <div className="w-[80%] py-5 bg-[rgb(113,168,145)] flex justify-center text-2xl mt-10 text-white">
                    Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
