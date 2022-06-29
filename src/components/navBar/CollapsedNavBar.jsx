import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "../../styles/colapsedNavBar.scss";

const CollapsedNavBar = (props) => {
  const startingPage =
    useLocation().pathname === "/"
      ? "Home"
      : window.location.pathname.split("/")[1];
  const [clickedPage, setClickedPage] = useState(startingPage);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleClickedPage = (e) => {
    setClickedPage(e.target.textContent);
  };

  useEffect(() => {
    if (isMenuClicked) {
      const pages = document.querySelectorAll(".nav-page");
      pages.forEach((page) => {
        page.classList.remove("active");
        if (page.textContent.toLowerCase() === clickedPage.toLowerCase()) {
          page.classList.toggle("active");
        }
      });
    }
  }, [clickedPage, isMenuClicked]);

  const showMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div className="collapsed-navbar">
      <AiOutlineMenu className="menu-icon" onClick={() => showMenu()} />
      {isMenuClicked && (
        <nav className="collapsed-navbar-menu">
          <Link
            className="nav-page"
            to="/"
            onClick={(e) => handleClickedPage(e)}
          >
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
      )}
    </div>
  );
};

export default CollapsedNavBar;
