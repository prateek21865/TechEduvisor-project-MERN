import AboutAcademicMentorship from "../../../components/AcademicMentorshipPage/AboutAcademicMentorship"

import HeroSection from "../../../components/AcademicMentorshipPage/HeroSection"
import LearningMethodology from "../../../components/AcademicMentorshipPage/LearningMethodology"
import Mentors from "../../../components/AcademicMentorshipPage/Mentors"
import OnlineCourses from "../../../components/AcademicMentorshipPage/OnlineCourses"
import FAQ from "../../../components/AcademicPreparationPage/FAQ/FAQ"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"


function AcademicMentorship() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutAcademicMentorship />
     <OnlineCourses />
     <FAQ />
     <Mentors />
     <LearningMethodology />
      <Footer />
    </div>
  )
}

export default AcademicMentorship
