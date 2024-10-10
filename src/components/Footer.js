import { MdPermContactCalendar } from "react-icons/md";
import toolsticks from '../assest/toolsticks.png'

function Footer() {
    return (
    <section className="mt-[100px] px-12">
        <div className="w-full bg-black rounded-[60px] p-12">
            <div className="grid grid-cols-12 ">
            <div className="col-span-2 w-full h-[200px] bg-white rounded-[45px] mx-auto p-5 flex justify-center items-center">
    <div className="flex items-center">
        <MdPermContactCalendar size={48} />
        <h1 className="ml-2 text-xl font-bold">Contact us</h1>
    </div>
</div>
                <div className="col-end-13 col-span-7 text-white w-full">
                    <h1 className="text-9xl font-bold">Start Your Project Now!</h1>
                    <p className="text-3xl font-light mt-5">
                    Crafted for your convenience, paving the way for a more beautiful future for your business and your clients.
                    </p>
                </div>

            </div>

            <div className="bg-white mt-24 p-3 rounded-[45px]">
            <div className=" mx-auto flex justify-between items-center p-2">
          <img src={toolsticks} className="w-auto h-10 "/>
          <ul className="flex space-x-8 text-lg">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Project</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
          </ul>
        </div>
            </div>

        </div>

    </section>
    );
  }
  
  export default Footer;
  