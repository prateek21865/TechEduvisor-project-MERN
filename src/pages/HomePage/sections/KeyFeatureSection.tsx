import { RiLiveLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { TbBulb } from "react-icons/tb";
import { PiExam } from "react-icons/pi";
import { IoMdStarOutline } from "react-icons/io";



const KeyFeatureSection = () => {
  return (
    <div className='flex flex-col items-center py-6 px-5 mt-2'>
          <div className='flex items-center text-center text-[30px] font-bold text-black'>
            <IoMdStarOutline /> &nbsp;&nbsp;
              <h3 className='border-b-[3px] border-[#277db0] pb-2'>  Key Features  </h3> &nbsp;&nbsp;
            <IoMdStarOutline />
          </div>
          <div className='grid grid-cols-3 gap-6 md:gap-12 lg:grid-cols-6 py-5 mt-6'>

            <div className='flex flex-col items-center p-2 mt-2 bg-slate-50 hover:text-red-500 hover:bg-slate-200 shadow-xl rounded-md '>
              <RiLiveLine className='size-[60px] text-[#0e2d42]'/>
              <h4 className='hover:text-red-500 font-bold text-[18px]'>LIVE</h4>
              <p className='text-black'>Online Classes</p>
            </div> 
            {/* small div ends here */}
            <div className='flex flex-col items-center p-2 mt-2 bg-slate-50 hover:text-red-500 hover:bg-slate-200 shadow-xl rounded-md'>
              <FaLaptopCode className='size-[60px] text-[#0e2d42]'/>
              <h4 className='hover:text-red-500 font-bold text-[18px]'>CONCEPTS</h4>
              <p className='text-black'>Video Lectures</p>
            </div> 
            {/* small div ends here */}
            <div className='flex flex-col items-center p-2 mt-2 bg-slate-50 hover:text-red-500 hover:bg-slate-200 shadow-xl rounded-md'>
              <IoNewspaperOutline className='size-[60px] text-[#0e2d42]'/>
              <h4 className='hover:text-red-500 font-bold text-[18px]'>SOLVED</h4>
              <p className='text-black'>Video Examples</p>
            </div> 
            {/* small div ends here */}
            <div className='flex flex-col items-center p-2 mt-2 bg-slate-50 hover:text-red-500 hover:bg-slate-200 shadow-xl rounded-md'>
              <PiExam className='size-[60px] text-[#0e2d42]'/>
              <h4 className='hover:text-red-500 font-bold text-[18px]'>Regular</h4>
              <p className='text-black'>Practice Tests</p>
            </div> 
            {/* small div ends here */}
            <div className='flex flex-col items-center p-2 mt-2 bg-slate-50 hover:text-red-500 hover:bg-slate-200 shadow-xl rounded-md'>
              <TbBulb className='size-[60px] text-[#0e2d42]'/>
              <h4 className='hover:text-red-500 font-bold text-[18px]'>INSTANT</h4>
              <p className='text-black'>Doubt Clearing</p>
            </div> 
            {/* small div ends here */}
            <div className='flex flex-col items-center p-2 mt-2 bg-slate-50 hover:text-red-500 hover:bg-slate-200 shadow-xl rounded-md'>
              <PiHandshakeFill className='size-[60px] text-[#0e2d42]'/>
              <h4 className='hover:text-red-500 font-bold text-[18px]'>PERSONALISED</h4>
              <p className='text-black'>Mentor Support</p>
            </div> 
            {/* small div ends here */}
            
          </div>
        </div>
  )
}

export default KeyFeatureSection