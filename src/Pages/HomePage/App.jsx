import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import { useState, useEffect } from "react";

export default function App() {

  const [showButton, setShowButton] = useState(false);

  // change this code..
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
        console.log("true")
      } else {
        setShowButton(false);
        console.log("false")
      }
    });
  });

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <>
    <div className="container">
      <NavBar />
      <section id="about">ABOUT</section>
      <section id="projects">PROJECTS</section>
      <section id="blog">BLOG</section>
      <section id="contact">CONTACT ME</section>
    </div>

    {showButton && (
    <button onClick={scrollToTop} className="back-to-top">
      <span>&#8679;</span>
    </button>
    )}

  </>
  );
}


