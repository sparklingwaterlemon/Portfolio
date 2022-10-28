import "./NavBar.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";


export default function NavBar(){
  const [toggle, setToggle] = useState(-1)
  const [toggledDisplay, setToggledDisplay] = useState("nav-ul-show")

  const toggleMenu = () => {
      setToggle(toggle * -1)
      console.log("(1) togglebutton---", toggle)
  }
  useEffect(() =>{
    if(toggle == 1){
      console.log("(2) useEffect--- true")
      setToggledDisplay("nav-ul-hide")
    }else{
      console.log("false")
      setToggledDisplay("nav-ul-show")
    }
  })
  

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

          <ul className="nav-ul" id={toggledDisplay}>
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