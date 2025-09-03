import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  return (
    <>
      <Navbar />
      <main className="studentdashboard-page">
        <div className="studentdashboard-header">
            Student Dashboard
        </div>
        <div className="studentdashboard-caption">
            Student Dashboard
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentDashboard;
