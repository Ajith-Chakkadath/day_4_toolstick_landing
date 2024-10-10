function Testimonials() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What our customers say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p>"Working with Toolsticks was a fantastic experience. They took my vision and brought it to life with their technical skills and creativity."</p>
              <p className="mt-4 text-right font-bold">Dijo Antony</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p>"The web development team delivered a high-quality product on time. Their attention to detail made the process smooth and enjoyable."</p>
              <p className="mt-4 text-right font-bold">Aswathy Nambiar</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p>"Toolsticks' design service helped my company create a professional website that impressed our clients and increased engagement."</p>
              <p className="mt-4 text-right font-bold">Mishur Hieper</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  