import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";

const FounderSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <Card className="w-full max-w-7xl mx-auto border-4 border-orange-300">
        <CardHeader>
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
          <div className="md:w-2/3 pt-16">
            <p className="text-gray-700 mb-4 text-lg">
              Dr. Pramod Pathak, with a Ph.D. in Chemistry from Delhi University, has 24 years of experience in education. Founder of <span className="font-semibold">PrepsGuide, Vidyakul Next Gen Education, and Vidyapreps</span>, he has impacted over <span className="font-semibold">100,000</span> students through prestigious institutes like <span className="font-semibold">FIITJEE, Career Point, and Aakash</span>.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              His work has shaped the Indian EdTech landscape, reflecting his commitment to democratizing quality education and creating synergies across educational platforms. Throughout his career, he has directly impacted the lives of over 100,000 students, cementing his reputation as a dedicated educator and mentor.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FounderSection;
