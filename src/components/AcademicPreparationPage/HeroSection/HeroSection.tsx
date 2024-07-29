import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBookOpen, faClipboardList, faQuestionCircle, faUsers, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <div className="w-[100vw] bg-[#E9EDFE]">
      <div className="container mx-auto text-center p-8 md:p-16">
        <h1 className="text-2xl font-bold mb-3">Key Features of LIVE Online Classes</h1>
        <h2 className="text-xl mb-7">for IIT JEE, CBSE, NEET</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-9">
          <div className="feature-item transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faVideo} size="3x" className="text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">LIVE</h3>
            <p>Online Classes</p>
          </div>
          <div className="feature-item transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faBookOpen} size="3x" className="text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold">On-demand Chapters</h3>
            <p>Student voting</p>
          </div>
          <div className="feature-item transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faClipboardList} size="3x" className="text-red-500 mx-auto mb-2" />
            <h3 className="font-semibold">Online Homework</h3>
            <p>Videos & practice</p>
          </div>
          <div className="feature-item transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faQuestionCircle} size="3x" className="text-yellow-500 mx-auto mb-2" />
            <h3 className="font-semibold">Doubt Clearing</h3>
            <p>Anytime support</p>
          </div>
          <div className="feature-item transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faUsers} size="3x" className="text-purple-500 mx-auto mb-2" />
            <h3 className="font-semibold">Peer Groups</h3>
            <p>Collaborative learning</p>
          </div>
          <div className="feature-item transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-teal-500 mx-auto mb-2" />
            <h3 className="font-semibold">Regular Tests</h3>
            <p>Periodic & monthly</p>
          </div>
        </div>
        
        <div className="mt-9">
          <h2 className="text-xl font-semibold mb-3">LIVE Online Classes Registration Open for</h2>
          <p className="text-lg font-bold">April 2024 - March 2025</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
