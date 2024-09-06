import React from 'react';

const HeroSection: React.FC = () => {
  return (
    // <div className="w-full h-[450px] md:min-h-[70vh] relative overflow-hidden bg-[#0E2D42] mt-[2rem]">
    <div className="w-full h-[450px] md:min-h-[70vh] relative overflow-hidden bg-[#2b4454] mt-[2rem]">
      <div 
        className="absolute inset-0 bg-cover md:bg-contain bg-no-repeat  md:right-[220px]"
        style={{backgroundImage: "url('mentor-header.png')"}}
      ></div>
      
      <div className="relative h-full flex items-center">
        <div className="hidden md:block w-1/2"></div>
        <div className="w-full md:w-full px-4 md:px-0 md:pr-[8rem] text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Recorded Video Courses with Mentors Support</h1>
          <h2 className="text-xl md:text-2xl mb-4">Registration for New Academic Year 2024-2025</h2>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
            REGISTER FOR A SAMPLE LESSON
          </button>
          <p className="mt-4 text-base md:text-lg">PHYSICS, MATH, CHEMISTRY, BIOLOGY</p>
          <p className="text-lg md:text-xl font-semibold mt-2">
            MADE EASY!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
