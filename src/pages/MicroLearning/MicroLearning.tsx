import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FAQ from "./sections/FAQ";
import HeadingSection from "./sections/HeadingSection";
import SecondSection from "./sections/SecondSection";
import Courses from "./sections/Courses";

const MicroLearning = () => {
  return (
    <>
      <Header />
      <main className="mt-[70px]">
        {/* heading section */}
        <section>
          <HeadingSection />
        </section>
        {/* Second section  */}
        <section>
          <SecondSection />
        </section>
        {/* Courses section  */}
        <section>
          <Courses />
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

export default MicroLearning;
