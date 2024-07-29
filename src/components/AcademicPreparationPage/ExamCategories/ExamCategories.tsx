import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";

const ExamCategories: React.FC = () => {
  const categories = [
    {
      title: "NEET",
      classes: ["class 11", "class 12", "Dropper"],
      icon: "🧬", // Replace with actual icon component
      color: "bg-red-100",
    },
    {
      title: "IIT JEE",
      classes: ["class 11", "class 12", "Mains", "Dropper"],
      icon: "⚛️", // Replace with actual icon component
      color: "bg-yellow-100",
    },
    {
      title: "School Preparation",
      classes: ["class 9", "class 10", "class 11", "class 12"],
      icon: "🎒", // Replace with actual icon component
      color: "bg-green-100",
    },
    {
      title: "Defence",
      classes: ["NDA"],
      icon: "🛡️", // Replace with actual icon component
      color: "bg-indigo-100",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-2">Exam Categories</h1>
      <p className="text-center mb-8">
        PW is preparing students for 18 exam categories. Scroll down to find the one you are preparing for
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card 
            key={index} 
            className="relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.classes.map((cls, idx) => (
                  <Badge key={idx} variant="secondary">{cls}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Explore Category <span className="ml-2">→</span>
              </Button>
            </CardFooter>
            <div 
              className={`absolute right-0 top-0 bottom-0 w-1/5 ${category.color} rounded-l-full transform transition-colors duration-300 group-hover:bg-opacity-75`}
            >
              <div className="absolute right-4 top-1/2 transform -translate-y-1/3 text-4xl">
                {category.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExamCategories;
