const WhyUs = () => {
  return (
    <div className="flex flex-col items-center pt-5 pb-8">
      <h1 className="text-[40px] text-black font-bold">
        Why <span className="text-[#277db0]">Choose</span> Us ?
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <div className="bg-[#F5F3FE] rounded-2xl py-6 px-3 h-[270px] w-[310px] text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h3 className="text-[20px] font-semibold border-b-[1px] border-b-black py-2">
            Top Industry Experts
          </h3>

          <p className="py-2 text-[16px] font-semibold">
            We are a community of experts who provide academic support,
            counseling and a complete career path. Our experts give each student
            personalized attention while considering their academic knowledge,
            skillset and interests.
          </p>
        </div>
        {/* card div ends here */}

        <div className="bg-[#F5F3FE] rounded-2xl py-6 px-3 h-[270px] w-[310px] text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h3 className="text-[20px] font-semibold border-b-[1px] border-b-black py-2">
            Live Mentorship
          </h3>

          <p className="py-2 text-[16px] font-semibold">
            We provide live mentorship to the students. Assist them and help
            them in finding the best in academics and in career path. We build
            relationships with students which keep them growing.
          </p>
        </div>
        {/* card div ends here */}

        <div className="bg-[#F5F3FE] rounded-2xl py-6 px-3 h-[270px] w-[310px] text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h3 className="text-[20px] font-semibold border-b-[1px] border-b-black py-2">
            One-to-One Counseling
          </h3>

          <p className="py-2 text-[16px] font-semibold">
            PrepsGuide provides one-to-one live counseling and academic doubt
            resolution to the students.We resolve their doubts related to career
            planning and provide proper assistance
          </p>
        </div>
        {/* card div ends here */}

        <div className="bg-[#F5F3FE] rounded-2xl py-6 px-3 h-[270px] w-[310px] text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h3 className="text-[20px] font-semibold border-b-[1px] border-b-black py-2">
            Best Soft Skills Courses
          </h3>

          <p className="py-2 text-[16px] font-semibold">
            Unlock your potential with our dynamic soft skill courses for
            students (class 9-12).Dive into the world of data with our Data
            Science Foundations, master your finances with Financial Literacy,
            and explore the future with AR/VR.{" "}
          </p>
        </div>
        {/* card div ends here */}

        <div className="bg-[#F5F3FE] rounded-2xl py-6 px-3 h-[270px] w-[310px] text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h3 className="text-[20px] font-semibold border-b-[1px] border-b-black py-2">
            Customized Career Plans
          </h3>

          <p className="py-2 text-[16px] font-semibold">
            We provide customized learning plans to the students. Assist them
            and help them in scoring the best grades in the baords. We build
            relationships with students which keep them growing.
          </p>
        </div>
        {/* card div ends here */}

        <div className="bg-[#F5F3FE] rounded-2xl py-6 px-3 h-[270px] w-[310px] text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h3 className="text-[20px] font-semibold border-b-[1px] border-b-black py-2">
            Solutions For Schools
          </h3>

          <p className="py-2 text-[16px] font-semibold">
            Experience tailored educational support with our Offline Customized
            Career Guidance and Academic Guidance Plan for schools. Our expert
            mentors provide personalized assistance, addressing unique learning
            needs.
          </p>
        </div>
        {/* card div ends here */}
      </div>
    </div>
  );
};

export default WhyUs;
