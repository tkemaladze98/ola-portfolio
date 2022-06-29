import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navBar.scss";

const NavBar = (props) => {
  const startingPage =
    useLocation().pathname === "/"
      ? "Home"
      : window.location.pathname.split("/")[1];
  const [clickedPage, setClickedPage] = useState(startingPage);

  const handleClickedPage = (e) => {
    setClickedPage(e.target.textContent);
  };

  useEffect(() => {
    const pages = document.querySelectorAll(".nav-page");
    pages.forEach((page) => {
      page.classList.remove("active");
      if (page.textContent.toLowerCase() === clickedPage.toLowerCase()) {
        page.classList.toggle("active");
      }
    });
  }, [clickedPage]);

  return (
    <div className="navbar">
      <h1 className="logo">My Portfolio</h1>
      <nav className="navbar-menu">
        <Link className="nav-page" to="/" onClick={(e) => handleClickedPage(e)}>
          Home
        </Link>
        <Link
          className="nav-page"
          to="about"
          onClick={(e) => handleClickedPage(e)}
        >
          About
        </Link>
        <Link
          className="nav-page"
          to="contact"
          onClick={(e) => handleClickedPage(e)}
        >
          Contact
        </Link>
        <Link
          className="nav-page"
          to="projects"
          onClick={(e) => handleClickedPage(e)}
        >
          Projects
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
