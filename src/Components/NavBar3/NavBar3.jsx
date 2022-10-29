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
    <header className="nav-header">
      <nav className="nav-bar">
        {/* make this scroll to top */}
        <Link className="nav-home" smooth spy to="about" onClick={toggle}>
          Mike
        </Link>


        <button
          className="hamburger"
          onClick={toggle}>
        </button>
        
        
        <div class="ham-container">
          <span className={isNavExpanded ? "ham on t" : "ham off t"} > &nbsp;</span>
          <span className={isNavExpanded ? "ham on m" : "ham off m"} > &nbsp;</span>
          <span className={isNavExpanded ? "ham on b" : "ham off b"} > &nbsp;</span>
        </div>

        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul className="nav-ul">
            <li><Link activeClass="active" smooth spy to="about" onClick={toggle}>ABOUT</Link></li>
            <li><Link activeClass="active" smooth spy to="projects" onClick={toggle}>PROJECTS</Link></li>
            <li><Link activeClass="active" smooth spy to="github" onClick={toggle}>GitHub</Link></li>
            <li><Link activeClass="active" smooth spy to="linkedin" onClick={toggle}>LinkedIn</Link></li>
            <li><Link activeClass="active" smooth spy to="contact" onClick={toggle}>CONTACT ME</Link></li>
          </ul>
        </div>

      </nav>
    </header>
  );
}
