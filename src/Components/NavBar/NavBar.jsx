import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggle = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    
      <nav className="nav-bar">
        
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
