import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KeyFeatureSection from "./sections/KeyFeatureSection";
import Teachers from "./sections/Teachers";
import WhyUs from "./sections/WhyUs";
import Tutorials from "./sections/Tutorials";
import Founder from "./sections/Founder";
import StudentsTestimonials from "./sections/StudentsTestimonials";
import AcademicPreparations from "./sections/AcademicPreparations";
import FAQ from "./sections/FAQ";
import AcademicMentorshipProgram from "./sections/AcademicMentorshipProgram";
import SkillsProgram from "./sections/SkillProgram";
import StudyAbroad from "./sections/StudyAbroad";
import HeadingSection from "./sections/HeadingSection";
import FounderSection from "../../components/StudyAbroadPage/FounderSection/FounderSection";


const HomePage = () => {
  return (
    <>
      <Header />

      <main className="mt-[70px]">
        {/* new section starts here */}
        <section>
          <HeadingSection />
        </section>

        {/* key feature section starts here */}
        <section>
          <KeyFeatureSection />
        </section>

        {/* AcademicPreparations section */}
        <section>
          <AcademicPreparations />
        </section>

        {/* AcademicMentorshipProgram section */}
        <section>
          <AcademicMentorshipProgram />
        </section>

        {/* skills program section */}
        <section>
          <SkillsProgram />
        </section>

        {/* study abroad section */}
        <section>
          <StudyAbroad />
        </section>

        {/* learn from best teachers */}
        <section>
          <Teachers />
        </section>

        {/* tutorials section starts Here */}
        <section>
          <Tutorials />
        </section>

        {/* FAQ sections */}
        <section>
          <FAQ />
        </section>

        <section>
          <StudentsTestimonials />
        </section>

        {/* why choose us section */}
        <section>
          <WhyUs />
        </section>

        {/* founder section starts here */}

        <section>
          {/* <Founder /> */}
          <FounderSection />
        </section>

        {/* more sections will be there */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
