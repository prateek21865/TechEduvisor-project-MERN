// import React from 'react';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../ui/carousel";

// interface Teacher {
//   name: string;
//   imageUrl: string;
  
// }

// const teachers: Teacher[] = [
//   { name: "Pramod Pathak Sir", imageUrl: "faculties/pramod-pathak-sir.png" },
//   { name: "Ritika Mam", imageUrl: "faculties/ritika-mam.png" },
//   { name: "Shikhar Sir", imageUrl: "faculties/shikhar-sir.png" },
//   { name: "Shivani Saluja", imageUrl: "faculties/shivani-saluja.png" },
// ];

// const Mentors: React.FC = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h2 className="text-4xl font-bold text-center mb-10">Learn from India's Best Teachers</h2>
      
//       <Carousel className="w-full max-w-7xl mx-auto">
//         <CarouselContent className="-mx-2">
//           {teachers.map((teacher, index) => (
//             <CarouselItem key={index} className="px-2 basis-1/4">
//               <div className="flex flex-col items-center">
//                 <div className="w-56 h-56 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
//                   <img src={teacher.imageUrl} alt={teacher.name} className="w-full h-full object-cover" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-center">{teacher.name}</h3>
//                 {/* <p className="text-red-500 text-center">{teacher.subject}</p> */}
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="left-0" />
//         <CarouselNext className="right-0" />
//       </Carousel>
//     </div>
//   );
// };

// export default Mentors;



import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Teacher {
  name: string;
  imageUrl: string;
}

const teachers: Teacher[] = [
  { name: "Abhik Sir", imageUrl: "mentors/Abhik.jpeg" },
  { name: "Chahat Mam", imageUrl: "mentors/Chahat.jpeg" },
  { name: "Dr. Muskan Mam", imageUrl: "mentors/Dr. Muskan.png" },
  { name: "Menus Mam", imageUrl: "mentors/Menus.jpeg" },
  { name: "Piyush Goal Sir", imageUrl: "mentors/Piyush Goal.jpeg" },
  { name: "Stuti Ajmera Mam", imageUrl: "mentors/Stuti Ajmera.jpeg" },
];

const Mentors: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10">Learn from India's Best Teachers</h2>
      
      <Carousel className="w-full max-w-7xl mx-auto">
        <CarouselContent className="-mx-2">
          {teachers.map((teacher, index) => (
            <CarouselItem key={index} className="px-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="flex flex-col items-center ">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 border-4 border-gray-200 bg-[#EDEDED]">
                  <img src={teacher.imageUrl} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-center">{teacher.name}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default Mentors;