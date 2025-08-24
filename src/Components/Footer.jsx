import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/StudyScopeLogoNight.png";
import Website from "../Assets/Icons/WebsiteIcon.png"
import Instagram from "../Assets/Icons/InstagramIcon.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
					<Link to="/">
						<img
							src={Logo}
							alt="StudyScope Logo"
							className="footer-logo-img"
						/>
					</Link>
          

          <h3 className="footer-heading">Contact Info</h3>
          <p>
            Toronto, <br />Ontario
          </p>
          <p>
            <a href="tel:416-846-3634">(416) 846-3634</a>
          </p>
          <p>
            <a href="mailto:info@studyscopetutoring.com">
              info@studyscopetutoring.com
            </a>
          </p>

          <div className="footer-socials">
						
						<Link to="https://studyscopetutoring.com/" target="_blank">
            	<img src={Website} alt="Website" />
						</Link>
						<Link to="https://www.instagram.com/studyscope_tutoring/" target="_blank">
            	<img src={Instagram} alt="Instagram" />
						</Link>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Programs</h3>
          <ul>
            <li><a href="/programs">Group Classes</a></li>
            <li><a href="/programs">In-person</a></li>
            <li><a href="/programs">Online</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Resources</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/our-team">Our Team</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 StudyScope Tutoring |{" "}
          <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
