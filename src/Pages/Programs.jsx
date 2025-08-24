import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Programs.css";
import GroupClasses from "../Assets/GroupClasses.jpg";
import InPerson from "../Assets/InPerson.JPG";
import Online from "../Assets/Online.jpg";

const Programs = () => {
  return (
    <>
      <Navbar />
      <main className="programs-page">
        <header className="programs-header">
          <h1>Our Programs</h1>
          <p>
            We offer engaging in-person and online programs for Grades K–11. With
            small class sizes, curriculum-driven learning, and a focus on mastery,
            our goal is to help every student thrive.
          </p>
        </header>

        <section className="programs-list">
          <div className="program-card">
            <div className="program-image">
              <img src={GroupClasses} alt="Group Classes" />
            </div>
            <div className="program-info">
              <h2>Group Classes</h2>
							<p className="program-cost">$250 / semester</p>
              <div className="program-tags">
                <span className="tag tag-semester-based">Semester-based</span>
                <span className="tag tag-small-class-sizes">Small Class Sizes</span>
                <span className="tag tag-curriculum-driven">Curriculum-driven</span>
                <span className="tag tag-focus-on-mastery">Focus on Mastery</span>
              </div>
              <p>
                Our group classes provide students with structured learning
                alongside peers, guided by experienced instructors. Classes are
                semester-based with dedicated time for practice and feedback.
              </p>
              <a href="#" className="program-register">
                Register
              </a>
            </div>
          </div>

          <div className="program-card">
            <div className="program-image">
              <img src={InPerson} alt="In-Person" />
            </div>
            <div className="program-info">
              <h2>In-Person</h2>
							<p className="program-cost">$250 / semester</p>
              <div className="program-tags">
                <span className="tag tag-centers">Centers</span>
                <span className="tag tag-scheduled-times">Scheduled Times</span>
                <span className="tag tag-interactive">Interactive</span>
              </div>
              <p>
                We offer in-person learning at select centers, with dedicated
                teachers and hands-on activities. Schedules and locations will be
                announced soon.
              </p>
              <a href="#" className="program-register">
                Register
              </a>
            </div>
          </div>

          <div className="program-card">
            <div className="program-image">
              <img src={Online} alt="Online" />
            </div>
            <div className="program-info">
              <h2>Online</h2>
							<p className="program-cost">$250 / semester</p>
              <div className="program-tags">
                <span className="tag tag-remote">Remote</span>
                <span className="tag tag-flexible-scheduling">
                  Flexible Scheduling
                </span>
                <span className="tag tag-accessible">Accessible</span>
              </div>
              <p>
                Our online programs allow students to learn from anywhere with
                flexible scheduling. Classes are interactive and designed to match
                our in-person curriculum.
              </p>
              <a href="#" className="program-register">
                Register
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
