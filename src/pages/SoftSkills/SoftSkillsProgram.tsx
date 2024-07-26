import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CBSE_SkillCourses from "./sections/CBSE_SkillCourses";
import FAQ from "./sections/FAQ";
import GetCertificate from "./sections/GetCertificate";
import HeadingSection from "./sections/HeadingSection";
import KeyBenefits from "./sections/KeyBenefits";
import SkillEducation_and_Trainings from "./sections/SkillEducation_and_Trainings";

const SoftSkillsProgram = () => {
  return (
    <>
      <Header />

      <main className="mt-[70px]">
        {/* heading section */}
        <section>
          <HeadingSection />
        </section>
        {/* skill education and training section */}
        <section>
          <SkillEducation_and_Trainings />
        </section>
        {/* CBSE skills courses */}
        <section>
          <CBSE_SkillCourses />
        </section>
        {/* key benefits section */}
        <section>
          <KeyBenefits />
        </section>
        {/* GetCertificate section */}
        <section>
          <GetCertificate />
        </section>
        {/* FAQ section */}
        <section>
          <FAQ />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SoftSkillsProgram;
