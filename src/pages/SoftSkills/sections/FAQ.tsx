import Accordian from "../../../components/Accordian";

const faqData = [
  {
    question:
      "What is the duration of the Data Science with Generative AI course?",
    answer: "The course spans three months from the start date.",
  },
  {
    question: "Will I receive a certificate upon completion of the course?",
    answer:
      "Yes, you will receive a certificate upon successful completion of the course. To qualify, you must complete at least 60% of the lectures and assignments and finish the projects / practicles as per CBSE Curriculum.",
  },
  {
    question: "What kind of support will I receive during the course?",
    answer:
      "We are here to support you throughout your learning journey with us. If you encounter any issues, feel free to contact PrepsGuide Support team. Most questions are addressed in our FAQs. If you don't find an answer. You can  reach out to us via email at support@prepsguide.com.",
  },
  {
    question: "Will there be hands-on projects?",
    answer:
      "This course includes relevant hands-on projects as per CBSE, along with a capstone project, to ensure you fully understand how to apply your knowledge in practical scenarios.",
  },
  {
    question: "Can I access the course material after completion?",
    answer:
      "Yes, you will have access to the course for one year. During this time, you are welcome to revisit the videos as often as you like until your access expires.",
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
