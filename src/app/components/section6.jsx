"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section6() {
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
    <div className="bg-white w-full flex flex-wrap justify-center bg-cover pt-10">
      <figure ref={g} className="w-[90%] flex justify-center xl:w-1/2">
        <img
          src="/Avada-VR-man2b.jpg"
          alt=""
          style={{
            transform: parallax ? "translateX(0)" : "translateX(-150%)",
            transition: "transform 1s ease",
          }}
        />
      </figure>

      {/* ادامه متن‌ها */}
      <div className="w-full xl:w-1/2 py-4 flex justify-center flex-wrap gap-y-10 overflow-hidden">
        <div
          className="w-[80%] flex justify-center content-center flex-wrap  *:m-0"
          style={{
            transform: parallax ? "translateX(0)" : "translateX(150%)",
            transition: "transform 1s ease",
          }}
        >
          <p className="w-[80%] text-2xl">Tomorrow’s Technology, Today.</p>
          <span className="w-[80%] border-b-1 border-[rgb(224,224,224)] py-2"></span>
          <p className="pt-4 w-[80%] font-reza">
            Massa erat pretium arcu, nec eleifend. Nullam lorem enim, faucibus a
            turpis eu luctus. Aenean sit amet lobortis metus. In tempor dui et
            hendrerit. Nullam lorem enim, faucibus a turpis eu luctus.{" "}
          </p>
        </div>

        <div
          className="w-[80%] flex justify-start content-center flex-wrap  *:m-0"
          style={{
            transform: parallax ? "translateX(0)" : "translateX(150%)",
            transition: "transform 1s ease",
          }}
        >
          <img src="/Avada-VR.png" alt="" />
        </div>
      </div>
    </div>
  );
}
