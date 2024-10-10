import React from 'react';
import idea from '../assest/idea.jpg'; // Correct the path to 'assets' if needed

const ContactSection = () => {
  return (
    <section className="mt-[100px] px-12">
      <div className="grid grid-cols-12 h-screen gap-7">
        {/* First Column with Background Image */}
        <div
          className="col-span-3 bg-blue-200 rounded-[40px]"
          style={{ backgroundImage: `url(${idea})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        {/* Second Column */}
        <div className="col-span-9 bg-[#F7F8F8] rounded-[40px] px-40 py-24">
          {/* Content for this section */}
          <div className='flex justify-end'>
              <div>
          <h2 className="text-lg font-light ">Satisfied Clients</h2>
          <h1 className="text-6xl font-medium mt-1">8+</h1>
          </div>
          </div>

          <h1 className='text-[57px] leading-[60px] font-bold mt-5'>
          We bring your digital vision to life, transforming your ideas and aspirations into stunning web creations.
          </h1>
          <p className='mt-5 text-lg font-light'>Our purpose is to transform your boldest digital dreams into reality. No matter how unique your vision, we have the expertise to craft the perfect website, fulfilling every detail you envision</p>
          <button className='mt-5 px-7 py-4 bg-black text-white text-md rounded-2xl'>Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
