import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faCopy,
  faMarker,
  faUserGear,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  /*Icons */
  const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;
  const faMarketIcon = <FontAwesomeIcon icon={faMarker} />;
  const faUserIcon = <FontAwesomeIcon icon={faUserGear} />;
  const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;

  return (
    <div id="services">
      <div className="container">
        <div className="title_headling">
          <h3>What's Services We Are Offering to Our Customers</h3>
          <p>
            Offering a wide range of services to meet the diverse needs of our
            customers, we strive to provide exceptional quality and value in
            everything we do.
          </p>
        </div>
        <div className="service_wrapper">
          <div className="service_box">
            <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
            <h4 className="number">01</h4>
            <div className="service_content">
              <h5>Cloud Computing</h5>
              <p>
                Cloud computing services provide scalable and flexible IT
                resources over the internet, enabling businesses to access
                computing power, storage, and applications on demand.
              </p>
              <a href="/" className="read">
                Read more
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon blue_icon">{faChartBarIcon}</div>
            <h4 className="number">02</h4>
            <div className="service_content">
              <h5>Business Strategy</h5>
              <p>Business strategy services help organizations define their</p>
              <a href="/" className="read">
                Read more
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon blue_icon">{faCopyIcon}</div>
            <h4 className="number">03</h4>
            <div className="service_content">
              <h5>Reports Analysis</h5>
              <p>
                Reports analysis services provide insights and recommendations
                based on data analysis, helping businesses
              </p>
              <a href="/" className="read">
                Read more
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon blue_icon">{faMarketIcon}</div>
            <h4 className="number">04</h4>
            <div className="service_content">
              <h5>Decision Maker</h5>
              <p>
                Decision maker services assist organizations in making informed
                choices by providing data-driven insights and strategic
                recommendations.
              </p>
              <a href="/" className="read">
                Read more
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon blue_icon">{faUserIcon}</div>
            <h4 className="number">05</h4>
            <div className="service_content">
              <h5>Customer Oriented</h5>
              <p>
                Customer-oriented services focus on understanding and meeting
                the needs of customers, ensuring satisfaction and loyalty
                through personalized experiences.
              </p>
              <a href="/" className="read">
                Read more
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon blue_icon">{faCoinsIcon}</div>
            <h4 className="number">06</h4>
            <div className="service_content">
              <h5>Solution Focused</h5>
              <p>
                Solution-focused services aim to address specific challenges
                faced by businesses, providing tailored strategies and tools to
                achieve desired outcomes.
              </p>
              <a href="/" className="read">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
