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

  return (
    <>
    <nav className="nav-bar">      
      <Link 
        id="nav-link-michael" 
        activeClass="active" 
        smooth spy to="hero" 
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
        Michael Kim
      </Link>

      <div className={isNavExpanded ? "nav-menu-container expanded" : "nav-menu-container"}>
        <ul className="nav-ul">
          <li id="nav-link-p">
            <Link 
              activeClass="active" 
              smooth spy to="projects" 
              onClick={toggle}>
              PROJECTS
            </Link>
          </li>

          <li id="nav-link-c">
            <Link 
              activeClass="active" 
              smooth spy to="contact" 
              onClick={toggle}>
              CONTACT ME
            </Link>
          </li>

          <li><a href="https://www.youtube.com" target="_blank">a</a></li>
          <li><a href="https://www.weather.yahoo.com" target="_blank">a</a></li>
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
