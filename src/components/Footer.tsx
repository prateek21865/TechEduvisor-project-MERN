import { Link } from 'react-router-dom'
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
                <li className='hover:text-slate-400'><Link to="/ap">Academic Preparation</Link></li>
                <li className='hover:text-slate-400'><Link to="/amp">Academic Mentorship Program</Link></li>
                <li className='hover:text-slate-400'><Link to="/ssc">SoftSkills Courses</Link></li>
                <li className='hover:text-slate-400'><Link to="/sap">Study Abroad Program</Link></li>
                <li className='hover:text-slate-400'><Link to="/ml">MicroLearning</Link></li>
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
                  <span className='text-[25px] hover:text-slate-400'><Link to='tel:+916261974399'><FiPhoneCall /></Link></span>
                  <span className='text-[25px] hover:text-slate-400'><Link to='https://wa.me/+916261974399'><FaWhatsapp /></Link></span>
                  <span className='text-[25px] hover:text-slate-400'><Link to='mailto:goutampatidar1903@gmail.com'><MdMailOutline /></Link></span>
                </div>
                <div>
                    <Link to='https://www.google.com/maps/place/Ujjain,+Madhya+Pradesh/@23.1689772,75.7148188,12z/data=!3m1!4b1!4m6!3m5!1s0x39637469de00ff23:0x7f82abdf7899d412!8m2!3d23.1764665!4d75.7885163!16zL20vMDNuNjcw?entry=ttu'  
                    className='flex flex-wrap py-5 items-center'>
                    <img src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" alt="map logo" className='size-[70px]'/>
                    <p>59-A , Abhishek Nagar <br /> Nanakheda , Ujjain M.P.</p>
                    </Link>
                </div>
            </div>

       </div>
       <div className='flex flex-col items-center py-2 font-semibold'>
            <p><Link to='/' className='hover:text-slate-400'>Privacy</Link> | <Link to='/' className='hover:text-slate-400'>Terms & Conditions</Link> | <Link to='/' className='hover:text-slate-400'>Disclaimer</Link></p>
            <p>&copy; PrepsGuide , All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer