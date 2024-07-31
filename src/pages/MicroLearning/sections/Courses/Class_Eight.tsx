import { useState } from "react";
import SubjectButton from "../../../../components/SubjectButton";
import { lessons } from "./coursesData";
import LessonDetail from "../../../../components/LessonDetailCard";

const Class_Eight = () => {
  const [subject, setSubject] = useState("");

  return (
    <div className="h-[700px]">
      {/* divison for subject button */}
      <div className="flex justify-center items-center gap-10 h-[80px] text-[20px] text-black">
        <SubjectButton
          sub={"Science"}
          subject={subject}
          setSubject={setSubject}
        />
        <SubjectButton
          sub={"Mathematics"}
          subject={subject}
          setSubject={setSubject}
        />
      </div>
      {/* divison for Lesson Details  */}
      <div
        className={`py-2 px-4 h-[590px] mt-2 overflow-hidden hover:overflow-y-auto rounded-lg `}
      >
        {/* for all subject  */}
        {subject === "" && (
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            {lessons.map((lesson) => {
              if (lesson.class === 8) return <LessonDetail lesson={lesson} />;
            })}
          </div>
        )}

        {/* for Science  */}
        {subject === "Science" && (
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            {lessons.map((lesson) => {
              if (lesson.class === 8 && lesson.subject === "Science")
                return <LessonDetail lesson={lesson} />;
            })}
          </div>
        )}

        {/* for Mathematics  */}
        {subject === "Mathematics" && (
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            {lessons.map((lesson) => {
              if (lesson.class === 8 && lesson.subject === "Mathematics")
                return <LessonDetail lesson={lesson} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Class_Eight;
