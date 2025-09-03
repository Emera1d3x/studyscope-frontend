import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ParentDashboard.css";

const ParentDashboard = () => {
  return (
    <>
      <Navbar />
      <main className="parentdashboard-page">
        <div className="parentdashboard-header">
            Parent Dashboard
        </div>
        <div className="parentdashboard-caption">
            Parent Dashboard
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ParentDashboard;
