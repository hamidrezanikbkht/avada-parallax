import React from "react";

export default function NameBanner() {
  return (
    <div className="w-full bg-[rgb(97,158,133)] py-24 flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-white text-lg md:text-xl tracking-widest uppercase mb-3">
          Programmer & Developer
        </h2>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
          Hamidreza Nikbakht
        </h1>
        <div className="mt-4 w-20 h-1 mx-auto bg-white/80 rounded-full"></div>
      </div>
    </div>
  );
}
