import "./NavBar.css";
import { Link } from "react-scroll";

export default function NavBar(){
  return(
    <header className="nav-header">
      <div className="nav-container">
        <nav>
          <div id="nav-checkbox">
            <span> test </span>
            <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
          </div>

          <ul className="nav-ul">
            <li className="nav-home"> Home </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="github">
                GitHub
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="linkedin">
                LinkedIn
              </Link>
            </li>
            <li>
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