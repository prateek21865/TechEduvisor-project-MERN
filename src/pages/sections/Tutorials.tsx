import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SiYoutubemusic } from "react-icons/si";
import YouTubePlayer from "../../components/YoutubePlayer";
import { ImCross } from "react-icons/im";



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

  const [v_id,set_v_id]=React.useState("");
  const [showYoutube,setShowYoutube]=React.useState(false);

  const tutorials = [
        
    { title : 'Ideal Gas Equation', chapter : 'Kinetic Theory of Gases', thumbnail :'https://www.keytechinc.com/wp-content/uploads/2022/01/video-thumbnail.jpg',
        v_id : 'ay9jiyUH0mA'  },
    { title : "Le Chatelier's Principle", chapter : 'Chemical Equilibrium', thumbnail :'https://www.keytechinc.com/wp-content/uploads/2022/01/video-thumbnail.jpg',
        v_id : 'mFW195Wi8r0'  },
    { title : 'Communication System', chapter : 'Elements of Communication', thumbnail :'https://www.keytechinc.com/wp-content/uploads/2022/01/video-thumbnail.jpg',
        v_id : '58dxTiO5Q-k'  }
  ];

  const playButtonClicked = (v:string) : void => {
        set_v_id(v);
        setShowYoutube(true);
  }

  return (
    <div className="py-8 bg-[#426e89] text-black px-7 relative flex flex-col items-center">
      <div className="text-center text-[35px] font-semibold py-3">
        <h3>Get access to the Best Tutorials</h3>
        <p className="text-[20px] font-normal">Experience our Unique Learning Methodology</p>
      </div>

      { 
      showYoutube && 
      <div className="absolute top-[10%] z-50 sm:w-[490px]">
      <div className="bg-black p-2 ">
        <div className="flex justify-end text-white p-2">
            <ImCross onClick={()=>{setShowYoutube(false)}}/>
        </div>
        <div className="flex justify-center">
          <YouTubePlayer videoId={v_id} /> 
        </div>
      </div>
    </div>
      }

      <div className="w-11/12 lg:w-3/4 m-auto">
        <div className="mt-5">
          <Slider {...settings}>
            {tutorials.map((tutorial, index) => (

              <div key={index} className="bg-white text-black rounded-xl h-[310px] w-[310px] ">
              <div className="h-45 flex justify-center items-center rounded-t-xl relative" 
                onClick={()=>{playButtonClicked(tutorial.v_id)}}>
                <SiYoutubemusic className="absolute text-[40px] text-red-600"/>
                <img src={tutorial.thumbnail} alt="thumbnail" 
                className="h-45 rounded-t-xl" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-2">
                <p className="text-2xl text-black font-bold text-center">{tutorial.title}</p>
                <p className="text-[18px] text-black text-center">{tutorial.chapter}</p>
              </div>
            </div>

            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Tutorials;
