import { useState } from "react";
import "./NavBar3.css";

export default function NavBar3() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        MacroSoft
      </a>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      </button>
      
      <div 
        className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

    </nav>
  );
}
