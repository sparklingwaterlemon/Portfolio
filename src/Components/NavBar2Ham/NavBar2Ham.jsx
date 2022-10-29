import "./NavBar2Ham.css";
import { Link } from "react-scroll";

export default function NavBar2Ham() {
    return (
        <header className="nav2-header">
            <div id="menuToggle">
                <nav>

                    <input type="checkbox" />
                    <span className="t"></span>
                    <span className="m"></span>
                    <span className="b"></span>

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
                </nav>
            </div>
        </header>
    )
}