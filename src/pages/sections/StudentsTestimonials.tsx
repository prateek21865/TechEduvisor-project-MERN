import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AmanPic from "../../assets/Student Testimonials/Aman Garg.jpeg";
import AnkushPic from "../../assets/Student Testimonials/Ankush Singhania.jpeg";
import KrishPic from "../../assets/Student Testimonials/Krish Singh.jpeg";
import HarmandeepPic from "../../assets/Student Testimonials/Harmandeep.jpeg";
import MyraPic from "../../assets/Student Testimonials/Miss Myra.jpeg";
import ShashwatPic from "../../assets/Student Testimonials/Shashwat.jpeg";

import styled from "styled-components";

const CustomSlider = styled(Slider)`
  /* Customize Slick Slider arrow styles */
  .slick-prev,
  .slick-next {
    font-size: 30px;
    border-color: rgba(0, 0, 0, 0.6);
  }

  .slick-prev:before,
  .slick-next:before {
    color: #0e2d42;
  }

  /* Hover effect */
  .slick-prev:hover,
  .slick-next:hover {
    border-color: rgba(0, 0, 0, 0.9);
  }
`;

const StudentsTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640, // For screens less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const students = [
    {
      name: "Aman Garg",
      img: AmanPic,
      review:
        "PrepsGuide is an amazing platform for solving my problems related to my exam, mentorship, and career guidance, they helped and guided me in an effective and easier way. In one word, Satisfied!",
    },
    {
      name: "Ankush Singhania",
      img: AnkushPic,
      review:
        "It's a wonderful platform that covers different career related fields. It's an easy to use which feed you with knowledgeable content daily:)",
    },
    {
      name: "Harmandeep Kaur",
      img: HarmandeepPic,
      review:
        "A helpful platform for students. Easy to use and covers multiple things.",
    },
    {
      name: "Krish Singh",
      img: KrishPic,
      review:
        "Counseling session was excellent. It gives a very clear picture of what would be the right strategy to be followed to achieve your goal.l really like this platform...",
    },
    {
      name: "Miss Myra",
      img: MyraPic,
      review:
        "It is a very useful platform for academic help.. There are so many interesting sessions with mentors, and videos that will surely help students to choose the right direction :)",
    },
    {
      name: "Shashwat",
      img: ShashwatPic,
      review:
        "My experience with PrepsGuide was very awesome. This platform helped me to choose a right career plan for myself. This is an excellent platform where everyone get guidance of all streams and career options.",
    },
  ];

  return (
    <div className="py-8 text-black px-7">
      <div className="text-center text-[40px] max-md:text-[30px] font-semibold py-3">
        <span className=" text-black border-b-2 border-yellow-400">
          Students <span className="text-[#277db0]">Testimonials</span>
        </span>
      </div>

      <div className="w-11/12 lg:w-3/4 m-auto">
        <div className="mt-5">
          <CustomSlider {...settings}>
            {students.map((student, index) => (
              <div
                key={index}
                className="bg-slate-100 text-black rounded-xl h-[470px] w-[270px] p-5"
              >
                <div className="h-50 flex justify-center items-center rounded-t-xl">
                  <img
                    src={student.img}
                    alt="student_pic"
                    className="h-24 w-24 rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                  <p className="text-2xl text-[#0e2d42] font-bold">
                    {student.name}
                  </p>
                  <p className="text-[18px] text-black py-2">
                    {student.review}
                  </p>
                </div>
              </div>
            ))}
          </CustomSlider>
        </div>
      </div>
    </div>
  );
};

export default StudentsTestimonials;
