"use client";
import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Ulsm from "./ulsm";

export default function Nav() {
  const [menuicon, setMenuicon] = useState(false);
  const list = useRef();
  const rotation = useRef(0);

  const click = () => {
    rotation.current += 360; // هر بار 360 درجه اضافه کن
    list.current.style.transform = `rotateZ(${rotation.current}deg)`;
    list.current.style.transition = "transform 0.5s ease";
    setMenuicon(!menuicon);
  };

  return (
    <div  className="w-full  flex flex-wrap items-center justify-around md:justify-between xl:justify-around md:px-4 bg-[rgb(87,142,119)] py-6 fixed top-0 left-0 z-50">
      {menuicon&&<Ulsm/>}
      <div className="w-[200px]">
        <img src="/logo-white.png" alt="logo" />
      </div>
      <div
        onClick={click}
        ref={list}
        className="cursor-pointer flex xl:hidden"
      >
        {menuicon ? (
            <>
          <ClearIcon sx={{ color: "white", fontSize: "40px" }} />
          </>
        ) : (
          <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
        )}
      </div>
        <ul className="hidden xl:flex gap-10 text-white  *:cursor-pointer">
        <li className="font-reza">HOME</li>
        <li className="font-reza">WHY US</li>
        <li className="font-reza">FEATURES</li>
        <li className="font-reza">TECHNOLOGY</li>
        <li className="font-reza">NEWS</li>
        <li className="font-reza">CONTACT</li>
        </ul>
    </div>
  );
}
