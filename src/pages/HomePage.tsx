import Header from '../components/Header'
import { Link } from 'react-router-dom'
import FirstImg from '../assets/Header Images/smiley-pregnant-woman-holding-clipboard-pointing-up-with-copy-space.png';
import Footer from '../components/Footer';
import KeyFeatureSection from './sections/KeyFeatureSection';
import Teachers from './sections/Teachers';
import WhyUs from './sections/WhyUs';
import DetailCard from './sections/DetailCard';
import Tutorials from './sections/Tutorials';


const HomePage = () => {
  return (
    <>
      <Header />

      <main className='mt-[70px]'>
      {/* new section starts here */}
      <section>
        <div className='flex w-full h-[260px] items-center justify-center pt-2 pb-4 bg-[#0e2d42] relative'>
          <img src={FirstImg} alt="first image" className='absolute h-[250px] bottom-0 left-[100px] max-lg:hidden'/>
            <div className='flex flex-col items-center'>
              <h1 className='text-white text-[50px] pt-2'>Best Classes Ever</h1>
              <h3 className='text-white text-[25px] pt-2'>IIT JEE + NEET + NDA + CBSE</h3>
              <p className='text-yellow-400 text-[15px] pt-2' >Learn from Experienced Instructors</p>
              <div className='bg-[#277db0] text-white p-3 font-semibold border-2 border-[#277db0] rounded-full mt-3 hover:bg-white hover:text-[#277db0]  '><Link to='/'>Explore More</Link></div>
            </div>
        </div>
      </section>

      {/* key feature section starts here */}
      <section>
         <KeyFeatureSection />
      </section>
      
      {/* tutorials section starts Here */}
      <section>
        <Tutorials />
      </section>

      {/* DetailsCard section starts here */}
      <section>
        <DetailCard />
      </section>


      {/* learn from best teachers */}
      <section>
         <Teachers />
      </section>
      
      {/* why choose us section */}
      <section>
        <WhyUs />
      </section>
      
      {/* more sections will be there */}
      
    </main>
    <footer>
        <Footer />
    </footer>
    </>
    
  )
}

export default HomePage