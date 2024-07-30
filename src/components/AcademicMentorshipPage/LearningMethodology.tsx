import React from 'react';
import { Button } from "../ui/button";

const LearningMethodology: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Discover Our Innovative Teaching Approach</h2>
      <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-lg mb-8">
        SIGN UP FOR A FREE TRIAL CLASS
      </Button>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Enhance your educational journey with PrepsGuide's expert-led video lessons, specifically designed for students 
        preparing for competitive exams like JEE, NEET, and CBSE grades 9 to 12. Our dedicated team provides top-quality 
        education through our comprehensive video courses, guided by skilled instructors. These courses are tailored to 
        meet the varied requirements of students aiming for excellence in JEE, NEET, and CBSE curricula.
      </p>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mt-4">
        Our mentored learning program provides customized guidance, catering to individual learning needs and challenges, 
        ensuring a deeper grasp of subjects. Choose PrepsGuide to not only boost your performance in JEE, NEET, and CBSE 
        subjects but also to lay a strong foundation for your future academic pursuits.
      </p>
    </div>
  );
};

export default LearningMethodology;