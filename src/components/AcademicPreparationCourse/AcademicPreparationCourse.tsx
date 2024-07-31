import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface CourseFeature {
  title: string;
  description: string;
}

const AcademicPreparationCourse: React.FC<{ examName: string; subjects: string[] }> = ({ examName, subjects }) => {
  const courseFeatures: CourseFeature[] = [
    { title: "LIVE Online Classes", description: "3 hours of daily classes by Expert Teachers" },
    { title: "On-demand Chapter Completion", description: "Voting system for students to choose chapters" },
    { title: "Online Homework Assignments", description: "Includes concept videos, solved examples, and practice problems" },
    { title: "Doubt Clearing Support", description: "Available during and after the class" },
    { title: "Peer Support Groups", description: "Collaborate and learn with fellow students" },
    { title: "Periodic Tests", description: "Regular assessments to track progress" },
    { title: "Monthly Test Series", description: "Comprehensive monthly evaluations" },
    { title: "Subject Handbooks", description: "Detailed guides for each subject" },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About the Academic Preparation Courses</h2>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4">
              PrepsGuide LIVE / Recorded classes for <strong>{examName}</strong> will help students in building a strong foundation in {subjects.join(', ')}.
            </p>
            <p className="mb-4">
              This course is for hard-working students who want to excel at school and also crack competitive exams like {examName}. If you are looking to understand concepts in subjects and to build your problem-solving skills, this course is for you.
            </p>
            <p>
              In this course, students are expected to complete their online assignments prior to their Live classes, which will help in grasping the subject better.
            </p>
          </CardContent>
        </Card>

        <CardHeader>
          <CardTitle className="text-2xl">As part of this course you will get:</CardTitle>
        </CardHeader>
        
        <Accordion type="single" collapsible className="w-full">
          {courseFeatures.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{feature.title}</AccordionTrigger>
              <AccordionContent>
                {feature.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AcademicPreparationCourse;