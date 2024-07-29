
import Slider from "../../../components/AcademicPreparationPage/Corousel/Slider"
import CourseCarousel from "../../../components/AcademicPreparationPage/CourseCarousel/CourseCarousel"
import ExamCategories from "../../../components/AcademicPreparationPage/ExamCategories/ExamCategories"
import FAQ from "../../../components/AcademicPreparationPage/FAQ/FAQ"
import HeroSection from "../../../components/AcademicPreparationPage/HeroSection/HeroSection"
import OnlineClassesHero from "../../../components/AcademicPreparationPage/OnlineClassesHero/OnlineClassesHero"
import TrustedPlatform from "../../../components/AcademicPreparationPage/TrustedPlatform/TrustedPlatform"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"



function AcademicPreparation() {
  return (
    <div>
      <Header />
      <Slider />
      <HeroSection />
      <ExamCategories />
      <OnlineClassesHero />
      <CourseCarousel />
      <TrustedPlatform />
      <FAQ />
      <Footer />
    </div>
  )
}

export default AcademicPreparation
