import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./StudentLogin.css";

const StudentLogin = () => {
  return (
    <>
      <Navbar />
      <main className="studentlogin-page">
        <div className="studentlogin-header">
            Student Login
        </div>
        <div className="studentlogin-caption">
            Student Login
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentLogin;
