import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { useRef } from "react";
import { useEffect } from "react";

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggle = () => {
    setIsNavExpanded(!isNavExpanded)
  };
  

  // changing Nav Bar Color
  // Probably have to change to a useRef from ternary operation..
  const [navBarColor, setNavBarColor] = useState(false);
  const changeNav = () => {
    if(window.scrollY > 2000){
      setNavBarColor(true)
    } else {
      setNavBarColor(false)
    }
  };
  useEffect(()=>{
    window.addEventListener("scroll", changeNav)
  });


  return (
    
      <nav className="nav-bar">
      {/* <nav className={navBarColor ? "nav-bar change" : "nav-bar"}> */}
        
        <span className="nav-home" onClick={() => window.scrollTo({top: 0,left: 0,})}>
          Mike
        </span>
        
        <button
          className="hamburger"
          onClick={toggle}>
        </button>
        
        {/* Hamburger Animation - Currently Ice Boxed */}
        {/* <div class="ham-container">
          <span className={isNavExpanded ? "ham on t" : "ham off t"} > &nbsp;</span>
          <span className={isNavExpanded ? "ham on m" : "ham off m"} > &nbsp;</span>
          <span className={isNavExpanded ? "ham on b" : "ham off b"} > &nbsp;</span>
        </div> */}

        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul className="nav-ul">
            <li><Link activeClass="active" smooth spy to="about" onClick={toggle}>ABOUT</Link></li>
            <li><Link activeClass="active" smooth spy to="text" onClick={toggle}>TEXT</Link></li>
            <li><Link activeClass="active" smooth spy to="projects" onClick={toggle}>PROJECTS</Link></li>
            <li><Link activeClass="active" smooth spy to="github" onClick={toggle}>GitHub</Link></li>
            <li><Link activeClass="active" smooth spy to="linkedin" onClick={toggle}>LinkedIn</Link></li>
            <li><Link activeClass="active" smooth spy to="contact" onClick={toggle}>CONTACT ME</Link></li>
          </ul>
        </div>

      </nav>
    
  );
}
