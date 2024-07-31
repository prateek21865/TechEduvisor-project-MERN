import { lessons } from "./coursesData";
import LessonDetail from "../../../../components/LessonDetailCard";

const All_Courses = () => {
  return (
    <div className="flex flex-wrap gap-4 h-[600px] overflow-hidden hover:overflow-y-auto justify-center mt-6 p-2">
      {lessons.map((lesson) => {
        return <LessonDetail lesson={lesson} />;
      })}
    </div>
  );
};

export default All_Courses;
