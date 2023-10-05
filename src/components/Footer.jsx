import "../styles/destination.css";
import logo from "../images/logo-white.svg";
import location from "../images/icon-location.svg";
import call from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import Button from "./Button";
function Footer() {
  return (
    <footer className="section-three">
      <div className="card-container">
        <div className="footer-card">
          <p className="title-subsection"> Ready To Build Your Community?</p>
          <br />
          <button className="get-started">Get Started For Free</button>
        </div>
      </div>
      <section className="footer-content">
        <div className="footer-inner-content">
          <img src={logo} style={{ width: "200px" }} />
          <div className="second-section-inner-content">
            <ul>
              <li>
                <img src={location} style={{ width: "20px", height: "20px" }} />{" "}
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit, sed do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna aliqua
                </span>
              </li>
              <li>
                <img src={call} />
                <span>+1-543-123-4567</span>
              </li>
              <li>
                <img src={email} />
                <span>example@huddle.com</span>
              </li>
            </ul>
            <ul className="footer-links">
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
            <ul className="footer-links">
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li className="icon">
                <ul className="icon-list">
                  <li>
                    {
                      <CiFacebook
                        style={{ fontSize: "30px" }}
                        className="footer-icon"
                      />
                    }
                  </li>
                  <li>
                    {
                      <TiSocialTwitterCircular
                        style={{ fontSize: "30px" }}
                        className="footer-icon"
                      />
                    }
                  </li>
                  <li>
                    {
                      <CiInstagram
                        style={{ fontSize: "30px" }}
                        className="footer-icon"
                      />
                    }
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="copy-right">
            &copy; Copyright 2018 Huddle. All rights reserved.
            <p class="attribution">
              Challenge by{" "}
              <Link
                to="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </Link>
              . Coded by <Link to="#">ONYIBE JUSTINA </Link>.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
