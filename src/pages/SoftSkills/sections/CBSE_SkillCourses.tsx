import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const coursesData = [
  {
    title: "Data Science",
    desc: "Become an expert at drawing intelligence from data and get noticed by top companies.",
    img: "https://img.freepik.com/free-vector/laptop-computer-with-academic-icon-white-background_1308-74596.jpg?t=st=1721932475~exp=1721936075~hmac=8ddd161b9a54aba8cce139260207e96e501d05db06e86dce91df0e61b3bdcda8&w=740",
    linkTo: "/ssc",
  },
  {
    title: "Artificial Intelligence",
    desc: "Master the techniques and technologies behind artificial intelligence and make impactful innovations.",
    img: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/bc14c559-783f-4f78-b7a7-7a638810c7da.svg",
    linkTo: "/ssc",
  },
  {
    title: "Machine Learning",
    desc: "Learn how to develop algorithms that improve automatically through experience and get ahead in the tech field.",
    img: "https://img.freepik.com/free-psd/futuristic-robot-illustration_23-2150978986.jpg?ga=GA1.1.501599750.1689259241&semt=ais_user",
    linkTo: "/ssc",
  },
  {
    title: "Design Thinking",
    desc: "Understand the human-centered approach to innovation and problem-solving to drive success in projects.",
    img: "https://img.freepik.com/free-vector/concept-landing-page-website_23-2147771598.jpg?ga=GA1.1.501599750.1689259241&semt=ais_user",
    linkTo: "/ssc",
  },
  {
    title: "Web Development",
    desc: "Acquire skills to build, design, and maintain websites and applications for the modern web.",
    img: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg",
    linkTo: "/ssc",
  },
  {
    title: "Financial Literacy",
    desc: "Gain essential knowledge to manage finances, investments, and plan for a secure financial future.",
    img: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/7362227c-33fe-4113-955f-d616e8e87a04.svg",
    linkTo: "/ssc",
  },
  {
    title: "Travel & Tourism",
    desc: "Explore the fundamentals of travel and tourism industry to start a career in a dynamic and growing field.",
    img: "https://img.freepik.com/free-vector/linear-transport-travel-icons_1257-307.jpg?ga=GA1.1.501599750.1689259241&semt=ais_user",
    linkTo: "/ssc",
  },
];

const CBSE_SkillCourses = () => {
  return (
    <div className="flex flex-col items-center pt-9 pb-8">
      <h1 className="text-[30px] max-md:text-[22px] w-full px-7 text-black font-semibold ">
        Explore CBSE Skills Courses
      </h1>
      <div className="flex flex-wrap gap-8 p-7">
        {coursesData.map((courseData) => (
          <Link to={courseData.linkTo}>
            <div className=" w-[420px] h-[180px] overflow-hidden rounded-lg shadow-lg hover:opacity-[0.7]">
              <div className="flex justify-between w-full h-[70%] p-2 bg-gradient-to-r from-[#F5F3FE] to-[pink]">
                <div className="w-[80%]">
                  <h3 className="text-black text-[20px] font-semibold">
                    {courseData.title}
                  </h3>
                  <p className="text-slate-600 text-[16px]">
                    {courseData.desc}
                  </p>
                </div>
                <div className="w-[20%] text-center content-center ">
                  <img
                    src={courseData.img}
                    alt="image"
                    className="h-[80px] w-[80px] rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-between w-full h-[30%] p-2 py-3">
                <div className="w-[80%]">
                  <p className="text-slate-600 text-[17px]">Know More</p>
                </div>

                <FaArrowCircleRight className=" w-[20%] text-[20px] text-center content-center text-[#277db0]" />
              </div>
            </div>
          </Link>
        ))}
        {/* card div ends here */}
      </div>
    </div>
  );
};

export default CBSE_SkillCourses;
