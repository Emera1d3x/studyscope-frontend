import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OnlineReviews from "../Components/OnlineReview";
import "../Pages/Homepage.css";
import MathIcon from "../Assets/Icons/MathIcon.png";
import EnglishIcon from "../Assets/Icons/EnglishIcon.png";
import ScienceIcon from "../Assets/Icons/ScienceIcon.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="homepage-container">
        <div className="homepage-hero">
          <div className="slogan">Turning <span className="special1">Effort</span> <br/> into <span className="special2">Excellence</span></div>
          <div className="subheader">Structured programs and private tutoring with a custom curriculum for K–11</div>
					<Link to="/start" className="get-started-btn"> Get Started</Link>
					<div className="submain">
						<div className="specialization"> We specialize in</div>
						<div className="subject-rows">
							<div className="subject">
								<img className="subject-icon" src={MathIcon}/>
								<div className="subject-name"> Math </div>
							</div>
							<div className="subject">
								<img className="subject-icon" src={EnglishIcon}/>
								<div className="subject-name"> English </div>
							</div>
							<div className="subject">
								<img className="subject-icon" src={ScienceIcon}/>
								<div className="subject-name"> Science </div>
							</div>
						</div>
					</div>
        </div>
				<div className="intro">
					<div className="intro-tagline"> Tutoring for Students by Students</div>
					<div className="intro-text"> Short paragraph highlighting that tutors are excelling students who understand the challenges their peers face.</div>
					<div className="intro-features">
						<br/>Personalized one-on-one support
						<br/>Flexible scheduling
						<br/>Language accommodation for ESL students
					</div>
					<div className="intro-video">
						VIDEO
					</div>
				</div>
				<div className="online-reviews">
					<OnlineReviews/>
				</div>
			</div>
			<div className="footer-part">
				<Footer />
			</div>
    </>
  );
}

export default HomePage;
