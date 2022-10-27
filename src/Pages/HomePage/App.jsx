import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import { useState, useEffect } from "react";

export default function App() {
  const [showScroll, setShowScroll] = useState(false);
  
  const checkScrollTop = () => {
    if(window.pageYOffset > 700){
      setShowScroll(true);
      // console.log("true------", showScroll);
      // console.log("offset--", window.pageYOffset)
    }else {
      setShowScroll(false);
      // console.log("false-----", showScroll);
      // console.log("offset--", window.pageYOffset)
    }
  }

  // is there a memory leak here?
  // look at moon rover project
  useEffect(()=>{
    window.addEventListener("scroll", checkScrollTop);
    // window.removeEventListener("scroll", checkScrollTop);
    console.log("dependencey array")
  })

  // This function will scroll the window to the top 
  function scrollToTop(){    
    console.log("scrolling.....");
    window.scrollTo({
      top: 0,
      left: 0,
    })
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

    {showScroll ? 
    <button onClick={scrollToTop} className="back-to-top">
      <span>&#8679;</span>
      </button> : false
    }

  </>
  );
}


