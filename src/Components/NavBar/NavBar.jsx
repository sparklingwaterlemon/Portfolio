import "./NavBar.css";
// import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";

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
        
        <Link className="nav-home" activeClass="active" smooth spy to="hero" onClick={() => window.scrollTo({top: 0,left: 0, behavior: "smooth"})}>
          Mike
        </Link>
        
        <button
          className="hamburger"
          onClick={toggle}>
        </button>
        


        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul className="nav-ul">
            <li><Link activeClass="active" smooth spy to="projects" onClick={toggle}>PROJECTS</Link></li>
            <li><Link activeClass="active" smooth spy to="github" onClick={toggle}>GitHub</Link></li>
            <li><Link activeClass="active" smooth spy to="linkedin" onClick={toggle}>LinkedIn</Link></li>
            <li><Link activeClass="active" smooth spy to="contact" onClick={toggle}>CONTACT ME</Link></li>
          </ul>
        </div>

      </nav>
    
  );
}
