import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion"

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Prepsguide?",
    answer: "PrepsGuide, a leading educational platform, has garnered a vast student community and continues to elevate educational standards. Dedicated to meeting student needs with exceptional faculty support, PrepsGuide emphasizes affordability amidst the financial constraints of online learning."
  },
  {
    question: "What are the services provided to students by the PrepsGuide?",
    answer: "Students can easily search for and connect directly with faculties and mentors aligned with their chosen career paths using our platform. Additionally, PrepsGuide offers comprehensive preparation for competitive exams such as JEE, NEET, NDA, and CBSE Board exams. Our services also include soft skills courses and guidance for studying abroad, ensuring well-rounded support for all students' educational needs.",
  },
  {
    question: "What is the refund policy of the prepsguide?",
    answer: "If you face any issues/problems with the service and would like a refund please write to us at help@prepsguide.com and our team will assist you further."
  },
  {
    question: "Which indian areas do we serve?",
    answer: "All users in India are welcome to utilise Prepsguide."
  },
  {
    question: "Can student get their doubts clarified during the Live class?",
    answer: "Yes, teachers will address students doubts instantly during the Live class and after the live class."
  },
 
];

const FAQ: React.FC = () => {
  return (
    <div className="bg-[#0E2D42] text-white py-16 px-4">
      <div className="max-w-[80rem] mx-auto">
      <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
     
        <Accordion 
          type="multiple" 
          
          className="space-y-4"
          defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5", "item-6"]}
        >
          {faqData.map((item, index) => (
            <AccordionItem 
            
              key={`item-${index + 1}`} 
              value={`item-${index + 1}`}
              className="border-b border-white/30 pb-4 "
            >
              <AccordionTrigger className="text-xl font-bold hover:no-underline text-start">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base mt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
