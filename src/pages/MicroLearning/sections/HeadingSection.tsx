import { Link } from "react-router-dom";
import HeaderImg from "../../../assets/Header Images/front-view-male-student-wearing-black-backpack-holding-copybook-files-using-his-phone-light-blue-wall.png";

const HeadingSection = () => {
  return (
    <div className="grid grid-cols-12 w-full h-[300px] items-center justify-center pt-4 pb-8 bg-[#0e2d42] relative">
      <div className="flex flex-col justify-center items-center col-span-12 lg:col-span-8">
        <h1 className="text-white text-[50px] max-md:text-[40px] lg:pt-2">
          <span className="text-yellow-400">Micro Courses</span>
        </h1>
        <p className="text-white font-semibold text-[28px] max-md:text-[23px] pt-2">
          By India’s Best Teachers{" "}
        </p>{" "}
        <p className="text-white text-[20px] max-md:text-[18px] pt-2 mb-2">
          Learn Complex Topics Quickly & Thoroughly!{" "}
        </p>
        <div className="bg-[#277db0] text-white p-3 font-semibold border-2 border-[#277db0] rounded-full mt-3 hover:bg-white hover:text-[#277db0] w-[250px] text-[13px] tracking-wider text-center">
          <Link to="/">REGISTER FOR A SAMPLE LESSON</Link>
        </div>
      </div>

      <img
        src={HeaderImg}
        alt="header image"
        className="absolute h-[300px] bottom-0 right-[80px] xl:right-[160px] max-lg:hidden"
      />
      <div className="lg:col-span-4"></div>
    </div>
  );
};

export default HeadingSection;
