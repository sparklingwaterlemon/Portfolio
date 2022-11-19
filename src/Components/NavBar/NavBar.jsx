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


  // // changing Nav Bar Color
  // // Probably have to change to a useRef from ternary operation..
  // const [navBarColor, setNavBarColor] = useState(false);
  // const changeNav = () => {
  //   if(window.scrollY > 2000){
  //     setNavBarColor(true)
  //   } else {
  //     setNavBarColor(false)
  //   }
  // };
  // useEffect(()=>{
  //   window.addEventListener("scroll", changeNav)
  // });


  return (
    <>
    <nav className="nav-bar">
      {/* <nav className={navBarColor ? "nav-bar change" : "nav-bar"}> */}
      
      <Link 
        className="navlink m" 
        activeClass="active" 
        smooth spy to="hero" 
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
        Michael Kim
      </Link>

      <div className={isNavExpanded ? "nav-menu-container expanded" : "nav-menu-container"}>
        <ul className="nav-ul">
          <li><Link className="navlink p" activeClass="active" smooth spy to="projects" onClick={toggle}>PROJECTS</Link></li>
          <li><Link clasName="navlink c" activeClass="active" smooth spy to="contact" onClick={toggle}>CONTACT ME</Link></li>
          <li><a href="https://www.youtube.com">YouTube</a></li>
          <li><a href="https://www.weather.yahoo.com">Weather</a></li>
        </ul>
      </div>

      <button
        className="hamburger"
        onClick={toggle}>
      </button>
    </nav>
    </>
  );
}
