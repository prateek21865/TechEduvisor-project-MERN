import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeadingSection = () => {
  const texts = ["Easy", "Practical", "Affordable"];
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
    <div className="grid grid-cols-12 w-full h-[460px] max-lg:h-[740px] max-md:h-[780px] items-center justify-center pb-4">
      <div className="flex flex-col justify-center max-lg:items-center col-span-6 max-lg:col-span-12 px-6 max-lg:pt-5 max-lg:absolute max-lg:top-[480px]">
        <h1 className="text-black text-[48px] max-lg:text-[42px] font-bold max-md:text-[35px] lg:pt-2">
          Excel in the Future with <br />
          Our
          <span className="text-[#277db0]"> {currentText} </span>
          <br />
          CBSE Skills Courses
        </h1>

        <p className="text-slate-600 text-[18px] max-lg:text-center max-lg:w-[75%] max-md:w-[90%] max-md:text-[15px] pt-2">
          PrepsGuide is your ultimate destination for upskilling. Maximize the
          value of your time and resources with our CBSE Skills courses.
        </p>
        <div className="bg-[#277db0] w-[150px] h-[40px] text-center content-center text-white font-semibold border-2 border-[#277db0] rounded-md mt-6 hover:bg-white hover:text-[#277db0] hover:cursor-pointer ">
          <Link to="/">Explore</Link>
        </div>
      </div>
      <div className="flex justify-center items-center col-span-6 max-lg:col-span-12 w-full h-[460px] p-2 max-lg:absolute max-lg:top-[55px]">
        <img
          src="https://img.freepik.com/free-vector/distance-education-icon-set_98292-7253.jpg?ga=GA1.2.501599750.1689259241&semt=ais_user"
          alt="image"
          className="w-[400px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default HeadingSection;
