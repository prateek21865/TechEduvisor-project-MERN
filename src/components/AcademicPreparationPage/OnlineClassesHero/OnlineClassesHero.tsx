import React from 'react';

const OnlineClassHero: React.FC = () => {
  return (
    <div className="w-full h-[450px] md:min-h-[70vh] relative overflow-hidden bg-[#007AFC] mt-[2rem]">
      <div 
        className="absolute inset-0 bg-cover md:bg-contain bg-no-repeat md:bg-center md:right-[220px]"
        style={{backgroundImage: "url('use.png')"}}
      ></div>
      
      
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
     
      <div className="relative h-full flex items-center">
        <div className="hidden md:block w-1/2"></div>
        <div className="w-full md:w-1/2 px-4 md:px-0 md:pr-[23rem] text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">LIVE Online Classes</h1>
          <h2 className="text-xl md:text-2xl mb-4">For IIT JEE + CBSE + NEET</h2>
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded text-sm md:text-base">
            Register Now 2024-2025
          </button>
          <p className="mt-4 text-base md:text-lg">Learn and Interact with India's best Teachers</p>
          <p className="text-lg md:text-xl font-semibold mt-2">
            PHYSICS, MATH, CHEMISTRY, BIOLOGY<br />MADE EASY!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineClassHero;