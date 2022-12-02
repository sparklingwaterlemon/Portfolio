import "./ScrollToTop.css";
import { useState, useEffect } from "react";

export default function ScrollToTop(){
// toggle for scroll up
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if(window.pageYOffset > 300){
      setShowScroll(true);
    }else {
      setShowScroll(false);
    }
  };
  
  useEffect(()=>{
    window.addEventListener("scroll", checkScrollTop);
  });


  // This function will scroll the window to the top 
  const scrollToTop = () => {    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  };

  return (
    <>
    {showScroll ? 
        <button onClick={scrollToTop} className="scroll-button">
          <span className="s-arrow">&#8679;</span>
        </button>
    : false}    
    </>
  )
}