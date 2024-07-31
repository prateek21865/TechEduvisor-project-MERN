import React from "react";

// Define the type for the lesson data
interface Lesson {
  class: number;
  subject: string;
  topic: string;
}

// Define the props interface for the component
interface LessonProps {
  lesson: Lesson;
}

// Create the component
const LessonDetail: React.FC<LessonProps> = ({ lesson }) => {
  return (
    <div className=" overflow-hidden rounded-xl shadow-md w-[300px] h-[480px] m-3">
      <div>
        <img
          src="https://img.freepik.com/free-photo/corporate-businessman-giving-presentation-large-audience_53876-101865.jpg?ga=GA1.1.501599750.1689259241&semt=sph"
          alt="lecture_pic"
          className="w-[300px] h-[180px] object-cover object-center"
        />
      </div>
      <div className="flex flex-col h-[300px] w-[300px] p-2 text-black text-[18px]">
        <h5>Class {lesson.class}</h5>
        <h3 className="text-2xl h-[75px] font-semibold">{lesson.topic}</h3>
        <ul className="list-disc pl-8 text-slate-700">
          <li>Live Concept Lectures</li>
          <li>Problem Practice Sheet</li>
          <li>Doubt Clearing Support</li>
          <li>Chapter Notes</li>
          <li>PYQs</li>
        </ul>
        <div className="content-center text-center mt-2">
          <button className="bg-[#0e2d42] p-2 text-[15px] text-yellow-400 rounded-lg">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
