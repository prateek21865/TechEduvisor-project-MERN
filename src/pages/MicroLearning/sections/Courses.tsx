import { useState } from "react";
import ClassButton from "../../../components/ClassButton";
import Class_Eight from "./Courses/Class_Eight";
import Class_Twelfth from "./Courses/Class_Twelfth";
import Class_Eleventh from "./Courses/Class_Eleventh";
import Class_Ten from "./Courses/Class_Ten";
import Class_Ninth from "./Courses/Class_Ninth";
import All_Courses from "./Courses/All_Courses";

const Courses = () => {
  const [standard, setStandard] = useState(0);

  return (
    <div className="p-6">
      <div className="flex justify-center items-center gap-4 md:gap-10 h-[80px] text-[20px] text-black">
        <ClassButton c={8} standard={standard} setStandard={setStandard} />
        <ClassButton c={9} standard={standard} setStandard={setStandard} />
        <ClassButton c={10} standard={standard} setStandard={setStandard} />
        <ClassButton c={11} standard={standard} setStandard={setStandard} />
        <ClassButton c={12} standard={standard} setStandard={setStandard} />
      </div>
      <div>
        {standard === 0 && <All_Courses />}
        {standard === 8 && <Class_Eight />}
        {standard === 9 && <Class_Ninth />}
        {standard === 10 && <Class_Ten />}
        {standard === 11 && <Class_Eleventh />}
        {standard === 12 && <Class_Twelfth />}
      </div>
    </div>
  );
};

export default Courses;
