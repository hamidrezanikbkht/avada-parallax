"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section3() {
  const [parallax, setParallax] = useState(false);
  const g = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setParallax(true); // وقتی وارد دید شد
        } else {
          setParallax(false); // وقتی از دید خارج شد
        }
      },
      { threshold: 0.1 }
    );

    if (g.current) {
      observer.observe(g.current);
    }

    return () => {
      if (g.current) {
        observer.unobserve(g.current);
      }
    };
  }, []);

  return (
    <div
      className="bg-[#f0f0f0] w-full flex flex-wrap justify-center bg-cover"
      style={{
        backgroundImage: "url(/tech-why-bg.png)",
        transition: "background-position 1s ease",
      }}
    >
      <figure ref={g} className="w-[90%] flex justify-center xl:w-1/2">
        <img
          src="/Avada-VR-man1.png"
          alt=""
          style={{
            transform: parallax ? "translateX(0)" : "translateX(-150%)",
            transition: "transform 1s ease",
          }}
        />
      </figure>

      {/* ادامه متن‌ها */}
      <div className="w-full xl:w-1/2 py-4 flex justify-center flex-wrap gap-y-16 overflow-hidden">
        <div
          className="w-[80%] flex justify-center content-center flex-wrap *:m-0"
          style={{
            transform: parallax ? "translateX(0)" : "translateX(150%)",
            transition: "transform 1s ease",
          }}
        >
          <p className="w-[80%] text-2xl">Industrial Arts & Magic</p>
          <p className="pt-4 w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div
          className="w-[80%] bg-[rgb(97,158,133)] py-4 flex justify-center content-center flex-wrap *:m-0"
          style={{
            transform: parallax ? "translateX(0)" : "translateX(-150%)",
            transition: "transform 1s ease",
          }}
        >
          <p className="w-[80%] text-white text-2xl">Smart Tech</p>
          <p className="pt-4 text-white w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div
          className="w-[80%] flex justify-center content-center flex-wrap *:m-0"
          style={{
            transform: parallax ? "translateX(0)" : "translateX(150%)",
            transition: "transform 1s ease",
          }}
        >
          <p className="w-[80%] text-2xl">Applied Science</p>
          <p className="pt-4 pb-20 w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
