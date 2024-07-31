// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
// import { Badge } from "../../ui/badge";

// const FounderSection: React.FC = () => {
//   return (
//     <Card className="max-w-4xl mx-auto my-8 bg-orange-50 border-[#994C00]">
//       <CardHeader>
//         <CardTitle className="text-3xl font-bold text-orange-600">
//           Meet Our Founder
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/3">
//           <img
//             src="pramod_pathak.png"
//             alt="Dr. Pramod Pathak"
//             width={300}
//             height={300}
//             className="rounded-lg shadow-lg"
//           />
//           <h2 className="text-2xl font-semibold mt-4 text-orange-800">Dr. Pramod Pathak</h2>
//           <Badge variant="secondary" className="mt-2 bg-orange-200 text-orange-800">
//             Founder & CEO
//           </Badge>
//         </div>
//         <div className="md:w-2/3">
//           <p className="text-gray-700 mb-4">
//             Dr. Pramod Pathak holds a Ph.D. in Chemistry from Delhi University, bringing a strong academic foundation to his entrepreneurial ventures. His journey in education began long before founding PrepsGuide, as he previously established two successful companies, Vidyakul Next Gen Education and Vidyapreps.
//           </p>
//           <p className="text-gray-700 mb-4">
//             With an impressive 24-year tenure in education, Dr. Pathak has left an indelible mark on the Indian educational landscape. His experience spans some of the most prestigious coaching institutes in the country, including FIITJEE, Allen, Career Point, and Aakash.
//           </p>
//           <p className="text-gray-700">
//             Throughout his career, he has directly impacted the lives of over 100,000 students across various platforms, cementing his reputation as a dedicated educator and mentor. This strategic positioning has not only expanded his influence in the EdTech sector but also demonstrates his ability to create synergies between different educational platforms, ultimately benefiting a wider student base.
//           </p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default FounderSection;





import React from 'react';
// import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";

const FounderSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <Card className="w-full max-w-7xl mx-auto border-4 border-orange-300">
        <CardHeader className="">
          <CardTitle className="text-4xl font-bold text-orange-600 text-center">
            Meet Our Founder
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8 p-6">
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              src="/faculties/pramod_pathak.png"
              alt="Dr. Pramod Pathak"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-semibold mt-4 text-orange-800">Dr. Pramod Pathak</h2>
            <Badge variant="secondary" className="mt-2 bg-orange-200 text-orange-800">
              Founder & CEO
            </Badge>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-4 text-lg">
              Dr. Pramod Pathak holds a Ph.D. in Chemistry from Delhi University, bringing a strong academic foundation to his entrepreneurial ventures. His journey in education began long before founding PrepsGuide, as he previously established two successful companies, Vidyakul Next Gen Education and Vidyapreps.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              With an impressive 24-year tenure in education, Dr. Pathak has left an indelible mark on the Indian educational landscape. His experience spans some of the most prestigious coaching institutes in the country, including FIITJEE, Allen, Career Point, and Aakash.
            </p>
            <p className="text-gray-700 text-lg">
              Throughout his career, he has directly impacted the lives of over 100,000 students across various platforms, cementing his reputation as a dedicated educator and mentor. This strategic positioning has not only expanded his influence in the EdTech sector but also demonstrates his ability to create synergies between different educational platforms, ultimately benefiting a wider student base.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FounderSection;