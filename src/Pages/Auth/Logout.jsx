import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./Logout.css";

const Logout = () => {
  return (
    <>
      <Navbar />
      <main className="logout-page">
        <div className="logout-header">
            Logout
        </div>
        <div className="logout-caption">
            Click the button below to logout:
        </div>
        <div className="logout-btn">
            Log out
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Logout;
