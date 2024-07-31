import { Link } from "react-router-dom";

const GetCertificate = () => {
  return (
    <div className="grid grid-cols-12 w-full h-[460px] max-lg:h-[820px] max-md:h-[760px] max-sm:h-[820px] items-center justify-center relative">
      <div className="flex justify-center items-center col-span-6 max-lg:col-span-12 w-full h-[460px] p-2 max-lg:absolute max-lg:top-[360px] max-md:top-[320px] max-sm:top-[380px]">
        <img
          src="https://img.freepik.com/free-vector/3d-cartoon-style-certificate-with-gold-medal-icon-diploma-document-award-white-background-flat-vector-illustration-quality-guarantee-wining-victory-competition-championship-concept_778687-982.jpg?ga=GA1.2.501599750.1689259241&semt=ais_user"
          alt="image"
          className="w-[400px] h-[400px]"
        />
      </div>
      <div className="flex flex-col justify-center col-span-6 max-lg:col-span-12 px-6 max-lg:absolute max-lg:top-[55px]">
        <h1 className="text-black text-[42px] font-bold max-md:text-[35px] lg:pt-2">
          Get Certificate
        </h1>
        <h3 className="text-black text-[25px] font-semibold max-md:text-[20px] max-lg:w-[90%]">
          Once you complete the course video, assignments and quizzes you will
          be able to generate the certificate.
        </h3>

        <p className="text-slate-600 text-[20px] max-lg:w-[75%] max-md:w-[90%] max-md:text-[18px] pt-2">
          <ul className="px-6 py-4 list-disc">
            <li>After watching 60% of videos</li>
            <li>After scoring 60% in quiz & assignment</li>
            <li>After completing CBSE oriented Project / Practicles</li>
          </ul>
        </p>
        <div className="flex gap-8 max-sm:justify-center">
          <div className="bg-[#277db0] w-[150px] h-[40px] text-center content-center text-white font-semibold border-2 border-[#277db0] rounded-md mt-6 hover:bg-white hover:text-[#277db0] hover:cursor-pointer ">
            <Link to="/">Know More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCertificate;
