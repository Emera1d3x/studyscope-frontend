import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="aboutus-page">
        <header className="aboutus-header">
          <h1>About Us</h1>
          <p>
            StudyScope is an academic enrichment company built by Ontario students
            to help learners strengthen their foundations and go beyond the limits
            of the school system. We provide structured group classes and private
            support in Math, Science, and English for students from kindergarten to
            grade 11, combining the personal attention of tutoring with the clarity
            and consistency of a well-designed curriculum.
          </p>
        </header>

        <section className="aboutus-section">
          <h2>Our Story</h2>
          <p>
            From these beginnings, StudyScope grew into an academic enrichment
            company created by Ontario students to help others strengthen their
            foundations and go beyond the school system. Unlike traditional
            tutoring, our programs follow a semester-based schedule built around a
            custom curriculum aligned with the Ontario curriculum. Every student who
            joins enters a guided process — not just a series of sessions. This
            process is designed to build real academic strength through structure,
            consistency, and accountability.
          </p>
        </section>

        <section className="aboutus-section method">
          <h2>The StudyScope Method</h2>
          <p>
            At the heart of our approach is the StudyScope Method — a four-part
            system that ensures every student has the tools and support to succeed:
          </p>
          <ul className="method-list">
            <li>
              <strong>Structured semester programming</strong> that provides a
              clear, predictable learning path.
            </li>
            <li>
              <strong>Instructor-led lessons</strong> that break down concepts into
              simple, understandable steps.
            </li>
            <li>
              <strong>Personalized support</strong> to target each student’s
              specific needs and goals.
            </li>
            <li>
              <strong>Weekly progress tracking</strong> to measure improvement and
              keep students on course.
            </li>
          </ul>
          <p>
            Every part of this method works together to create lasting
            understanding, not just temporary results. Whether a student is catching
            up or moving ahead, they are guided through a defined curriculum, taught
            by trained instructors, and supported every step of the way.
          </p>
        </section>

        <section className="aboutus-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to raise the bar for academic support by giving students
            more than just tutoring — we give them a system that works. We believe
            academic success comes from <em>process, not pressure</em>, and from{" "}
            <em>structure, not shortcuts</em>. Our goal is to build strong
            foundations and then help students excel, both in the classroom and
            beyond.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
