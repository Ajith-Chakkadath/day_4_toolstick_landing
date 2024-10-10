import React from 'react';
import idea from '../assest/idea.jpg'; // Ensure the correct path to 'assets'

const ContactSection = () => {
  return (
    <section className="mt-16 sm:mt-[100px] px-6 sm:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-screen gap-7">
        {/* First Column with Background Image */}
        <div
          className=" hidden lg:block col-span-1 lg:col-span-3 h-[300px] lg:h-full bg-blue-200 rounded-[20px] lg:rounded-[40px]"
          style={{ backgroundImage: `url(${idea})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        {/* Second Column */}
        <div className="col-span-1 lg:col-span-9 bg-[#F7F8F8] rounded-[20px] lg:rounded-[40px] px-6 sm:px-12 lg:px-40 py-12 lg:py-24">
          {/* Content for this section */}
          <div className='flex justify-end'>
            <div>
              <h2 className="text-sm sm:text-lg font-light">Satisfied Clients</h2>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium mt-1">8+</h1>
            </div>
          </div>

          <h1 className='text-3xl sm:text-4xl lg:text-[57px] leading-[40px] sm:leading-[50px] lg:leading-[60px] font-bold mt-5'>
            We bring your digital vision to life, transforming your ideas and aspirations into stunning web creations.
          </h1>
          <p className='mt-5 text-base sm:text-lg font-light'>
            Our purpose is to transform your boldest digital dreams into reality. No matter how unique your vision, we have the expertise to craft the perfect website, fulfilling every detail you envision.
          </p>
          <button className='mt-5 px-5 sm:px-7 py-3 sm:py-4 bg-black text-white text-sm sm:text-md rounded-xl sm:rounded-2xl'>
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
