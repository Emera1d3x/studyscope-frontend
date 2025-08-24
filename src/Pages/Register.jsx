import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Register() {
  return (
    <>
      <Navbar />
      <div className="register-page">
        <h1>Welcome to the StudyScope Portal</h1>
        <h2>Register</h2>
        <div className="register-options">
          <button>Parent Account Register</button>
          <button>Student Account Register</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
