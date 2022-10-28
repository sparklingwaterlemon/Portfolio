import './App.css';
import { useState, useEffect } from "react";
import NavBar from '../../Components/NavBar/NavBar';
import ScrollToTop from '../../Utilities/ScrollToTop/ScrollToTop';


export default function App() {

  return (
    <>
    <div className="container">
      <NavBar />
      <section id="about">ABOUT</section>
      <section id="test">PROJECTS</section>
      <section id="blog">BLOG</section>
      <section id="contact">CONTACT ME</section>
    </div>
    <ScrollToTop />

  </>
  );
}


