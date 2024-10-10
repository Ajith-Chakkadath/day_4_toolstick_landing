import toolsticks from '../assest/toolsticks.png';
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <section className="px-6 sm:px-12 py-5">
      <nav className="bg-[#F7F8F8] rounded-full">
        <div className="mx-auto flex flex-wrap justify-between items-center p-2">
          {/* Logo */}
          <img src={toolsticks} className="w-28 h-auto sm:w-auto sm:h-10" alt="Logo" />

          {/* Menu Items */}
          <ul className="hidden md:flex space-x-6 sm:space-x-8 text-sm sm:text-lg">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Project</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-3 sm:space-x-4 mr-2 sm:mr-5">
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />
            <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button className="text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
