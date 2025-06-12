import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

function About() {
  /*Icons */
  const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="title_headling">
            <h3>We Provides Shortage Remarkable Ideas!</h3>
            <p>
              We are a team of passionate individuals dedicated to delivering
              exceptional solutions that make a difference.
            </p>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">{faBusinessIcon}</div>
              <div className="about_content">
                <h5>Development</h5>
                <p>
                  We specialize in creating innovative software solutions that
                  drive business growth and efficiency.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon green_icon">{faChartPieIcon}</div>
              <div className="about_content">
                <h5>Integration</h5>
                <p>
                  Seamlessly integrate our solutions with your existing systems
                  to enhance functionality and performance.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon blue_icon">{faTruckFastIcon}</div>
              <div className="about_content">
                <h5>Branding</h5>
                <p>
                  Build a strong brand identity with our expert branding
                  services, designed to resonate with your target audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
