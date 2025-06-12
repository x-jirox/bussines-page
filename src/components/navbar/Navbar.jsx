import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  /*Mobile menu state */
  const [sidenav, setSidenav] = useState(false);

  /*Desktop fixed menu */
  const [sticky, setSticky] = useState(false);

  /*mobile icon */
  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  /*Sidenav */
  const sidenavShow=() => {
  setSidenav(!sidenav);
  }

  /*Scroll fixed navbar */
  useEffect(() => {
    const handleScroll=() => {
      setSticky(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })

  return (
    <>
    <header id="site_header" className={`${sticky ? "sticky" : ""}`}>
      <div className="container">
        <nav className="navbar" id="Navbar">
          <div className="navbar_brand">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar_toggle" onClick={sidenavShow}>{menuIcon}</div>
          <div className={`menu_items ${sidenav ===true ? 'active' : ''}`}>
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
  
    </>
  );
}

export default Navbar;
