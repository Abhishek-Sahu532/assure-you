import React from "react";
import appStore from "../../assets/images/Appstore.png";
import playstore from "../../assets/images/playstore.png";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerCompanySection">
        <img src={logo} alt="logo" className="logo" />
        <p>Shop Secure, Shop Assure You</p>
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playstore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>

      <div className="footerCategoriesSection">
        <h4>Categories</h4>

        <Link to="/aboutus">About Us</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/howitworks">How it works</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <Link to="/returnpolicy">Return Policy</Link>
      </div>
      <div className="footerHelpSection">
        <h4 className="">Help</h4>
        <Link to="/aboutus">About Us</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/howitworks">How it works</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <Link to="/returnpolicy">Return Policy</Link>
      </div>

      <div className="footerGetInTouchSection">
        <h4>Get In Touch</h4>
        <p>
          <a href="1#">customer@assureyou.com </a>
        </p>
        <p>
          <a href="1#">1234567890</a>
        </p>

        <div className="socialIconSections">
          <a href="1#">
            <img src={facebook} alt="" />{" "}
          </a>
          <a href="1#">
            <img src={instagram} alt="" />{" "}
          </a>
          <a href="1#">
            <img src={twitter} alt=""  />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
