import "./App.css";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection";
import SpecialSection from "./Sections/SpecialSection";
import OurMenu from "./Sections/OurMenu";
import Reviews from "./Sections/Reviews";
import Blogs from "./Sections/BlogSection";
import Footer from "./Sections/Footer";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <SpecialSection />
      <OurMenu />
      <Reviews />
      <Blogs />
      <Footer/>
    </div>
  );
}

export default App;
