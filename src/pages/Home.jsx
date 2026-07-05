import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery.jsx";
import ParallaxBanner from "../components/ParallaxBanner.jsx";
// import Trainers from "../components/Trainers";
import Pricing from "../components/Pricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contacts.jsx";
import Footer from "../components/Footer.jsx";
import BackToTop from "../components/BackToTop.jsx";
import WhatsappBtn from "../components/WhatsappBtn.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <ParallaxBanner />
      {/* <Trainers /> */}
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <BackToTop /> */}
      <WhatsappBtn />
    </>
  );
}

export default Home;