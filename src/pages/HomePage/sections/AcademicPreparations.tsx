// import React from 'react'
import { Link } from "react-router-dom";

const AcademicPreparations = () => {
  return (
    <div className="grid grid-cols-12 p-5 my-5">
      <h1 className="col-span-12 text-center font-bold text-[40px] max-lg:text-[30px] text-[#0e2d42] p-2">
        <span className="border-b-2 border-yellow-400">
          Academic Preparation
        </span>
      </h1>
      <div className="flex flex-col items-center text-[20px] justify-center max-lg:text-[15px] col-span-8 max-lg:col-span-12">
        <div className="max-lg:w-[90%] w-[60%] ">
          <p>
            Academic Preparations Programs is designed to equip students with
            the foundational skills and knowledge necessary to excel in their
            academic pursuits.
          </p>
          <br />
          <p>
            Launching batches for the preparation of{" "}
            <span className="font-semibold">
              IIT JEE, NEET, NDA, & CBSE Exams
            </span>
          </p>
        </div>
        <Link to="/ap">
          <div className="bg-[#0e2d42] border-2 border-[#0e2d42] text-yellow-400 text-center content-center w-[150px] h-[45px] max-lg:w-[120px] max-lg:h-[40px]  m-5 rounded-md hover:cursor-pointer items-center hover:opacity-70">
            Know More
          </div>
        </Link>
      </div>

      <div className="flex justify-center col-span-4 max-lg:col-span-12">
        <div className="flex flex-col items-center pb-2 h-[350px] w-[312px] hover:w-[318px] overflow-hidden hover:overflow-y-auto overflow-x-hidden bg-[#F5F3FE] rounded-2xl shadow-2xl">
          <h3 className="text-center text-[25px] px-2 py-4 w-[312px] bg-[#0e2d42] rounded-t-2xl text-yellow-400 font-semibold">
            F e a t u r e s
          </h3>

          <div className="px-2 py-2">
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Live Classes</span> by{" "}
              <span className="font-semibold">Expert Teachers</span>
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">On Demand</span> by Chapter
              completion
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Online</span> Assignments
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Evaluation</span> of assignment
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Doubt - Clearing</span> Support
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Periodic</span> Tests
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Peer Support</span> Groups
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Monthly</span> Test Series
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Subject</span> Handbooks
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Chapterwise</span> Subject Notes
            </div>

            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">24*7</span> Student Support System
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPreparations;
