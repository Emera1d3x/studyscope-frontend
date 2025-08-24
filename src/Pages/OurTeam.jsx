import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./OurTeam.css";
import TeamPhoto from "../Assets/TeamPhoto.jpg"

// Example data for executive team
const execTeam = [
  {
    name: "Alex Chen",
    role: "Co-Founder & Director",
    bio: "Alex is a top student in Ontario with a passion for building accessible academic support. He oversees curriculum development and student success strategies.",
    photo: "/images/alex.jpg",
  },
  {
    name: "Sofia Patel",
    role: "Co-Founder & Operations Lead",
    bio: "Sofia manages program operations and ensures that classes run smoothly. She focuses on maintaining high teaching standards and student engagement.",
    photo: "/images/sofia.jpg",
  },
  {
    name: "Daniel Kim",
    role: "Head of Curriculum",
    bio: "Daniel designs and refines StudyScope’s structured programs to align with the Ontario curriculum, ensuring clarity and rigor in every lesson.",
    photo: "/images/daniel.jpg",
  },
];

const OurTeam = () => {
  return (
    <>
      <Navbar />
      <main className="ourteam-page">
        <div className="ourteam-banner">
          <img src={TeamPhoto} alt="StudyScope Team" />
        </div>

        <section className="ourteam-section">
          <h2>Our Team</h2>
          <p>
            The StudyScope team is made up of dedicated, high-achieving students
            and trained instructors who share one goal: to help every learner
            reach their potential. We believe that the best teaching comes from
            people who not only understand the material but also remember what it
            feels like to be in the student’s seat. That is why our team combines
            subject expertise with empathy, patience, and a commitment to making
            learning clear and approachable.
          </p>
          <p>
            Every member of our team goes through a careful selection and training
            process to ensure they can deliver lessons that are accurate, engaging,
            and easy to follow. We work collaboratively, sharing ideas and
            strategies so that our students benefit from the strengths of the
            entire team, not just their individual tutor or instructor.
          </p>
        </section>

        <section className="ourteam-section exec">
          <h2>Executive Team</h2>
          <div className="exec-grid">
            {execTeam.map((member, i) => (
              <div className="exec-card" key={i}>
                <img src={member.photo} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ourteam-section join">
          <h2>Join Our Team</h2>
          <p>
            Interested in helping students achieve their full potential? We’re
            always looking for passionate tutors and instructors to join our team.
            If you are dedicated, empathetic, and excited about teaching, we’d love
            to hear from you!
          </p>
          <p className="apply-text">
            To apply, send your resume and a short statement of interest to{" "}
            <a href="mailto:careers@studyscope.ca">careers@studyscope.ca</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurTeam;
