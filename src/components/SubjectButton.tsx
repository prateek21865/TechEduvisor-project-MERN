import React from "react";

interface SubjectButtonProps {
  sub: string;
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
}

const SubjectButton: React.FC<SubjectButtonProps> = ({
  sub,
  subject,
  setSubject,
}) => {
  return (
    <button
      className={`w-[150px] h-[50px] max-md:w-[96px] max-md:h-[35px] max-md:text-[14px] text-center py-2 rounded-lg ${
        subject === sub
          ? "bg-[#0e2d42] text-yellow-400"
          : "bg-slate-100 text-black"
      }`}
      onClick={() => {
        setSubject(sub);
      }}
    >
      {sub}
    </button>
  );
};

export default SubjectButton;
