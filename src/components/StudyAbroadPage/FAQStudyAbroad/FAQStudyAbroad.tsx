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
    question: "What is the PrepsGuide Study Abroad Program?",
    answer: "The PrepsGuide Study Abroad Program offers a comprehensive resource and guide to students seeking to study in international institutions. It offers assistance in application processes, visa requirements, and scholarships."
  },
  {
    question: "What type of support does PrepsGuide offer in foreign studies?",
    answer: "The support provided by PrepsGuide ranges from University Selection and Application Guidance, to Essay and SoP Writing, Interview Preparation, Visa Support, and also information about Scholarship and Financial Aid.",
  },
  {
    question: "How to choose appropriate universities and courses?",
    answer: "PrepsGuide provides personalized counseling to get the right 'fit' university and course matching your academic interest, career goals, and budget. Our counselors can recommend options based on your preference and academic profile."
  },
  {
    question: "How long does it take to apply?",
    answer: "The university and the type of program are the factors which could make it take anytime. Concretely, it takes some months for the whole procedure of application, preparation of documents, essay writing, and receipt of recommendations."
  },
  {
    question: "What are the requirements of a visa to go abroad for studies?",
    answer: "Visa requirements are destination country-specific and also program type-specific. Your PrepsGuide counselor will give detailed information about visa requirements and will assist you in applying."
  },
 
];

const FAQStudyAbroad: React.FC = () => {
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

export default FAQStudyAbroad;
