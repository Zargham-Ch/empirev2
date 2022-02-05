import Link from "next/link";
import React from "react";
import CopyRightFooter from "./CopyRightFooter";
const logo = "./assets/footerLogoV3.png";
const arrow = "./assets/rightArrow.png";
const placeholder = "./assets/A3.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="innerContainer">
          <div className="logoRow">
            <Link className="home-link" href="/" passHref>
              <img src={logo} alt="logo" className="logo" />
            </Link>

            {/* <div className="getStarted">
              <h6 className="getStartedText">Ready to get started?</h6>
              <a href="#" className="btnGetStarted">
                Get Started
              </a>
            </div> */}
          </div>
          <div className="row no-gutters">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="footerNavWrapper">
                <h6 className="subscribe">Subscribe to our newsletter</h6>
                <form className="formWrapper">
                  <input
                    type="text"
                    className="input"
                    placeholder="Email address"
                  />
                  <span className="actionBtn">
                    <img src={arrow} />
                  </span>
                </form>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <ul className="navList pl">
                <li className="navLink active">Contacts</li>
                <li className="navLink">Email Marketing</li>
                <li className="navLink">Campaigns</li>
                <li className="navLink">Branding</li>
                <li className="navLink">Offline</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <ul className="navList pl">
                <li className="navLink active">Marketing Offer</li>
                <li className="navLink">Our Story</li>
                <li className="navLink">Benefits</li>
                <li className="navLink">Team</li>
                <li className="navLink">Careers</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <ul className="navList">
                <li className="navLink active">Business proposals</li>
                <li className="navLink">FAQs</li>
                <li className="navLink">Contact Us</li>
              </ul>
            </div>
          </div>
          <CopyRightFooter />
        </div>
      </div>
      <img src={placeholder} className="placeholderImage" />
    </div>
  );
};

export default Footer;
