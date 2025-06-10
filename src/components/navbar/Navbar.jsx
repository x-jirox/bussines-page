import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  return (
    <header id="site_header">
      <div className="container">
        <nav className="navbar" id="Navbar">
          <div className="navbar_brand">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar_toggle">{menuIcon}</div>
          <div className="menu_items">
            <ul>
              <li>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="about" spy={true} smooth={true}>
                  About Us
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="services" spy={true} smooth={true}>
                  Services
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="blog" spy={true} smooth={true}>
                  Blog
                </Link>
              </li>
                            <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
