import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Parent from "../Assets/Icons/ParentIcon.png";
import Student from "../Assets/Icons/StudentIcon.png";
import Register from "../Assets/Icons/RegisterIcon.png";
import "./Start.css";

const Start = () => {
  return (
    <>
      <Navbar />
      <main className="start-page">
        <header className="start-header">
          <h1>Get Started!</h1>
          <p>
            Getting your child set up with tutoring is very easy. Just follow these
            three simple steps to begin their learning journey.
          </p>
        </header>
        <section className="steps-container">
          <div className="step-card">
            <div className="step-icon">
                <div className="step-number">1</div><h2>Create a Parent Account</h2>
                <img src={Parent} className="step-emoji"/>
            </div>
            
            <p>
              Sign up with your email address to create your Parent Dashboard.
              This will be your central hub for managing everything related to your child’s tutoring experience.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">
                <div className="step-number">2</div><h2>Set Up Your Student Profile(s)</h2>
                <img src={Student} className="step-emoji"/>
            </div>
            
            <p>
              Inside your dashboard, you can create a profile for your child.
              If you have more than one child, you’ll be able to add multiple student profiles so each student’s learning journey is tracked separately.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">
                <div className="step-number">3</div><h2>Explore and Enroll in Programs</h2>
                <img src={Register} className="step-emoji"/>
            </div>
            
            <p>
              Browse through our tutoring options — including group classes, in-person sessions, and online programs.
              Once you’ve found the right fit, you can assign the program to a specific student and complete the enrollment with our secure online payment system.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Start;
