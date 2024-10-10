function Services() {
    return (
        <section className="mt-16 sm:mt-[100px] px-6 sm:px-12">
            <div className="w-full bg-[#F7F8F8] rounded-[30px] sm:rounded-[60px] p-6 sm:p-12">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 sm:mt-12">

                    {/* Service 1 */}
                    <div className="w-full h-auto sm:h-[450px] bg-white rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:bg-black hover:text-white transition duration-300">
                        <h1 className="text-3xl sm:text-5xl text-end">01</h1>
                        <div>
                            <h1 className="text-3xl sm:text-5xl mb-3 sm:mb-5">UI/UX Design</h1>
                            <p className="text-base sm:text-lg font-light tracking-wider">
                                The design of a user interface profoundly influences the aesthetics, ambiance, and usability of a digital space, significantly impacting our everyday user experiences.
                            </p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="w-full h-auto sm:h-[450px] bg-white rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:bg-black hover:text-white transition duration-300">
                        <h1 className="text-3xl sm:text-5xl text-end">02</h1>
                        <div>
                            <h1 className="text-3xl sm:text-5xl mb-3 sm:mb-5">Web Design</h1>
                            <p className="text-base sm:text-lg font-light tracking-wider">
                                Incorporating detailed design elements adds depth, interactivity, and captivating visuals to a website, enhancing the overall user experience with those essential finishing touches.
                            </p>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="w-full h-auto sm:h-[450px] bg-white rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:bg-black hover:text-white transition duration-300">
                        <h1 className="text-3xl sm:text-5xl text-end">03</h1>
                        <div>
                            <h1 className="text-3xl sm:text-5xl mb-3 sm:mb-5">Web Development</h1>
                            <p className="text-base sm:text-lg font-light tracking-wider">
                                The design of a website significantly impacts its aesthetics, functionality, and user experience, profoundly shaping how users interact with it in their daily lives.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;
