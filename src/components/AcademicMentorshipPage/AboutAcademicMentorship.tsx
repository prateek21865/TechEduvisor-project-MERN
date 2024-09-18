import React from 'react';

const benefits = [
  { title: 'Live Mentorship / Guidance Sessions', icon: '📚' },
  { title: 'Live Counselling Sessions', icon: '🧑‍🏫' },
  { title: 'Personalized Study Plan', icon: '📅' },
  { title: 'Daily Practice Problems (DPPs)', icon: '📄' },
  { title: 'Toppers Notes', icon: '📘' },
  { title: 'DPPs Solutions', icon: '✅' },
  { title: 'Periodic Test Series', icon: '📝' },
  { title: 'AIR Prediction', icon: '📈' },
  { title: 'Online Doubt Support', icon: '💬' },
  { title: 'Toppers\'s Talk', icon: '🏆' },
  { title: 'Student Performance Analysis', icon: '📊' },
  { title: 'Career Roadmaps', icon: '🚀' },
  { title: 'Live Test Series Evaluation With Mentors', icon: '🧪' },
  { title: '24*7 Student Support', icon: '📞' },
  { title: 'Plan validity 1 Year', icon: '📅' },
];

const AboutAcademicMentorship: React.FC = () => {
  return (
    <div className="w-full py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center mx-auto'>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 mx-auto">About Academic Mentorship Program</h2>
        <p className="text-lg text-gray-700 mb-8 mx-auto">
          This section contains the batches launched on the platform for the Academic Mentorship and Career Counseling.
        </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4 transform transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">
                  Detailed description or additional information about {benefit.title}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAcademicMentorship;
