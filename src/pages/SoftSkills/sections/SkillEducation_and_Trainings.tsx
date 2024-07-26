import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const SkillEducation_and_Trainings = () => {
  return (
    <div className="grid grid-cols-12 w-full h-[460px] max-lg:h-[770px] max-md:h-[750px] items-center justify-center">
      <div className="flex justify-center items-center col-span-6 max-lg:col-span-12 w-full h-[460px] p-2">
        <img
          src="https://img.freepik.com/free-vector/business-background-design_1200-86.jpg?ga=GA1.2.501599750.1689259241&semt=ais_user"
          alt="image"
          className="w-[400px] h-[400px] rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center col-span-6 max-lg:col-span-12 px-6">
        <h3 className="text-black text-[25px] font-semibold max-md:text-[20px]">
          Skill Education & Training
        </h3>
        <h1 className="text-black text-[48px] max-lg:text-[42px] font-bold max-md:text-[35px] lg:pt-2">
          Where <span className="text-yellow-400 "> Learning </span>
          Meets The Expectations
        </h1>

        <p className="text-slate-600 text-[18px] max-md:text-center max-lg:w-[75%] max-md:w-[90%] max-md:text-[15px] pt-2">
          At PrepsGuide, we revolutionize your skills journey by partnering with
          top faculties to offer exceptional CBSE skills courses
        </p>
        <div className="flex gap-8 max-lg:justify-center">
          <div className="bg-yellow-400 w-[150px] h-[40px] text-center content-center text-white font-semibold border-2 border-yellow-400 rounded-md mt-6 hover:cursor-pointer items-center hover:opacity-70">
            <Link to="/">Explore</Link>
          </div>
          <div className="bg-white w-[150px] h-[40px] content-center text-yellow-400 font-semibold border-2 border-yellow-400 rounded-md mt-6 hover:cursor-pointer items-center hover:opacity-70  ">
            <Link to="tel:+919041191191">
              <span className="flex items-center justify-center gap-4">
                Call Us <FiPhoneCall />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillEducation_and_Trainings;
