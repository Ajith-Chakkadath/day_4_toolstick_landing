import { MdPermContactCalendar } from "react-icons/md";
import toolsticks from '../assest/toolsticks.png'

function Footer() {
    return (
    <section className="mt-16 sm:mt-[100px] px-6 sm:px-12">
        <div className="w-full bg-black rounded-[30px] sm:rounded-[60px] p-6 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-0">
                <div className="col-span-1 sm:col-span-2 w-full h-[150px] sm:h-[200px] bg-white rounded-[30px] sm:rounded-[45px] mx-auto p-5 flex justify-center items-center">
                    <div className="flex items-center ">
                        <MdPermContactCalendar size={48} />
                        <h1 className="ml-2 text-lg sm:text-lg   font-bold">Contact us</h1>
                    </div>
                </div>
                <div className=""></div>
                <div className="col-span-2 md:col-start-4 lg:col-span-7 text-white w-full">
                    <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold">Start Your Project Now!</h1>
                    <p className="text-lg sm:text-2xl lg:text-3xl font-light mt-5">
                        Crafted for your convenience, paving the way for a more beautiful future for your business and your clients.
                    </p>
                </div>
            </div>

            <div className="bg-white mt-12 sm:mt-24 p-3 rounded-[30px] sm:rounded-[45px]">
                <div className="flex flex-col sm:flex-row justify-between items-center p-2">
                    <img src={toolsticks} className="w-auto h-8 sm:h-10 mb-4 sm:mb-0" />
                    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
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
