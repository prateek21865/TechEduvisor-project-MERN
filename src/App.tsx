
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import SoftSkillsProgram from "./pages/SoftSkills/SoftSkillsProgram";
import AcademicPreparation from './pages/sections/AcademicPreparation/AcademicPreparation'
import AcademicMentorship from './pages/sections/AcademicMentorship/AcademicMentorship';


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
          <Route path="/ssc" element={<SoftSkillsProgram />} />
            <Route path="/sap" element={<HomePage/>} />
            <Route path="/ml" element={<HomePage/>} />
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
