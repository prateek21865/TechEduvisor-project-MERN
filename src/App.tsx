
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import AcademicPreparation from './pages/sections/AcademicPreparation/AcademicPreparation'
import AcademicMentorship from './pages/sections/AcademicMentorship/AcademicMentorship';
import StudyAbroad from './pages/sections/StudyAbroad/StudyAbroad';





function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<HomePage/>} />
            <Route path="/signup" element={<HomePage/>} />
            <Route path="/ap" element={<AcademicPreparation />} />
            <Route path="/amp" element={<AcademicMentorship />} />
            <Route path="/ssc" element={<HomePage/>} />
            <Route path="/sap" element={<StudyAbroad />} />
            <Route path="/ml" element={<HomePage/>} />
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
