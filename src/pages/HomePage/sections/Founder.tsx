import PramodSir from "../../../assets/Faculties Images/Pramod Pathak Sir.png";

const Founder = () => {
  return (
    <div className="grid grid-cols-12 p-5">
      <h1 className="col-span-12 text-center font-bold text-[27px] text-black">
        Founder <br />{" "}
        <span className="text-[#277db0] text-[35px]"> Dr. Pramod Pathak </span>
      </h1>
      <div className="flex flex-col items-center justify-center col-span-3 max-lg:col-span-12">
        <img src={PramodSir} alt="pic" className="h-[360px] w-[360px]" />
        <h3 className="font-semibold text-[25px] text-slate-500">
          Dr. Pramod Pathak
        </h3>
      </div>
      <div className="px-2 pt-6 content-center text-[18px] col-span-9 max-lg:col-span-12">
        <div>
          <p>
            <span className="font-semibold">Dr. Pramod Pathak</span>, with a Ph.D. in Chemistry from Delhi University, has 24 years of experience in education. Founder of <span className="font-semibold">PrepsGuide, Vidyakul Next Gen Education, and Vidyapreps</span>, he has impacted over <span className="font-semibold">100,000</span> students through prestigious institutes like <span className="font-semibold">FIITJEE, Career Point, and Aakash</span>. His work has shaped the Indian EdTech landscape, reflecting his commitment to democratizing quality education and creating synergies across educational platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
