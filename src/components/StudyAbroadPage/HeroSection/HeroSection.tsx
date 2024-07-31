import React from 'react';
import { Button } from '../../ui/button'; // Assuming you're using shadcn/ui

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      >
        <source src="/study_abroad.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-4xl font-semibold italic mb-2">PrepsGuide</h2>
        <h1 className="text-5xl font-bold mb-4">A World of<br />Learning Awaits!</h1>
        <p className="max-w-2xl mb-8 text-lg">
          Make your dream of Study Abroad come true with PrepsGuide - The most 
          comprehensive learning solution in the realm of global education
        </p>
        <Button variant="default" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
          Get Started &gt;
        </Button>
      </div>

      {/* Phone Icon */}
      <div className="absolute bottom-4 right-4 z-20">
        <div className="bg-orange-500 rounded-full p-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;