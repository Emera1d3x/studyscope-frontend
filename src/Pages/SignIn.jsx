import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function SignIn() {
  return (
    <>
      <Navbar />
      <div className="signin-page">
        <h1>Welcome to the StudyScope Portal</h1>
        <h2>Sign In</h2>
        <div className="signin-options">
          <button>Parent Account Sign In</button>
          <button>Student Account Sign In</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
