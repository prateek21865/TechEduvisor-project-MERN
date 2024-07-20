
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";




const Footer = () => {
  return (
    <div className='bg-[#0e2d42]'>
       <div className='flex flex-wrap justify-evenly py-2 gap-5'>
            
            <div className='text-white'>
                <h3 className='text-[20px] font-semibold pb-2'>OFFERING</h3>
                <ul >
                <li className='hover:text-slate-400'>Academic Preparation</li>
                <li className='hover:text-slate-400'>Academic Mentorship Program</li>
                <li className='hover:text-slate-400'>SoftSkills Courses</li>
                <li className='hover:text-slate-400'>Study Abroad Program</li>
                <li className='hover:text-slate-400'>MicroLearning</li>
                </ul>
            </div>

            <div className='text-white'>
                <h3 className='text-[20px] font-semibold pb-2'>CLASSES</h3>
                <ul>
                <li >Class 9</li>
                <li >Class 10</li>
                <li >Class 11</li>
                <li >Class 12</li>
                </ul>
            </div>

            <div className='text-white'>
                <h3 className='text-[20px] font-semibold pb-2'>SUBJECTS</h3>
                <ul>
                <li >Maths</li>
                <li >Physics</li>
                <li >Chemistry</li>
                </ul>
            </div>
            
            <div className='text-white flex flex-col items-center'>
                <h3 className='text-[20px] font-semibold pb-2'>CONTACT US</h3>
                <div className='flex flex-wrap gap-5 pt-2'>
                  <span className='text-[25px] hover:text-slate-400'><FiPhoneCall /></span>
                  <span className='text-[25px] hover:text-slate-400'><FaWhatsapp /></span>
                  <span className='text-[25px] hover:text-slate-400'><MdMailOutline /></span>
                </div>
                <div>
                   
                    <img src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" alt="map logo" className='size-[70px]'/>
                    <p>59-A , Abhishek Nagar <br /> Nanakheda , Ujjain M.P.</p>
                 
                </div>
            </div>

       </div>
       <div className='flex flex-col items-center py-2 font-semibold'>
            <p>Privacy | Terms & Conditions | Disclaimer</p>
            <p>&copy; PrepsGuide , All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer