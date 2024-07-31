// import React from 'react';
// import { Card, CardHeader, CardContent, CardFooter } from '../../ui/card';
// import { Button } from '../../ui/button';

// interface Teacher {
//   name: string;
//   subject: string;
//   bio: string;
//   image: string;
// }

// const teachers: Teacher[] = [
//   {
//     name: 'Pramod Pathak Sir',
//     subject: 'Mathematics',
//     bio: 'John has a PhD in Mathematics and 10 years of teaching experience.',
//     image: 'faculties/pramod_pathak.png',
//   },
//   {
//     name: 'Ritika Mam',
//     subject: 'Physics',
//     bio: 'Jane specializes in Quantum Physics and has been teaching for 8 years.',
//     image: 'faculties/ritika_mam.png',
//   },
//   {
//     name: 'Shikhar Sir',
//     subject: 'Chemistry',
//     bio: 'Sam is an expert in Organic Chemistry with a passion for education.',
//     image: 'faculties/shikhar_sir.png',
//   },
//   {
//     name: 'Shivani Saluja Mam',
//     subject: 'Chemistry',
//     bio: 'Sam is an expert in Organic Chemistry with a passion for education.',
//     image: 'faculties/shivani_saluja.png',
//   },
// ];

// const AboutTeachers: React.FC = () => {
//   return (
//     <div className="py-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-8">Meet Our Teachers</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {teachers.map((teacher, index) => (
//           <Card key={index} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
//             <CardHeader className="flex items-center justify-center bg-gray-200">
//               <img src={teacher.image} alt={teacher.name} className="w-32 h-32 rounded-full object-cover" />
//             </CardHeader>
//             <CardContent className="p-4">
//               <h3 className="text-xl font-semibold">{teacher.name}</h3>
//               <p className="text-gray-600">{teacher.subject}</p>
//               <p className="mt-2 text-gray-600">{teacher.bio}</p>
//             </CardContent>
//             <CardFooter className="flex justify-center p-4">
//               <Button className="bg-blue-500 hover:bg-blue-600 text-white">Read More</Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutTeachers;


import React from 'react';
import { Card, CardContent } from '../../ui/card';

interface Teacher {
  name: string;
  image: string;
}

const teachers: Teacher[] = [
  {
    name: 'Pramod Pathak Sir',
    image: 'faculties/pramod_pathak.png',
  },
  {
    name: 'Ritika Mam',
    image: 'faculties/ritika_mam.png',
  },
  {
    name: 'Shikhar Sir',
    image: 'faculties/shikhar_sir.png',
  },
  {
    name: 'Shivani Saluja Mam',
    image: 'faculties/shivani_saluja.png',
  },
];

const AboutTeachers: React.FC = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Expert Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <Card key={index} className="border-none shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="aspect-w-1 aspect-h-1 w-full h-48 flex items-center justify-center">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-center text-gray-800">{teacher.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutTeachers;



