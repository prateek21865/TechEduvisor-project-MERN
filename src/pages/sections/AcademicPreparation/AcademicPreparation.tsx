
import Slider from "../../../components/Corousel/Slider"
import CourseCarousel from "../../../components/CourseCarousel/CourseCarousel"
import ExamCategories from "../../..//components/ExamCategories/ExamCategories"
import FAQ from "../../../components/FAQ/FAQ"
import HeroSection from "../../../components/HeroSection/HeroSection"
import OnlineClassesHero from "../../../components/OnlineClassesHero/OnlineClassesHero"
import TrustedPlatform from "../../../components/TrustedPlatform/TrustedPlatform"
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
