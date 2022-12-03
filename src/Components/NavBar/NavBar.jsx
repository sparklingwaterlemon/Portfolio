import "./NavBar.css";
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
        michael
      </Link>

      <div className={isNavExpanded ? "nav-menu-container expanded" : "nav-menu-container"}>
        <ul className="nav-ul">
          <li id="nav-link-p">
            <Link 
              id="nav-link-p-mobile" 
              activeClass="active" 
              smooth spy to="project-section-a" 
              onClick={toggle}>
              PROJECTS
            </Link>
          </li>

          <li id="nav-link-c">
            <Link 
              id="nav-link-c-mobile" 
              activeClass="active" 
              smooth spy to="contact" 
              onClick={toggle}>
              CONTACT
            </Link>
          </li>

          <li id="nav-link-gh">
            <a href="https://github.com/sparklingwaterlemon" target="_blank" rel="noreferrer" id="nav-link-gh-mobile" >
              <img src={require("../../Assets/NavBarImages/github.png")} alt="github"/>
            </a>
          </li>
          
          <li id="nav-link-li">
            <div className="mobile-link-li">
              <a href="https://www.linkedin.com/in/michaelkim3" target="_blank" rel="noreferrer" id="nav-link-li-mobile">
                <img src={require("../../Assets/NavBarImages/linkedin.png")} alt="linkedin"/>
              </a>
            </div>
          </li>

        </ul>
      </div>

      <button
        className={isNavExpanded ? "hamburger expanded" : "hamburger"}
        onClick={toggle}>
      </button>
    </nav>
    </>
  );
}
