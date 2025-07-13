import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Section10() {
  return (
    <div className="w-full flex justify-center  flex-wrap py-16 bg-[rgb(110,166,142)]">
      <div className="w-[90%] flex flex-wrap justify-center   lg:w-1/2">
        <p className="text-white  py-2 text-3xl">Follow VR On Social Media</p>
        <p className="text-white  py-2 text-1xl font-reza">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="w-full flex flex-wrap py-4 justify-center  items-center gap-8 lg:w-1/2">
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-[rgb(255,255,255)]"><InstagramIcon sx={{fontSize:'50px', color:'rgb(97,158,133)'}}/></div>
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-[rgb(255,255,255)]"><FacebookIcon sx={{fontSize:'50px', color:'rgb(97,158,133)'}}/></div>
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-[rgb(255,255,255)]"><LinkedInIcon sx={{fontSize:'50px', color:'rgb(97,158,133)'}}/></div>
      </div>
    </div>
  );
}
