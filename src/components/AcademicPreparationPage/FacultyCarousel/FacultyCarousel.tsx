import React from 'react';
import YouTube from 'react-youtube';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { Button } from "../../ui/button";

interface Faculty {
  id: number;
  name: string;
  subject: string;
  introVideoUrl: string;
}

const faculties: Faculty[] = [
  {
    id: 1,
    name: "Praveen Rana Sir",
    subject: "Physics",
    introVideoUrl: "https://www.youtube.com/watch?v=hg5xShBvCY0&list=PLxDKsOSNONZJeWTYJtduhtBe_Tsd4T4Sb",
  },
  {
    id: 2,
    name: "Sahil Khanna Sir",
    subject: "Chemistry",
    introVideoUrl: "https://www.youtube.com/watch?v=tvfyJ179HLI&list=PLxDKsOSNONZJeWTYJtduhtBe_Tsd4T4Sb&index=2",
  },
  {
    id: 3,
    name: "Pratibha Thakur Mam",
    subject: "Biology",
    introVideoUrl: "https://www.youtube.com/watch?v=AERVBWt0RII&list=PLxDKsOSNONZJeWTYJtduhtBe_Tsd4T4Sb&index=3",
  },
  {
    id: 4,
    name: "Vikas Dahiya Sir",
    subject: "Maths",
    introVideoUrl: "https://www.youtube.com/watch?v=M4I2lEgAUP0&list=PLxDKsOSNONZJeWTYJtduhtBe_Tsd4T4Sb&index=4",
  },
  {
    id: 5,
    name: "Pramod Pathak Sir",
    subject: "",
    introVideoUrl: "https://www.youtube.com/",
  },
  {
    id: 6,
    name: "Shivani Suluja Mam",
    subject: "",
    introVideoUrl: "https://www.youtube.com/",
  },
  {
    id: 7,
    name: "Shikhar Sir",
    subject: "",
    introVideoUrl: "https://www.youtube.com/",
  },
  {
    id: 8,
    name: "Ritika Mam",
    subject: "",
    introVideoUrl: "https://www.youtube.com/",
  },
 
];

const extractVideoId = (url: string) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
};

const FacultyCarousel: React.FC = () => {
  const onPlayerReady = (event: any) => {
    event.target.mute();
    event.target.playVideo();
    setTimeout(() => {
      event.target.pauseVideo();
    }, 60000); // 60000 milliseconds = 1 minute
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
      <h2 className="text-3xl font-bold text-center mb-2">Meet Our Expert Faculties</h2>
      <p className="text-xl text-center mb-8">Watch their introduction and get insights into their expertise</p>
      
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {faculties.map((faculty) => (
            <CarouselItem key={faculty.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardHeader className="relative p-0">
                  <YouTube
                    videoId={extractVideoId(faculty.introVideoUrl) || ''}
                    opts={opts}
                    onReady={onPlayerReady}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className='pt-[4rem]'>
                  <h3 className="text-lg font-semibold flex justify-center items-center">{faculty.name}</h3>
                  <p className="text-sm text-gray-600 flex justify-center items-center">{faculty.subject}</p>
                </CardContent>
                <CardFooter className='flex justify-center items-center'>
                  <a href={faculty.introVideoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">Watch Full Introduction</Button>
                  </a>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FacultyCarousel;
