import { Link } from "react-router-dom";

const AcademicMentorshipProgram = () => {
  return (
    <div className="grid grid-cols-12 p-5 my-10">
      <h1 className="col-span-12 text-center font-bold text-[40px] max-lg:text-[30px] text-[#0e2d42] p-2">
        <span className="border-b-2 border-yellow-400">
          Academic Mentorship Program
        </span>
      </h1>
      <div className="flex justify-center col-span-4 max-lg:col-span-12 py-3">
        <div className="flex flex-col items-center pb-2 h-[350px] w-[312px] hover:w-[318px] overflow-hidden hover:overflow-y-auto overflow-x-hidden bg-[#F5F3FE] rounded-2xl shadow-2xl">
          <h3 className="text-center text-[25px] px-2 py-4 w-[312px] bg-[#0e2d42] rounded-t-2xl text-yellow-400 font-semibold">
            F e a t u r e s
          </h3>

          <div className="px-2 py-2">
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Live</span> Mentorship
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Live Counselling</span> Sessions
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Personalized</span> Study Plan
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Daily</span> Practice Problems and
              Solutions
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Periodic</span> Test Series
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Toppers</span> Notes
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">AIR</span> Prediction
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Online Doubt-Support</span>
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Career</span> Roadmaps
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">24 x 7</span> Student Support
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">1 Year</span> Plan Validity
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-[20px] justify-center max-lg:text-[15px] col-span-8 max-lg:col-span-12">
        <div className="max-lg:w-[90%] w-[60%] pt-4">
          <p>
            Welcome to our{" "}
            <span className="font-semibold">
              Academic Mentorship and Counseling Program
            </span>
            , where we are dedicated to empowering students on their educational
            journey. Our program offers personalized mentorship, providing
            guidance tailored to your academic and personal goals.
          </p>
          <br />
          <p>
            "Unlock your potential with personalized support tailored to your
            success!"
          </p>
        </div>
        <Link to="/amp">
          <div className="bg-[#0e2d42] border-2 border-[#0e2d42] text-yellow-400 text-center content-center w-[150px] h-[45px] max-lg:w-[120px] max-lg:h-[40px]  m-5 rounded-md hover:cursor-pointer items-center hover:opacity-70">
            Know More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AcademicMentorshipProgram;
