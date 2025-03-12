import React from "react";
import "./Footer.css";
import group46 from "../../assets/group46.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col ft-1">
              <img src={group46} className="footer-logo"/>
              <p style={{fontSize: "17px", fontWeight:"250"}}>Farming together growing forever</p><br/>
              <div className="footer-icons">
                <a href="#"><FaFacebook className="icon" /></a>
                <a href="#"><FaTwitter className="icon" /></a>
                <a href="#"><FaInstagram className="icon" /></a>
                <a href="#"><FaLinkedin className="icon" /></a>
              </div>
            </div>

            <div className="col ft-2">
              <h5>COMPANY</h5>
              <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Contact Us</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
