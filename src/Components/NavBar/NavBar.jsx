import "./NavBar.css";
import { Link } from "react-scroll";

export default function NavBar(){
  return(
    <header className="nav-header">
      <div className="mobile-container">
        <nav>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li className="nav-li">
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li className="nav-li">
              <Link activeClass="active" smooth spy to="github">
                GitHub
              </Link>
            </li>
            <li className="nav-li">
              <Link activeClass="active" smooth spy to="linkedin">
                LinkedIn
              </Link>
            </li>
            <li className="nav-li">
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}