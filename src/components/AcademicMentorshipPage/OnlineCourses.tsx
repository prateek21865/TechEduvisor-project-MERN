import React from 'react';
import YouTube from 'react-youtube';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

interface Course {
  id: number;
  title: string;
  subject: string;
  videoUrl: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Base Catalysed Tautomerism",
    subject: "Organic Chemistry",
    videoUrl: "https://www.youtube.com/watch?v=r_07ABpyTXs",
  },
  {
    id: 2,
    title: "Le Chatelier's Principle",
    subject: "Chemical Equilibrium",
    videoUrl: "https://www.youtube.com/watch?v=mFW195Wi8r0",
  },
  {
    id: 3,
    title: "Modulation",
    subject: "Physics",
    videoUrl: "https://www.youtube.com/watch?v=58dxTiO5Q-k",
  },
  {
    id: 4,
    title: "Communication System",
    subject: "Physics",
    videoUrl: "https://www.youtube.com/watch?v=rh6DibIIiuA",
  },
  {
    id: 5,
    title: " Kinetic theory of Gases",
    subject: "Physics",
    videoUrl: "https://www.youtube.com/watch?v=I_6ESIOcKkw",
  },
];

const extractVideoId = (url: string) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
};

const OnlineCourses: React.FC = () => {
  const onPlayerReady = (event: any) => {
    event.target.mute();
    event.target.playVideo();
    setTimeout(() => {
      event.target.pauseVideo();
    }, 60000); // 10000 milliseconds = 10 seconds
  };

  const opts = {
    height: '240',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      fs: 0,
      cc_load_policy: 0,
      iv_load_policy: 3,
      autohide: 1,
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2">Get access to the best Online Courses</h2>
      <p className="text-xl text-center mb-8">Experience our Unique Learning Methodology</p>
      
      <Carousel className="w-full max-w-5xl mx-auto"
      
      
      >
        <CarouselContent>
          {courses.map((course) => (
            <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardHeader className="relative p-0">
                <YouTube
                    videoId={extractVideoId(course.videoUrl) || ''}
                    opts={opts}
                    onReady={onPlayerReady}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className='pt-[4rem]'>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.subject}</p>
                 
                </CardContent>
                <CardFooter className="">
                <a href={course.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">Watch Video</Button>
                  </a>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center mt-8">
    <Button  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-lg">
      REGISTER FOR A SAMPLE LESSON
    </Button>
  </div>
    </div>
  );
};

export default OnlineCourses;
