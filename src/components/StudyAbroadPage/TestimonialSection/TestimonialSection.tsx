// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";
// import { Card, CardContent } from "../../ui/card";

// interface Testimonial {
//   title: string;
//   content: string;
//   name: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     title: "Amazing Platform!",
//     content: "PrepsGuide is an amazing platform for solving my problems related to my exam, mentorship, and career guidance, they helped and guided me in an effective and easier way. In one word, Satisfied!",
//     name: "Aman Garg",
//   },
//   {
//     title: "Wonderful Platform!",
//     content: "It's a wonderful platform that covers different career related fields. It's an easy to use which feed you with knowledgeable content daily:)",
//     name: "Ankush Singhania",
//   },
//   {
//     title: "Helpful Platform!",
//     content: "A helpful platform for students. Easy to use and covers multiple things.",
//     name: "Harmandeep Kaur",
//   },
//   {
//     title: "Excellent Counseling!",
//     content: "Counseling session was excellent. It gives a very clear picture of what would be the right strategy to be followed to achieve your goal.l really like this platform...",
//     name: "Krish Singh",
//   },
//   {
//     title: "Useful Platform!",
//     content: "It is a very useful platform for academic help.. There are so many interesting sessions with mentors, and videos that will surely help students to choose the right direction :)",
//     name: "Miss Myra",
//   },
//   {
//     title: "Awesome Experience!",
//     content: "My experience with PrepsGuide was very awesome. This platform helped me to choose a right career plan for myself. This is an excellent platform where everyone get guidance of all streams and career options.",
//     name: "Shashwat",
//   },
// ];

// const TestimonialSection: React.FC = () => {
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-2"> Students Testimonials </h2>
//         <p className="text-center text-gray-600 mb-12">Hear from our students</p>
        
//         <Carousel className="w-full">
//           <CarouselContent>
//             {testimonials.map((testimonial, index) => (
//               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
//                 <Card className="border-none shadow-lg h-72 flex flex-col justify-between">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-semibold mb-3">{testimonial.title}</h3>
//                     <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
//                     <div className="flex items-center">
//                       <span className="font-medium text-gray-800">{testimonial.name}</span>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md" />
//           <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md" />
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";
import { Avatar } from "../../ui/avatar";
import { Card, CardContent } from "../../ui/card";
import { FaQuoteLeft } from 'react-icons/fa'; // Make sure to install react-icons

interface Testimonial {
  content: string;
  name: string;
  avatarSrc: string;
}

const testimonials: Testimonial[] = [
  {
    content: "PrepsGuide is an amazing platform for solving my problems related to my exam, mentorship, and career guidance, they helped and guided me in an effective and easier way. In one word, Satisfied!",
    name: "Aman Garg",
    avatarSrc: "studentTestimonials/aman_garg.jpeg"
  },
  {
    content: "It's a wonderful platform that covers different career related fields. It's an easy to use which feed you with knowledgeable content daily:)",
    name: "Ankush Singhania",
    avatarSrc: "studentTestimonials/ankush_singhania.jpeg"
  },
  {
    content: "A helpful platform for students. Easy to use and covers multiple things.",
    name: "Harmandeep Kaur",
    avatarSrc: "studentTestimonials/harmandeep.jpeg"
  },
  {
    content: "Counseling session was excellent. It gives a very clear picture of what would be the right strategy to be followed to achieve your goal. I really like this platform...",
    name: "Krish Singh",
    avatarSrc: "studentTestimonials/krish_singh.jpeg"
  },
  {
    content: "It is a very useful platform for academic help.. There are so many interesting sessions with mentors, and videos that will surely help students to choose the right direction :)",
    name: "Miss Myra",
    avatarSrc: "studentTestimonials/miss_myra.jpeg"
  },
  {
    content: "My experience with PrepsGuide was very awesome. This platform helped me to choose a right career plan for myself. This is an excellent platform where everyone get guidance of all streams and career options.",
    name: "Shashwat",
    avatarSrc: "studentTestimonials/shashwat.jpeg"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Students Testimonials</h2>
        <p className="text-center text-gray-600 mb-12">Hear from our students</p>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="border-none shadow-lg h-[22rem] flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <FaQuoteLeft className="text-orange-500 text-4xl mb-4" />
                    <p className="text-gray-600 flex-grow">{testimonial.content}</p>
                    <div className="flex items-center mt-4">
                      <Avatar className="h-10 w-10 mr-3">
                        <img src={testimonial.avatarSrc} alt={testimonial.name} />
                      </Avatar>
                      <span className="font-medium">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;





