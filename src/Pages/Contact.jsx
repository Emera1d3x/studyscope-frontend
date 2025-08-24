import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Contact.css";
import ContactBanner from "../Assets/ContactUs.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <div className="contact-banner">
          <img src={ContactBanner} alt="Contact StudyScope" />
          <div className="contact-banner-overlay">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you — let’s connect!</p>
          </div>
        </div>

        <section className="contact-section card">
          <h2>Our Centers</h2>
          <ul className="locations">
            <li>
              <strong>Toronto Center</strong> — Mon–Fri: 4pm–8pm, Sat: 10am–4pm
            </li>
            <li>
              <strong>Mississauga Center</strong> — Mon–Fri: 5pm–9pm, Sat: 11am–5pm
            </li>
            <li>
              <strong>Online Programs</strong> — Flexible scheduling
            </li>
          </ul>
          <p className="note">*Hours subject to change as new locations open.</p>
        </section>

        <section className="contact-section flex">
          <div className="contact-info card">
            <h2>Get in Touch</h2>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+14165551234">(416) 555-1234</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@studyscope.ca">info@studyscope.ca</a>
            </p>
            <p>
              Have questions about our programs, enrollment, or teaching
              opportunities? We’re happy to help.
            </p>
          </div>
        </section>

        <section className="contact-section card map">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="StudyScope Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5105239866943!2d-79.38393428450853!3d43.653481179121845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2f4a3c01ab%3A0x5bb2e7b9e8b8ec9a!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1692929999999"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
