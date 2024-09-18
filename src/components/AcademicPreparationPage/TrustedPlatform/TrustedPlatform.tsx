







import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faClipboardCheck, faVideo, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

interface StatisticProps {
  icon: any;
  bgColor: string;
  textColor: string;
  label: string
}

const Statistic: React.FC<StatisticProps> = ({ label, icon, bgColor, textColor }) => (
  <Card className={`${bgColor} p-4 flex flex-col items-center justify-center h-full`}>
    <CardContent className="text-center p-6">
      <FontAwesomeIcon icon={icon} className={`${textColor} text-4xl mb-2`} />
      
      <p className={`${textColor} text-sm`}>{`${label}`}</p>
    </CardContent>
  </Card>
);

const TrustedPlatform: React.FC = () => {
  const statistics = [
    {label:"Happy student", icon: faSmile, bgColor: "bg-[#F3DCBF]", textColor: "text-[#E7A756]" },
    {label:"Mock Tests", icon: faClipboardCheck, bgColor: "bg-[#F5CDCD]", textColor: "text-[#EE7474]" },
    {label:"Video Lectures", icon: faVideo, bgColor: "bg-[#C4D9F5]", textColor: "text-[#619CEB]" },
    {label:"Practice Papers", icon: faFileAlt, bgColor: "bg-[#E5D5F4]", textColor: "text-[#AE70E8]" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
        The best platform for IIT-JEE, NEET, NDA, CBSE
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        PrepsGuide, a leading educational platform, has garnered a vast student community and continues to elevate educational standards. Dedicated to meet student needs with exceptional faculty support, PrepsGuide emphasizes affordability amidst the financial constraints of online learning.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statistics.map((stat, index) => (
          <Statistic key={index} {...stat} />
        ))}
      </div>
      <div className="text-center">
        <Button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default TrustedPlatform;
