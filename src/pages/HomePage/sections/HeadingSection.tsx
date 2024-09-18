import { useState, useEffect } from "react";
import FirstImg from "../../../assets/Header Images/smiley-pregnant-woman-holding-clipboard-pointing-up-with-copy-space.png";

const HeadingSection = () => {
  const texts = ["Knowledge", "Support", "Excel"];
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update index to cycle through texts array
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once

  // Update currentText when index changes
  useEffect(() => {
    setCurrentText(texts[index]);
  }, [index]);

  return (
    <div className="grid grid-cols-12 w-full h-[460px] items-center justify-center pt-2 pb-4 bg-[#0e2d42] relative">
      <div className="lg:col-span-4"></div>
      <img
        src={FirstImg}
        alt="first image"
        className="absolute h-[350px] bottom-0 left-[100px] max-lg:hidden"
      />
      <div className="flex flex-col col-span-12 lg:col-span-8 max-lg:px-6 lg:pr-[70px]">
        <h1 className="text-white text-[50px] max-md:text-[40px] lg:pt-2">
          The Best Platform For <br />
          <span className="text-yellow-400">“ {currentText} ”</span>
        </h1>
        <h3 className="text-white text-[25px] max-md:text-[20px] pt-2">
          IIT JEE + NEET + NDA + CBSE
        </h3>
        <p className="text-yellow-400 text-[15px] max-md:text-[15px] pt-2">
          PrepsGuide, a leading educational platform, has earnered a vast
          student community and continues to elevate educational standards.
          Dedicated to meeting student needs with exceptional faculty support,
          PrepsGuide emphasizes affordability amidst the financial constraints
          of online learning.
        </p>

        {/* <div className="bg-[#277db0] text-white p-3 font-semibold border-2 border-[#277db0] rounded-full mt-3 hover:bg-white hover:text-[#277db0]  ">
          <Link to="/">Explore More</Link>
        </div> */}
      </div>
    </div>
  );
};

export default HeadingSection;
