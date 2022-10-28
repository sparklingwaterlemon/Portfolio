import "./NavBar2Ham.css";
import { Link } from "react-scroll";

export default function NavBar2Ham(){
    return(
        <header>
            <div id="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
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
            </div>
        </header>
    )
}