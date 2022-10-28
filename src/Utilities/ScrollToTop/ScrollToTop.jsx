import "./ScrollToTop.css";
import { useState, useEffect } from "react";

export default function ScrollToTop(){
// toggle for scroll up
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if(window.pageYOffset > 300){
      setShowScroll(true);
      // console.log("true------", showScroll);
      // console.log("offset--", window.pageYOffset)
    }else {
      setShowScroll(false);
      // console.log("false-----", showScroll);
      // console.log("offset--", window.pageYOffset)
    }
  };
  
  // is there a memory leak here?
  // look at moon rover project
  useEffect(()=>{
    window.addEventListener("scroll", checkScrollTop);
    // window.removeEventListener("scroll", checkScrollTop);
    console.log("dependencey array")
  });


  // This function will scroll the window to the top 
  const scrollToTop = () => {    
    console.log("scrolling.....");
    window.scrollTo({
      top: 0,
      left: 0,
    })
  };

  return (
    <>
    {showScroll ? 
        <button onClick={scrollToTop} className="back-to-top">
        <span>&#8679;</span>
        </button>
    : false}    
    </>
  )
}