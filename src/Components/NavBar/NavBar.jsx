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

          <li id="nav-link-gh">
            <a href="https://github.com/sparklingwaterlemon" target="_blank">
              <img src={require("../../Assets/NavBarImages/github.png")}/>
            </a>
          </li>
          
          <li id="nav-link-li">
            <a href="https://www.linkedin.com/in/michael-kim-152226243" target="_blank">
            <img src={require("../../Assets/NavBarImages/linkedin.png")}/>
            </a>
          </li>

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
