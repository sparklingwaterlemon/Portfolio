import "./NavBar.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";


export default function NavBar(){
  const [toggle, setToggle] = useState(true)

  const toggleMenu = () => {
      setToggle(!toggle)
  }
 

  return(
    <header className="nav-header">
      <div className="nav-container">
        <nav>
          <div className="nav-button-container">
            
            <span> test </span>
            <button onClick={toggleMenu} />
              <span></span>
              <span></span>
              <span></span>
          </div>

          <ul className={toggle ? "nav-ul" : "nav-ul show"}>
            <li className="nav-home"> Home </li>
            <li><Link activeClass="active" smooth spy to="about" onClick={toggleMenu}>ABOUT</Link></li>
            <li><Link activeClass="active" smooth spy to="projects" onClick={toggleMenu}>PROJECTS</Link></li>
            <li><Link activeClass="active" smooth spy to="github" onClick={toggleMenu}>GitHub</Link></li>
            <li><Link activeClass="active" smooth spy to="linkedin" onClick={toggleMenu}>LinkedIn</Link></li>
            <li><Link activeClass="active" smooth spy to="contact" onClick={toggleMenu}>CONTACT ME</Link></li>
          </ul>

        </nav>
      </div>
    </header>
  )
}