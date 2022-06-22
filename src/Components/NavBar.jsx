import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import Context from "../Store/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = React.useContext(Context);

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container" id="navbarNavAltMarkup">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/about">
            About
          </NavLink>

          <NavLink className="nav-link" to="/skills">
            Resume
          </NavLink>

          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>

          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>

          <button className="modeIcon" onClick={toggleTheme}>
            {theme ? <MdDarkMode /> : <IoMdSunny />}
          </button>
        </div>
      </nav>
    </header>
  );
}
