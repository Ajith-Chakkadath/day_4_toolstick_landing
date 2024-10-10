function Services() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p>The design of a user interface profoundly influences the aesthetics and usability of a digital space.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Web Design</h3>
              <p>Incorporating detailed design elements adds interactivity and captivating visuals to a website.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p>The design of a website impacts its aesthetics, functionality, and user experience.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  