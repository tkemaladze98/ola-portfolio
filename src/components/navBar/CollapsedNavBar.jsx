import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles/colapsedNavBar.scss";

const CollapsedNavBar = (props) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    if (isMenuClicked) {
      const pages = document.querySelectorAll(".nav-page");
      pages.forEach((page) => {
        page.classList.remove("active");
        if (page.textContent.toLowerCase() === props.clickedPage.toLowerCase()) {
          page.classList.toggle("active");
        }
      });
    }
  }, [props.clickedPage, isMenuClicked]);


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
            onClick={(e) => props.handleClickedPage(e)}
          >
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
      )}
    </div>
  );
};

export default CollapsedNavBar;
