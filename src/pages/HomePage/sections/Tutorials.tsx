import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SiYoutubemusic } from "react-icons/si";
import YouTubePlayer from "../../../components/YoutubePlayer";
import { ImCross } from "react-icons/im";
import BaseCatalysed from "../../../assets/Youtube Thumbnails/Base Catalysed Tautomerism Lecture Thumbnail.png";
import CommunicationSystem from "../../../assets/Youtube Thumbnails/Communication System Lecture Thumbnail.png";
import IdealGasEquation from "../../../assets/Youtube Thumbnails/Ideal Gas Equation Lecture Thumbnail.png";
import KineticTheoryOfGases from "../../../assets/Youtube Thumbnails/Kinetic Theory of Gases Lecture Thumbnail.png";
import Modulation from "../../../assets/Youtube Thumbnails/Modulation Lecture Thumbnail.png";

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

const Tutorials = () => {
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

  const [v_id, set_v_id] = React.useState("");
  const [showYoutube, setShowYoutube] = React.useState(false);

  const tutorials = [
    { title: "Modulation", thumbnail: Modulation, v_id: "rh6DibIIiuA" },
    {
      title: "Kinetic Theory of Gases",
      thumbnail: KineticTheoryOfGases,
      v_id: "I_6ESIOcKkw",
    },
    {
      title: "Ideal Gas Equation",
      thumbnail: IdealGasEquation,
      v_id: "ay9jiyUH0mA",
    },
    {
      title: "Communication System",
      thumbnail: CommunicationSystem,
      v_id: "58dxTiO5Q-k",
    },
    {
      title: "Base Catalysed Tautomerism",
      thumbnail: BaseCatalysed,
      v_id: "r_07ABpyTXs",
    },
  ];

  const playButtonClicked = (v: string): void => {
    set_v_id(v);
    setShowYoutube(true);
  };

  return (
    <div className="py-8 text-black px-7 relative flex flex-col items-center">
      <div className="text-center text-[40px] max-md:text-[30px] font-semibold py-3">
        <h3>Get access to the Best Tutorials</h3>
        <p className="text-[20px] max-md:text-[15px] text-yellow-500 font-normal">
          Experience our Unique Learning Methodology
        </p>
      </div>

      {showYoutube && (
        <div className="absolute top-[10%] z-50 sm:w-[490px]">
          <div className="bg-black p-2 ">
            <div className="flex justify-end text-white p-2">
              <ImCross
                onClick={() => {
                  setShowYoutube(false);
                }}
              />
            </div>
            <div className="flex justify-center">
              <YouTubePlayer videoId={v_id} />
            </div>
          </div>
        </div>
      )}

      <div className="w-11/12 lg:w-3/4 m-auto">
        <div className="mt-5">
          <CustomSlider {...settings}>
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-black text-white shadow-md h-[260px] w-[310px] p-2"
              >
                <div
                  className="h-[70%] flex justify-center items-center rounded-t-xl relative"
                  onClick={() => {
                    playButtonClicked(tutorial.v_id);
                  }}
                >
                  <SiYoutubemusic className="absolute text-[40px] text-red-600 hover:text-[55px] hover:text-green-500" />
                  <SiYoutubemusic className="absolute text-[40px] text-red-600 hover:text-[55px] hover:text-green-500" />
                  <img
                    src={tutorial.thumbnail}
                    alt="thumbnail"
                    className="h-[100%]"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-center p-3 text-yellow-500">
                    {tutorial.title}
                  </p>
                  {/* <p className="text-[18px] text-black text-center">{tutorial.chapter}</p> */}
                </div>
              </div>
            ))}
          </CustomSlider>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
