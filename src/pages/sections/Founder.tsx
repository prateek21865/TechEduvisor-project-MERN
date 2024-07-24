import PramodSir from "../../assets/Faculties Images/Pramod Pathak Sir.png";

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
            <span className="font-semibold">Dr. Pramod Pathak</span> holds a
            Ph.D. in Chemistry from Delhi University, bringing a strong academic
            foundation to his entrepreneurial ventures. His journey in education
            began long before founding PrepsGuide, as he previously established
            two successful companies,{" "}
            <span className="font-semibold">
              Vidyakul Next Gen Education and Vidyapreps.
            </span>
          </p>
          <p className="pt-2">
            This extensive background in educational entrepreneurship has shaped
            my vision for democratizing quality education in India. With an
            impressive 24-year tenure in education, He has left an indelible
            mark on the Indian educational landscape. His experience spans some
            of the most prestigious coaching institutes in the country,
            including &nbsp;
            <span className="font-semibold">
              FIITJEE, Allen, Career Point, and Aakash.
            </span>
          </p>
          <p className="pt-2">
            Throughout his career, He has directly impacted the lives of over
            <span className="font-semibold"> 100,000</span> students across
            various platforms, cementing my reputation as a dedicated educator
            and mentor. This strategic positioning has not only expanded his
            influence in the EdTech sector but also demonstrates his ability to
            create synergies between different educational platforms, ultimately
            benefiting a wider student base.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
