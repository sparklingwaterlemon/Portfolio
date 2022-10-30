import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import AboutPage from '../../Components/AboutSection/AboutSection';

import ScrollToTop from '../../Utilities/ScrollToTop/ScrollToTop';


export default function App() {

  return (
    <>
    <div className="container">
      <NavBar/>
      <AboutPage />
      <section id="projects">PROJECTS</section>
      <section id="github">GitHub</section>
      <section id="linkedin">LinkedIn</section>
      <section id="contact">CONTACT ME</section>
    </div>
    
    <ScrollToTop />

  </>
  );
}


