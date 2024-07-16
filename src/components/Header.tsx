import React from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import logo from "../assets/prepsguide_logo2.jpg";



const Header = () => {

    const [openMenu , setOpenMenu]=React.useState(false);
    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    }

  return (
    <header className="fixed top-0 w-full z-50">
    <div className="flex bg-[#0e2d42] px-[10px] min-h-[70px] items-center justify-between">
      <div className="flex items-center">
        <div className="text-white font-bold">
          <Link to="/">
          <span className="flex items-center gap-3">
            <img src={logo} alt="logo_img" className="h-[60px] w-[60px] rounded-full"/>
              <h2 className="text-[25px] font-bold italic">PrepsGuide</h2>
          </span>
          </Link>
        </div>
        <nav className="text-white px-10 max-lg:hidden">
            <ul className="flex items-center">
                <li className="mx-5 hover:border-b-2 hover:border-[#277db0]"><Link to="/ap">Academic Preparation</Link></li>
                <li className="mx-5 hover:border-b-2 hover:border-[#277db0]"><Link to="/amp">Academic Mentorship Program</Link></li>
                <li className="mx-5 hover:border-b-2 hover:border-[#277db0]"><Link to="/ssc">SoftSkills Courses</Link></li>
                <li className="mx-5 hover:border-b-2 hover:border-[#277db0]"><Link to="/sap">Study Abroad Program</Link></li>
                <li className="mx-5 hover:border-b-2 hover:border-[#277db0]"><Link to="/ml">MicroLearning</Link></li>
            </ul>
        </nav>
      </div>
      <div className="flex max-lg:hidden">
        <div className="border-2 text-white w-[90px] pl-5 py-1 mx-3 rounded-md hover:cursor-pointer items-center hover:opacity-70">
          <Link to="/login">Login</Link>
        </div>
        <div className="bg-[#277db0] border-2 border-[#277db0] text-white w-[90px] mx-3 px-3 py-1 rounded-md hover:cursor-pointer items-center hover:opacity-70">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      {
      !openMenu && <div className=" hidden max-lg:block text-white pe-8">
        <span onClick={toggleMenu}><TiThMenu /></span>
      </div>
      }
      {
      openMenu && <div className=" hidden max-lg:block text-white pe-8">
        <span onClick={toggleMenu}><ImCross /></span>
      </div>
      }
    </div> 
    {/* above header ends here */}
    {/* division open in only click of three line icon */}
    {
    openMenu && <div className="bg-[#0e2d42] px-[100px] h-auto ">
        <div className="text-white">
            <ul className="">
                <li className="py-2"><Link to="/ap">Academic Preparation</Link></li>
                <li className="py-2"><Link to="/amp">Academic Mentorship Program</Link></li>
                <li className="py-2"><Link to="/ssc">SoftSkills Courses</Link></li>
                <li className="py-2"><Link to="/sap">Study Abroad Program</Link></li>
                <li className="py-2"><Link to="/ml">MicroLearning</Link></li>
            </ul>
        </div>
        <div className="flex py-5">
        <div className="border-2 text-white w-[90px] pl-5 py-1 rounded-md hover:cursor-pointer items-center hover:opacity-70">
          <Link to="/login">Login</Link>
        </div>
        <div className="bg-[#277db0] border-2 border-[#277db0] text-white w-[90px] mx-3 px-3 py-1 rounded-md hover:cursor-pointer items-center hover:opacity-70">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
    }
    </header>
  );
};

export default Header;
