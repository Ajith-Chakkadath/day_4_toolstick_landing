import macair from '../assest/Man.png';

function HeroSection() {
  return (
      <>
    <section className="hidden lg:block py-5 px-12">
      <div className="mx-auto  grid grid-cols-3 text-black">
        
        {/* Left Section */}
        <div className="col-span-1 bg-[#F7F8F8] h-[350px] rounded-l-3xl p-12">
          <h2 className="text-lg font-light ">Projects</h2>
          <h1 className="text-6xl font-medium mt-3">5+</h1>
          <p className="text-md font-light leading-[28px] mt-5 pr-10">
            Crafted for your ease, enhancing the beauty of your current digital
            experience while paving the way for a more aesthetically pleasing
            and harmonious future for you and your business.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-2 row-span-2 bg-[#F7F8F8] h-[700px] rounded-r-3xl rounded-bl-3xl p-12 mx-auto">
          <p className="text-[48px] font-medium leading-[60px] ml-[100px] tracking-wider">
            Design-Driven Solutions for Web Design, Development, and UI/UX
          </p>
          {/* Image centered and resized */}
          <div className="flex justify-center mt-[60px]">
            <img src={macair} className="w-[500px] h-auto mx-auto" alt="Design" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="col-span-1 h-[400px] rounded-3xl p-12">
          <h2 className="text-lg font-light">Are You Ready</h2>
          <p className="text-[38px] leading-[43px] font-light mt-3">
            Designing user-focused websites with seamless functionality
          </p>
          <button className='mt-5 px-3 py-4 bg-black text-white rounded-2xl'>Get a free consultation</button>
        </div>

      </div>
    </section>

<section className=" lg:hidden py-5 px-6 ">
<div className="mx-auto grid grid-cols-1  text-black gap-5">
 {/* top Section */}
<div className="bg-[#F7F8F8] h-auto rounded-3xl   p-6 ">
    <p className="text-[32px]  font-medium leading-[40px]  tracking-wider mt-5 ">
      Design-Driven Solutions for Web Design, Development, and UI/UX
    </p>
    {/* Image centered and resized */}
    <div className="flex justify-center mt-10 ">
      <img src={macair} className="w-[300px]   h-auto" alt="Design" />
    </div>
  </div>
  
  {/* Left Section */}

  <div className='grid grid-cols-2'>


  <div className="bg-[#F7F8F8] h-auto  rounded-3xl  p-6 2">
    <h2 className="text-base font-light">Projects</h2>
    <h1 className="text-4xl  font-medium mt-3">5+</h1>
    <p className="text-sm font-light leading-6 mt-5 ">
      Crafted for your ease, enhancing the beauty of your current digital experience while paving the way for a more aesthetically pleasing and harmonious future for you and your business.
    </p>
  </div>


  {/* Bottom Section */}
  <div className="bg-transparent  h-auto  rounded-3xl p-6 ">
    <h2 className="text-base font-light">Are You Ready</h2>
    <p className="text-2xl  leading-7  font-light mt-3">
      Designing user-focused websites with seamless functionality
    </p>
    <button className="mt-5 px-4  py-3  bg-black text-white rounded-xl">
      Get a free consultation
    </button>
  </div>
  </div>

</div>
</section>
</>
  );
}

export default HeroSection;
