import React from "react";

interface ClassButtonProps {
  c: number;
  standard: number;
  setStandard: React.Dispatch<React.SetStateAction<number>>;
}

const ClassButton: React.FC<ClassButtonProps> = ({
  c,
  standard,
  setStandard,
}) => {
  return (
    <button
      className={`w-[120px] h-[50px] max-md:w-[84px] max-md:h-[35px] max-md:text-[14px] text-center py-2 rounded-lg ${
        standard === c
          ? "bg-[#0e2d42] text-yellow-400"
          : "bg-slate-100 text-black"
      }`}
      onClick={() => {
        setStandard(c);
      }}
    >
      Class {c}
    </button>
  );
};

export default ClassButton;
