import Accordian from "../../../components/Accordian";

const faqData = [
  {
    question:
      "Are the PrepsGuide courses suitable for CBSE/ICSE school syllabus?",
    answer:
      "This course will help students who study in CBSE as well as in ICSE board. It will also help students who are preparing for JEE and NEET and other competitive examinations.",
  },
  {
    question: "How beneficial are the Micro Courses for students?",
    answer:
      "Micro Courses help students to master specific topics that they find difficult, one topic at a time, at their own pace. Our research team focuses on how every topic can be made interesting and realistic in order to build the concepts, problem solving skills and confidence",
  },
  {
    question: "Can I download the videos?",
    answer:
      "Sorry, you will not be able to download the videos or questions from the course. You need to be connected to the internet to view the videos, answer questions and to access the tests and video solutions.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Unfortunately, we do not entertain refund requests for Micro Courses.",
  },
];

const FAQ = () => {
  return (
    <div className=" pt-2 pb-8">
      <div className="max-w-[100%] mx-6">
        <h2 className="text-[40px] max-md:text-[32px] font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        {faqData.map((item) => {
          return <Accordian question={item.question} answer={item.answer} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
