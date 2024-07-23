import { Link } from "react-router-dom";
const StudyAbroad = () => {
  return (
    <div className="grid grid-cols-12 p-5 my-10">
      <h1 className="col-span-12 text-center font-bold text-[40px] max-lg:text-[30px] text-[#0e2d42] p-2">
        <span className="border-b-2 border-yellow-400">Study Abroad</span>
      </h1>
      <div className="flex justify-center col-span-4 max-lg:col-span-12 py-3">
        <div className="flex flex-col items-center pb-2 h-[350px] w-[312px] hover:w-[318px] overflow-hidden hover:overflow-y-auto overflow-x-hidden bg-[#F5F3FE] rounded-2xl shadow-2xl">
          <h3 className="text-center text-[25px] px-2 py-4 w-[312px] bg-[#0e2d42] rounded-t-2xl text-yellow-400 font-semibold">
            F e a t u r e s
          </h3>

          <div className="px-2 py-2">
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Counselling</span> Support
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Country & University</span>{" "}
              Selection
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Application</span> Assistance
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Scholarship & Financial Aid</span>
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              <span className="font-semibold">Travel</span> Assistance
            </div>
            <div className="w-[270px] p-2 border-b-[1px] border-slate-400 text-md">
              Easy <span className="font-semibold">Visa</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-[20px] justify-center max-lg:text-[15px] col-span-8 max-lg:col-span-12">
        <div className="max-lg:w-[90%] w-[60%] pt-4">
          <p>
            Opens doors to transformative educational experiences by offering
            students opportunities to immerse themselves in different cultures,
            academic environments, and global perspectives.
          </p>
          <br />
          <p>
            "Access specialized courses, unique research opportunities, and
            innovative teaching methods not available at home institutions."
          </p>
        </div>
        <Link to="/sap">
          <div className="bg-[#0e2d42] border-2 border-[#0e2d42] text-yellow-400 text-center content-center w-[150px] h-[45px] max-lg:w-[120px] max-lg:h-[40px]  m-5 rounded-md hover:cursor-pointer items-center hover:opacity-70">
            Know More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StudyAbroad;
