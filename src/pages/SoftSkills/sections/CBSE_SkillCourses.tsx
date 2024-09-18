import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaLaptopCode, FaBrain, FaCogs, FaPencilRuler, FaCode, FaChartLine, FaPlane } from "react-icons/fa";

const coursesData = [
  {
    title: "Data Science",
    desc: "Become an expert at drawing intelligence from data and get noticed by top companies.",
    icon: FaLaptopCode,
    linkTo: "/ssc",
  },
  {
    title: "Artificial Intelligence",
    desc: "Master the techniques and technologies behind artificial intelligence and make impactful innovations.",
    icon: FaBrain,
    linkTo: "/ssc",
  },
  {
    title: "Machine Learning",
    desc: "Learn how to develop algorithms that improve automatically through experience and get ahead in the tech field.",
    icon: FaCogs,
    linkTo: "/ssc",
  },
  {
    title: "Design Thinking",
    desc: "Understand the human-centered approach to innovation and problem-solving to drive success in projects.",
    icon: FaPencilRuler,
    linkTo: "/ssc",
  },
  {
    title: "Web Development",
    desc: "Acquire skills to build, design, and maintain websites and applications for the modern web.",
    icon: FaCode,
    linkTo: "/ssc",
  },
  {
    title: "Financial Literacy",
    desc: "Gain essential knowledge to manage finances, investments, and plan for a secure financial future.",
    icon: FaChartLine,
    linkTo: "/ssc",
  },
  {
    title: "Travel & Tourism",
    desc: "Explore the fundamentals of travel and tourism industry to start a career in a dynamic and growing field.",
    icon: FaPlane,
    linkTo: "/ssc",
  },
];

const CBSE_SkillCourses = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-[30px] max-md:text-[22px] w-full px-7 text-black font-semibold text-center mb-8">
        Explore CBSE Skills Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-16 pr-16 pt-6 w-full">
        {coursesData.map((courseData, index) => (
          <Link to={courseData.linkTo} key={index}>
            <div className="w-[420px] h-[180px] overflow-hidden rounded-lg shadow-lg hover:opacity-[0.7]">
              <div className="flex justify-between w-full h-[70%] p-2 bg-gradient-to-r from-[#F5F3FE] to-[pink]">
                <div className="w-[80%]">
                  <h3 className="text-black text-[20px] font-semibold">
                    {courseData.title}
                  </h3>
                  <p className="text-slate-600 text-[16px]">
                    {courseData.desc}
                  </p>
                </div>
                <div className="w-[20%] text-center flex items-center justify-center">
                  <courseData.icon className="text-[#277db0] text-5xl" />
                </div>
              </div>
              <div className="flex justify-between w-full h-[30%] p-2 py-3">
                <div className="w-[80%]">
                  <p className="text-slate-600 text-[17px]">Know More</p>
                </div>
                <FaArrowCircleRight className="w-[20%] text-[20px] text-center content-center text-[#277db0]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CBSE_SkillCourses;