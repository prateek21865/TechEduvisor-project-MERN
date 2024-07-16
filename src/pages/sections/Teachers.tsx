import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardPic from '../../assets/instructors/first_one.jpg';

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
    { name: 'Maria', subject: 'Mathematics', img: CardPic },
    { name: 'Sania', subject: 'Physics', img: CardPic },
    { name: 'Kiara', subject: 'Chemistry', img: CardPic },
    { name: 'Rashmika', subject: 'English', img: CardPic },
  ];

  return (
    <div className="py-2 bg-[#0e2d42] text-white">
      <div className="text-center text-[25px]">
        <h3>Learn from India’s Best Teachers</h3>
      </div>

      <div className="w-11/12 lg:w-3/4 m-auto">
        <div className="mt-5">
          <Slider {...settings}>
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white h-auto text-black rounded-xl max-sm:w-3/4">
                <div className="h-56 bg-[#277db0] flex justify-center items-center rounded-t-xl">
                  <img src={teacher.img} alt="teacher" className="h-44 w-44 rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{teacher.name}</p>
                  <p className="text-center text-red-500">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
