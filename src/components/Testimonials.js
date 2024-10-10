import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";



function Testimonials() {
    return (
        <section className="mt-[100px] px-12">
            <div className="grid grid-cols-3 gap-5 bg-[#F7F8F8] p-12 rounded-[60px]">
                <div className="col-span-2">
<h1 className="text-8xl font-bold">What our customers say</h1>
                </div>
                {/* Testimonial-1 */}
                <div className="w-[full] h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between" >
                    <p className="text-lg font-light tracking-wider">
                    They make it effortless and secure to find a rental space, prioritizing user convenience and safety. The UI/UX design is intuitive, and the support team is exceptionally responsive and genuinely helpful, ensuring a seamless experience. I wholeheartedly endorse this platform 
                    </p>
                    <div className='flex justify-end'>
              <div>
          <h2 className="text-lg font-bold">Mishur hjeper</h2>
          <div className="flex gap-1 items-center justify-end text-orange-400">
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStarOutline size={12} />
          </div>
          </div>
          </div>
                </div>
                {/* Testimonial-2 */}

                <div className="w-[full] h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between" >
                    <p className="text-lg font-light tracking-wider">
                    Working with this team was a fantastic experience. They took my vision and brought it to life with their technical skills and creativity
                     </p>
                    <div className='flex justify-end'>
              <div>
          <h2 className="text-lg font-bold">Dijo Antony</h2>
          <div className="flex gap-1 items-center justify-end text-orange-400">
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStarOutline size={12} />
          </div>
          </div>
          </div>
                </div>
                {/* Testimonial-3 */}

                <div className="w-[full] h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between" >
                    <p className="text-lg font-light tracking-wider">
                    The web development team delivered a high-quality product on time. Their expertise and attention to detail made the process smooth and enjoyable.
                    </p>
                    <div className='flex justify-end'>
              <div>
          <h2 className="text-lg font-bold">Aswathy nambir</h2>
          <div className="flex gap-1 items-center justify-end text-orange-400">
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStarOutline size={12} />
          </div>
          </div>
          </div>
                </div>
                {/* Testimonial-4 */}

                <div className="w-[full] h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between" >
                    <p className="text-lg font-light tracking-wider">
                    Tool Stick's web design service exceeded my expectations with their blend of creativity and functionality. The team communicated effectively to ensure my vision was realized. I highly recommend them for enhancing your online presence
                    </p>
                    <div className='flex justify-end'>
              <div>
          <h2 className="text-lg font-bold">Sujith ram</h2>
          <div className="flex gap-1 items-center justify-end text-orange-400">
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          <IoStar size={12}/>
          </div>
          </div>
          </div>
                </div>
                {/* Testimonial-1 */}

            </div>
    
    
    </section>
    );
  }
  
  export default Testimonials;
  