import React, { useEffect, useRef, useState } from "react";

export default function Section4() {
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
    <div className="w-full bg-[#5f9f85] flex flex-wrap justify-center ">
      <div className="w-[60%]  flex justify-center text-center  -tracking-tighter py-20 md:w-[70%] md:text-4xl">
        <p className="text-white font-reza">
          CUTTING-EDGE{" "}
          <span className="font-bold text-white">VIRTUAL REALITY </span>FEATURES
        </p>
      </div>
      <span className="w-[70%] border-b-1 "></span>
      <div className="w-[85%] flex justify-center text-center  lg:text-2xl py-20">
        <p className="text-white font-reza">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur vulputate elit ac luctus. Cras urna urna, eleifend mollis
          finibus in, efficitur feugiat leo. Morbi eleifend gravida iaculis.
        </p>
      </div>
      <div className="w-[90%] flex flex-wrap justify-center md:gap-10 lg:gap-20 ">
        <div className="w-[85%] md:w-1/4  flex flex-wrap justify-center py-5">
          <img src="/tech-icon-2.png" alt="" />
          <p className="w-full flex justify-center py-10 text-white">
            Innovative
          </p>
          <p className="text-center font-reza py-10 px-16 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur vulputate elit ac luctus.
          </p>
          <button className="px-10 py-2  cursor-pointer bg-[rgb(113,168,145)] text-white">
            READ MORE
          </button>
        </div>
<div 
  ref={yes} 
  className={`w-[85%] md:w-1/4 flex flex-wrap justify-center bg-[rgb(141,185,167)] py-5 ${data ? 'animate-clipy' : ''}`}
>          <img src="/tech-icon-3.png" alt="" />
          <p className="w-full flex justify-center py-10 text-white">
            Desirable
          </p>
          <p className="text-center py-10 px-16 text-white font-reza">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur vulputate elit ac luctus.
          </p>
          <button className="px-10 py-2 cursor-pointer  bg-[rgb(113,168,145)] text-white">
            READ MORE
          </button>
        </div>
        <div className="w-[85%] md:w-1/4  flex flex-wrap justify-center py-5">
          <img src="/tech-icon-1.png" alt="" />
          <p className="w-full flex justify-center py-10 text-white">
            Intelligent
          </p>
          <p className="text-center py-10 px-16 text-white font-reza">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur vulputate elit ac luctus.
          </p>
          <button className="px-10 py-2 cursor-pointer bg-[rgb(113,168,145)] text-white">
            READ MORE
          </button>
        </div>{" "}
      </div>
      <div className=" w-full pt-20 bg-[#5f9f85]">
        <img src="/tech-features-bg.png" alt="" />
      </div>{" "}
    </div>
  );
}
