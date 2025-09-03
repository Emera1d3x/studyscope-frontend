import React, {useState} from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ParentLogin.css";
import axios from "axios";

const ParentLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const showErrorModal = (msg) => {
    setErrorMsg(msg);
    setShowError(true);
  };
  const handleLoginParent = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/parent/login",
        {
          loginMethod: "email",
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      )
      .then((result) => {
        console.log(result);
        if (result.data === "Success:LoggedIn") {
          console.log("YESSIR");
        } else if (result.data === "Fail:MissingFields") {
          showErrorModal("Please fill out all credentials!");
        } else if (result.data === "Fail:InvalidEmail") {
          showErrorModal("Invalid Email!");
        } else if (result.data === "Fail:Wrong") {
          showErrorModal("Email or Password Invalid");
        } else {
          showErrorModal("An unexpected error occurred. Please try again.");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Navbar />
      <main className="parentlogin-page">
        <header className="parentlogin-header">
          <h1>Parent Log In</h1>
          <p>
            Log into your parent account! Create students and register them for
            StudyScope programs or keep an eye on their progress!
          </p>
        </header>
        <div className="parentlogin-container">
          <div className="parentlogin-container-title">Parent Sign Up</div>

          <form className="parentlogin-form" onSubmit={handleLoginParent}>

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="JohnSmith@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />

            <button
              className="parentlogin-btn"
              type="submit"
              onClick={handleLoginParent}
            >
              Log In!
            </button>
          </form>
        </div>
      </main>
      <Footer />
      {showError && (
        <div className="parentlogin-error-modal-overlay" onClick={() => setShowError(false)}>
          <div className="parentlogin-error-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Error</h2>
            <div className="parentlogin-error-content">
              <p>{errorMsg}</p>
            </div>
            <button
              className="parentlogin-error-btn"
              onClick={() => setShowError(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ParentLogin;
