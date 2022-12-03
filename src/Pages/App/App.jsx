import NavBar from '../../Components/NavBar/NavBar';
import HeroSection from '../../Components/HeroSection/HeroSection';
import AboutSection from '../../Components/AboutSection/AboutSection';
import ProjectSectionA from '../../Components/ProjectSectionA/ProjectSectionA';
import ProjectSectionB from '../../Components/ProjectSectionB/ProjectSectionB';
// import ProjectSectionD from '../../Components/ProjectSectionD/ProjectSectionD';
import ContactSection from '../../Components/ContactSection/ContactSection';
import ScrollToTop from '../../Utilities/ScrollToTop/ScrollToTop';
import FooterSection from '../../Components/FooterSection/FooterSection';

// import ProjectSectionA from '../../Components/ProjectSectionA/ProjectSectionA';
// <ProjectSectionA />
//  <section id="github">GitHub</section>
//  <section id="linkedin">LinkedIn</section>


export default function App() {
  return (
    <>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectSectionA />
        <ProjectSectionB />
        <ContactSection />
        <ScrollToTop />
        <FooterSection />
    </>
  )
};

