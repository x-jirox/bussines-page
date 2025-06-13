import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutImage from "../../assets/about/about_img.jpg";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
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
          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={AboutImage} alt="about" className="about_main" />
              </div>
              <div className="img_info_box">
                <h6 className="img_info_title">GET A PRICE QUOTE TODAY!</h6>
                <p>
                  Contact us to discuss your project requirements and <br /> get
                  as personalized quote tailored to your needs.
                </p>
                <a href="/">
                  {faPhoneIcon}
                  <span>1-500-655-3210</span>
                </a>
              </div>
            </div>
            <div className="about_col more_space">
              <h3>
                We have busines skills that will increase increase your earnings
              </h3>
              <p>
                We are committed to helping you achieve your business goals
                through innovative technology and strategic insights.
              </p>
              <div className="grid_info">
                <div className="icon">{faUserClockIcon}</div>
                <div className="detail">
                  <h4>Start your business in minutes</h4>
                  <p>
                    Our solutions are designed to be user-friendly and quick to
                    implement, allowing you to start your business operations in
                    no time.
                  </p>
                </div>
              </div>
              <div className="grid_info">
                <div className="icon green_icon">{faHouseLaptopIcon}</div>
                <div className="detail">
                  <h4>Open a business account online</h4>
                  <p>
                    Easily set up your business account online with our
                    streamlined process, ensuring you can focus on what matters
                    most—growing your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
