import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [showTos, setShowTos] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleCheckbox = (e) => {
    setAgreed(e.target.checked);
  };
  const openTos = () => setShowTos(true);
  const closeTos = () => setShowTos(false);
  const showErrorModal = (msg) => {
    setErrorMsg(msg);
    setShowError(true);
  };
  const showSuccessModal = () => {
    setShowSuccess(true);
  };
  const handleSignUpParent = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/parent/signup",
        {
          loginMethod: "email",
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        },
        { withCredentials: true }
      )
      .then((result) => {
        console.log(result);

        if (result.data === "Success:VerificationSent") {
          showSuccessModal();
        } else if (result.data === "Fail:MissingFields") {
          showErrorModal("You are missing some information. Please check carefully!");
        } else if (result.data === "Fail:InvalidEmail") {
          showErrorModal("Invalid Email!");
        } else if (result.data === "Fail:PasswordShort") {
          showErrorModal("Password is too short! Use atleast more than 7 characters.");
        } else if (result.data === "Fail:PasswordLong") {
          showErrorModal("Password is too short! Use less than 21 characters.");
        } else {
          showErrorModal("An unexpected error occurred. Please try again.");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <main className="signup-page">
        <header className="signup-header">
          <h1>Sign Up</h1>
          <p>
            Create a parent account. After signing up you can create children logins
            and register them for our programs!
          </p>
        </header>
        <div className="signup-container">
          <div className="signup-container-title">Parent Sign Up</div>

          <form className="signup-form" onSubmit={handleSignUpParent}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email Address (Primary contact)</label>
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

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(999) 999-9999"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <div className="tos-container">
              <div className="tos-container-left">
                <div className="tos-container-part">I acknowledge that I have read and agree to StudyScope’s policies regarding attendance, refunds, and payment.</div>
                <div
                  type="button"
                  className="tos-link"
                  onClick={openTos}
                >
                  StudyScope's Policies, Terms & Conditions
                </div>
              </div>
              <input
                type="checkbox"
                id="tos"
                checked={agreed}
                onChange={handleCheckbox}
              />
            </div>

            <button
              className="signup-btn"
              type="submit"
              disabled={!agreed}
            >
              Sign Up!
            </button>
          </form>
        </div>
      </main>
      <Footer />

      {showTos && (
        <div className="tos-modal-overlay" onClick={closeTos}>
          <div className="tos-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Terms and Conditions</h2>
            <div className="tos-content">
              <p><strong>Registration</strong><br/>
              1.1. A registration is deemed complete, and the student is considered enrolled, once the registration form, the annual family registration fee, and the first installment of tuition have been received and approved by administration.<br/>1.2. Places will not be held in classes until registration is complete.<br/>1.3. Although every effort will be made to accommodate students, StudyScope reserves the right to cancel or reschedule a class due to insufficient enrollment.</p>
              <p><strong>Attendance and Make-Up Classes</strong>
              <br/>2.1. Students are expected to attend all scheduled classes.<br/>2.2. Families may request a make-up tutoring session if they cannot attend a class once per month, provided notice is given at least 24 hours in advance and the tutoring session is scheduled in a reasonable amount of time.<br/>2.3. Missed classes without notice are not eligible for make-up.<br/>2.4. It is the responsibility of the student and/or parent to obtain any missed homework or lesson materials from the StudyScope office.</p>
              <p><strong>Withdrawal and Refunds</strong>
              <br/>3.1. A student may request a partial refund for up to 5 weeks into the first term. The annual registration fee is non-refundable.<br/>3.2. After this period, no refunds shall be issued for the remainder of the term.<br/>3.3. Withdrawal requests must be submitted in writing to the StudyScope office.<br/>3.4. Students who withdraw before the end of a school year forfeit any priority in class registration for the following year.</p>
              <p><strong>Student Conduct</strong><br/>
              4.1. Students are expected to participate respectfully, arrive on time, and follow the instructions of tutors and staff.<br/>4.2. Inappropriate or disruptive behavior may result in probation or removal from the program at the discretion of the StudyScope office, without refund of tuition.<br/>4.3. Students are expected to dress in a manner appropriate for an academic setting.</p> 
              <p><strong>Parent/Guardian Responsibilities</strong><br/>
              5.1. Parents/guardians are responsible for their child before and after class times. StudyScope staff cannot assume responsibility outside of scheduled instruction.<br/>5.2. For students in Kindergarten through Grade 5, a parent/guardian must escort the student to and from the classroom.<br/>5.3. Parents must ensure that StudyScope has up-to-date emergency contact information.</p> 
              <p><strong>Health and Safety</strong><br/>
              6.1. Parents/guardians must disclose any allergies, medical conditions, or learning differences on the registration form.<br/>6.2. StudyScope staff are not authorized to administer medication.<br/>6.3. In the event of an emergency, staff will contact the parent/guardian or the designated emergency contact. If necessary, emergency services will be called.</p>
              <p><strong>Photography and Media</strong><br/>
              7.1. Parents may provide consent for StudyScope to photograph or videotape students for internal training or promotional purposes.<br/>7.2. Consent is optional and can be withdrawn at any time by written notice.</p>
              <p><strong>Privacy Policy</strong><br/>
              8.1. StudyScope collects family information to provide appropriate educational services and to communicate with parents/guardians.<br/>8.2. All information is stored securely and will not be sold or rented to any third party.<br/>8.3. Information is only disclosed to those directly involved in the provision of services to the student or as required by law.</p>
            </div>
          </div>
        </div>
      )}
      {showError && (
        <div className="signup-error-modal-overlay" onClick={() => setShowError(false)}>
          <div className="signup-error-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Error</h2>
            <div className="signup-error-content">
              <p>{errorMsg}</p>
            </div>
            <button
              className="signup-error-btn"
              onClick={() => setShowError(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="signup-success-modal-overlay" onClick={() => setShowSuccess(false)}>
          <div className="signup-success-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Success 🎉</h2>
            <div className="signup-success-content">
              <p>
                <strong>Great!</strong> Verification email sent to your email inbox.<br />
                After clicking verify in the email, you are all set!
              </p>
            </div>
            <button
              className="signup-success-btn"
              onClick={() => navigate("parent/login")}
            >
              Proceed Parent Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
