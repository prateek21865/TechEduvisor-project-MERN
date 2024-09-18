
import HeroSection from '../../../components/StudyAbroadPage/HeroSection/HeroSection'
import Header from '../../../components/Header'
import Standout from '../../../components/StudyAbroadPage/Standout/Standout'
import JourneySteps from '../../../components/StudyAbroadPage/JourneySteps/JourneySteps'
// import AboutTeachers from '../../../components/StudyAbroadPage/AboutTeachers/AboutTeachers'
import AboutTeachersDemoVideos from '../../../components/StudyAbroadPage/AboutTeachersDemoVideos/AboutTeachersDemoVideos'
import TestimonialSection from '../../../components/StudyAbroadPage/TestimonialSection/TestimonialSection'
import FounderSection from '../../../components/StudyAbroadPage/FounderSection/FounderSection'

import Footer from '../../../components/Footer'
import FAQStudyAbroad from '../../../components/StudyAbroadPage/FAQStudyAbroad/FAQStudyAbroad'
import Founder from '../../HomePage/sections/Founder'

function StudyAbroad() {
  return (
    <div>
        <Header />
        <HeroSection />
        <JourneySteps />
        <Standout />
        {/* <AboutTeachers /> */}
        <AboutTeachersDemoVideos />
        <TestimonialSection />
        <FounderSection />
        {/* <Founder /> */}
        <FAQStudyAbroad />
        <Footer />
    </div>
  )
}

export default StudyAbroad
