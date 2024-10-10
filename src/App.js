import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomShape from './components/CustomShape';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ContactSection />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
