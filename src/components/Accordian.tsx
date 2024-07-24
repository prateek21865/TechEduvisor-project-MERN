import { SpaRounded } from "@mui/icons-material";
import React from "react";

interface DynamicProps {
  question: string;
  answer: string;
}

const Accordian: React.FC<DynamicProps> = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="py-2 h-auto  mt-2 p-2 text-[20px] max-md:text-[15px] rounded-lg shadow-md">
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex justify-between w-full text-wrap"
      >
        <span className="text-left">Q. {question}</span>
        {open ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
      >
        {open && (
          <div className="overflow-hidden font-semibold py-2 pl-6">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
