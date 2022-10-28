import { useState } from "react";
// import "./NavBar3.css";
import "./NavBar3og.css";
import { Link } from "react-scroll";

export default function NavBar3() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggle = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <nav className="navigation">
      {/* make this scroll to top */}
      <a href="/" className="brand-name">
        MacroSoft
      </a>

      <button
        className="hamburger"
        onClick={toggle}>
      </button>
      
      <div 
        className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li><Link activeClass="active" smooth spy to="about" onClick={toggle}>ABOUT</Link></li>
          <li><Link activeClass="active" smooth spy to="projects" onClick={toggle}>PROJECTS</Link></li>
          <li><Link activeClass="active" smooth spy to="github" onClick={toggle}>GitHub</Link></li>
          <li><Link activeClass="active" smooth spy to="linkedin" onClick={toggle}>LinkedIn</Link></li>
          <li><Link activeClass="active" smooth spy to="contact" onClick={toggle}>CONTACT ME</Link></li>
        </ul>
      </div>

    </nav>
  );
}
