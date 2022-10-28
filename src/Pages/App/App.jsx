import './App.css';
// import { useState, useEffect } from "react";
import NavBar from '../../Components/NavBar/NavBar';
import NavBar2Ham from '../../Components/NavBar2Ham/NavBar2Ham';
import NavBar3 from '../../Components/NavBar3/NavBar3';

import ScrollToTop from '../../Utilities/ScrollToTop/ScrollToTop';
import AboutPage from '../../Components/AboutSection/AboutSection';


export default function App() {

  return (
    <>
    <div className="container">
      <NavBar />
      {/* <NavBar2Ham /> */}
      {/* <NavBar3 /> */}
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


