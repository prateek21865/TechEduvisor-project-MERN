import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AbhikPic from "../../assets/Mentors Images/Abhik.jpeg";
import ChahatPic from "../../assets/Mentors Images/Chahat.jpeg";
import DrMuskanPic from "../../assets/Mentors Images/Dr. Muskan.png";
import MenusPic from "../../assets/Mentors Images/Menus.jpeg";
import PiyushGoalPic from "../../assets/Mentors Images/Piyush Goal.jpeg";
import StutiAjmeraPic from "../../assets/Mentors Images/Stuti Ajmera.jpeg";
import PramodPathakPic from "../../assets/Faculties Images/Pramod Pathak Sir.png";
import RitikaPic from "../../assets/Faculties Images/Ritika Mam.png";
import ShikharPic from "../../assets/Faculties Images/Shikhar Sir.png";
import ShivaniSalujaPic from "../../assets/Faculties Images/Shivani Saluja.png";
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

const Teachers = () => {
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

  const teachers = [
    { name: "Abhik", title: "Mentor", img: AbhikPic },
    { name: "Chahat", title: "Mentor", img: ChahatPic },
    { name: "Dr. Muskan", title: "Mentor", img: DrMuskanPic },
    { name: "Menus", title: "Mentor", img: MenusPic },
    { name: "Piyush Goal", title: "Mentor", img: PiyushGoalPic },
    { name: "Stuti Ajmera", title: "Mentor", img: StutiAjmeraPic },
    { name: "Mr. Pramod", title: "Faculty", img: PramodPathakPic },
    { name: "Mrs. Ritika", title: "Faculty", img: RitikaPic },
    { name: "Mr. Shikhar", title: "Faculty", img: ShikharPic },
    { name: "Mrs. Shivani Saluja", title: "Faculty", img: ShivaniSalujaPic },
  ];

  return (
    <div className="py-8 text-black px-7">
      <div className="text-center text-[40px] max-md:text-[30px] text-[#0e2d42] font-semibold py-3">
        <span className="border-b-2 border-yellow-400">
          Our Mentors & Faculties
        </span>
      </div>

      <div className="w-11/12 lg:w-3/4 m-auto">
        <div className="mt-5">
          <CustomSlider {...settings}>
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className=" text-black rounded-xl h-[350px] w-[310px] bg-[#0e2d42]"
              >
                <div className="h-56 flex justify-center items-center rounded-t-xl">
                  <div className="h-44 w-44 rounded-full bg-white">
                    <img
                      src={teacher.img}
                      alt="teacher"
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                  <p className="text-2xl text-yellow-400 font-bold">
                    {teacher.name}
                  </p>
                  <p className="text-[18px] font-semibold text-slate-200">
                    {teacher.title}
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

export default Teachers;
