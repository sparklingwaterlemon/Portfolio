import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import AboutSection from '../../Components/AboutSection/AboutSection';

import ContactSection from '../../Components/ContactSection/ContactSection';
import ScrollToTop from '../../Utilities/ScrollToTop/ScrollToTop';


export default function App() {

  return (
    <>
    <div className="container">
      <NavBar />
      <AboutSection />
      
      <section id="projects">PROJECTS</section>
      <section id="github">GitHub</section>
      <section id="linkedin">LinkedIn</section>
      <ContactSection />
    </div>
    
    <ScrollToTop />

  </>
  );
}


