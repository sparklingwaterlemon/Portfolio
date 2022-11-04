import './App.css';

import NavBar from '../../Components/NavBar/NavBar';
import HeroSection from '../../Components/HeroSection/HeroSection';
import AboutSection from '../../Components/AboutSection/AboutSection';

import ProjectSectionA from '../../Components/ProjectSectionA/ProjectSectionA';

import ContactSection from '../../Components/ContactSection/ContactSection';
import FooterSection from '../../Components/FooterSection/FooterSection';

import ScrollToTop from '../../Utilities/ScrollToTop/ScrollToTop';


export default function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      {/* <ProjectSectionA /> */}
      <section id="github">GitHub</section>
      <section id="linkedin">LinkedIn</section>
      <ContactSection />
      {/* <FooterSection /> */}

      <ScrollToTop />

    </>
  );
}


