import React from "react";
import "./Home.css";
import BannerImage from "../../assets/banner/banner-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShieldHalved,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  /*Icons */
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                WE PROMOTE YOUR <span>BUSINNES</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">Get Started</a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="Banner_image" />
              </div>
              <div className="banner_style_1">
                {faChartIcon}
                <h4>Businnes Analysis</h4>
              </div>
              <div className="banner_style_1 banner_style_2">
                {faShieldIcon}
                <h4>99.9% Success</h4>
              </div>
              <div className="banner_style_1 banner_style_3">
                {faChartAreaIcon}
                <h4>Strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
