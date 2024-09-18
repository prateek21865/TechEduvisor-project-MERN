
const KeyBenefits = () => {
  return (
    <div className="grid grid-cols-12 w-full h-[460px] max-lg:h-[820px] max-md:h-[750px] items-center justify-center">
      <div className="flex flex-col justify-center col-span-6 max-lg:col-span-12 px-6">
        <h3 className="text-black text-[25px] font-semibold max-md:text-[20px]">
          Key Benefits of
        </h3>
        <h1 className="text-black text-[48px] max-lg:text-[42px] font-bold max-md:text-[35px] lg:pt-2">
          <span className="text-yellow-400 "> CBSE </span>
          Skills Course
        </h1>

        <p className="text-slate-600 text-[18px]  max-lg:w-[80%] max-md:text-[15px] pt-2">
          Begin your upskilling journey with PrepsGuide to achieve rapid career
          growth and Industry knowledge. As job opportunities expand, possessing
          top-notch skills will set you apart.
        </p>
      </div>
      <div className="flex justify-center items-center col-span-6 max-lg:col-span-12 w-full h-[460px] p-2">
        <div className="w-[400px] h-[400px]  relative">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-blue-lined-paper-background_23-2151105435.jpg?ga=GA1.2.501599750.1689259241&semt=ais_user"
            alt=""
            className="w-full h-full absolute -z-10 top-0 left-0"
          />
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-[25px] font-semibold py-2">Highlights</h1>
            <ul className="mt-4 mx-5 px-8 list-disc">
              <li className="pb-1 px-2 font-semibold ">
                LIVE Online Classes by Expert Teachers
              </li>
              <li className="pb-0 px-2 font-semibold ">
                Online Homework assignments
              </li>
              <li className="pb-1 px-2 font-semibold ">
                Doubt Clearing support during and after the class
              </li>
              <li className="pb-1 px-2 font-semibold ">Peer Support Groups</li>
              <li className="pb-1 px-2 font-semibold ">
                Handwritten / Digital Notes
              </li>
              <li className="pb-0 px-2 font-semibold ">Monthly Tests</li>
              <li className="pb-1 px-2 font-semibold ">Subject Handbook</li>
              <li className="pb-0 px-2 font-semibold ">
                Career Opportunities and Guidance
              </li>
              <li className="pb-1 px-2 font-semibold ">
                Industry Expert Sessions
              </li>
              <li className="pb-0 px-2 font-semibold ">
                Industry Connect For Future Growth
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
