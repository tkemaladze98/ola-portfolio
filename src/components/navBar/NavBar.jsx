import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navBar.scss";
const NavBar = (props) => {
  

  useEffect(() => {
    const pages = document.querySelectorAll(".nav-page");
    pages.forEach((page) => {
        page.classList.remove("active")
      if (page.textContent.toLowerCase() === props.clickedPage.toLowerCase()){
        page.classList.toggle("active");
      }
    });
  }, [props.clickedPage]);
  

  return (
    <div className="navbar">
      <h1 className="logo">My Portfolio</h1>
      <nav className="navbar-menu">
        <Link className="nav-page" to="/" onClick={(e) => props.handleClickedPage(e)}>
          Home
        </Link>
        <Link
          className="nav-page"
          to="about"
          onClick={(e) => props.handleClickedPage(e)}
        >
          About
        </Link>
        <Link
          className="nav-page"
          to="contact"
          onClick={(e) => props.handleClickedPage(e)}
        >
          Contact
        </Link>
        <Link
          className="nav-page"
          to="projects"
          onClick={(e) => props.handleClickedPage(e)}
        >
          Projects
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
