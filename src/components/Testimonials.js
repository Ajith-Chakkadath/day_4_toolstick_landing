import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

function Testimonials() {
    return (
        <section className="mt-16 sm:mt-[100px] px-6 sm:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#F7F8F8] p-6 sm:p-12 rounded-[30px] sm:rounded-[60px]">
                <div className="col-span-1 sm:col-span-2">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">What our customers say</h1>
                </div>

                {/* Testimonial-1 */}
                <div className="w-full h-auto sm:h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between">
                    <p className="text-base sm:text-lg font-light tracking-wider">
                        They make it effortless and secure to find a rental space, prioritizing user convenience and safety. The UI/UX design is intuitive, and the support team is exceptionally responsive and genuinely helpful, ensuring a seamless experience. I wholeheartedly endorse this platform.
                    </p>
                    <div className='flex justify-end mt-4'>
                        <div>
                            <h2 className="text-base sm:text-lg font-bold">Mishur hjeper</h2>
                            <div className="flex gap-1 items-center justify-end text-orange-400">
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStarOutline size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial-2 */}
                <div className="w-full h-auto sm:h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between">
                    <p className="text-base sm:text-lg font-light tracking-wider">
                        Working with this team was a fantastic experience. They took my vision and brought it to life with their technical skills and creativity.
                    </p>
                    <div className='flex justify-end mt-4'>
                        <div>
                            <h2 className="text-base sm:text-lg font-bold">Dijo Antony</h2>
                            <div className="flex gap-1 items-center justify-end text-orange-400">
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStarOutline size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial-3 */}
                <div className="w-full h-auto sm:h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between">
                    <p className="text-base sm:text-lg font-light tracking-wider">
                        The web development team delivered a high-quality product on time. Their expertise and attention to detail made the process smooth and enjoyable.
                    </p>
                    <div className='flex justify-end mt-4'>
                        <div>
                            <h2 className="text-base sm:text-lg font-bold">Aswathy Nambir</h2>
                            <div className="flex gap-1 items-center justify-end text-orange-400">
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStarOutline size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial-4 */}
                <div className="w-full h-auto sm:h-[350px] rounded-3xl bg-white p-5 flex flex-col justify-between">
                    <p className="text-base sm:text-lg font-light tracking-wider">
                        Tool Stick's web design service exceeded my expectations with their blend of creativity and functionality. The team communicated effectively to ensure my vision was realized. I highly recommend them for enhancing your online presence.
                    </p>
                    <div className='flex justify-end mt-4'>
                        <div>
                            <h2 className="text-base sm:text-lg font-bold">Sujith Ram</h2>
                            <div className="flex gap-1 items-center justify-end text-orange-400">
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                                <IoStar size={16}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
