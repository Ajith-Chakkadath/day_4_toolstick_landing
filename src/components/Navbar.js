import toolsticks from '../assest/toolsticks.png'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Navbar() {
    return (

        <section className='px-12 py-5'>
      <nav className="bg-[#F7F8F8] rounded-full">
        <div className=" mx-auto flex justify-between items-center p-2">
          <img src={toolsticks} className="w-auto h-10 "/>
          <ul className="flex space-x-8 text-lg">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Project</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
          </ul>
          <div className="flex space-x-4 mr-5">
          <FaInstagram />
          <FaYoutube />
          <FaLinkedinIn />
          <FaXTwitter />
          </div>
        </div>
      </nav>
      </section>
    );
  }
  
  export default Navbar;
  