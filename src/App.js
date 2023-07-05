import "./App.css";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection";
import SpecialSection from "./Sections/SpecialSection";
import OurMenu from "./Sections/OurMenu"
function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <SpecialSection />
      <OurMenu/>
    </div>
  );
}

export default App;
