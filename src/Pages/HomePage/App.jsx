import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import { useState, useEffect } from "react";

export default function App() {

  const [showScroll, setShowScroll] = useState(false);
  
  const checkScrollTop = () => {
    if(!showScroll && window.pageYOffset > 400){
      setShowScroll(true);
      console.log("true")
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
      console.log("false")
    }
  }

  // is there a memory leak here?
  // look at moon rover project
  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
  },[])

  // This function will scroll the window to the top 
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
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

    {showScroll && (
    <button onClick={scrollTop} className="back-to-top">
      <span>&#8679;</span>
    </button>
    )}

  </>
  );
}


