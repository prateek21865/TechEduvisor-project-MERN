import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 text-center transition-transform transform hover:-translate-y-2">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Standout: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why does PrepsGuide stand out?</h2>
        <p className="text-center text-gray-700 mb-12">Your experience with us goes beyond academics; it's a journey of personal growth, empowerment, and endless opportunities!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Getting Started"
            description="Begin your journey with our easy-to-follow steps and personalized guidance."
            icon={<span role="img" aria-label="rocket" className="text-6xl">🚀</span>}
          />
          <FeatureCard
            title="Counselling Experience"
            description="Receive expert advice and support tailored to your individual needs."
            icon={<span role="img" aria-label="counselling" className="text-6xl">👥</span>}
          />
          <FeatureCard
            title="Post-Admission Support"
            description="Get continuous support and resources even after admission."
            icon={<span role="img" aria-label="support" className="text-6xl">🎓</span>}
          />
          <FeatureCard
            title="Student Life Enrichment"
            description="Engage in activities that enhance your personal and academic life."
            icon={<span role="img" aria-label="enrichment" className="text-6xl">🏛️</span>}
          />
        </div>
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Standout;
