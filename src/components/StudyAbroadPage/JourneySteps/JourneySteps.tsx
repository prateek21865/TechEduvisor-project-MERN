import React from 'react';
import { Button } from '../../ui/button';

const steps = [
  { icon: '🌍', label: 'Discover' },
  { icon: '🧑‍🏫', label: 'Counselling' },
  { icon: '📝', label: 'Shortlist' },
  { icon: '📚', label: 'Exams' },
  { icon: '📄', label: 'Application' },
  { icon: '📨', label: 'Offer letter' },
  { icon: '💵', label: 'Finance' },
  { icon: '🛂', label: 'Visa' },
  { icon: '✈️', label: 'Travel' },
  { icon: '🏫', label: 'On Campus' },
];

const JourneySteps: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Get started on your journey to Study Abroad!</h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
      PrepsGuide offers a one stop solution to all the steps you require in order to explore, shortlist, and get started for your journey abroad and even beyond that.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-md text-4xl">
              {step.icon}
            </div>
            <span className="mt-2 text-gray-700">{step.label}</span>
          </div>
        ))}
      </div>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg">
        Get Started
      </Button>
    </div>
  );
};

export default JourneySteps;
