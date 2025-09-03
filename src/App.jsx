import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { UserProvider } from "./Context/UserContext";
import HomePage from "./Pages/Homepage";
import Programs from "./Pages/Programs";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";
import Start from "./Pages/Start"
import SignUp from "./Pages/Auth/SignUp";
import Logout from "./Pages/Auth/Logout";
import ParentLogin from "./Pages/Auth/ParentLogin";
import StudentLogin from "./Pages/Auth/StudentLogin";
import ParentDashboard from "./Pages/Auth/ParentDashboard";
import StudentDashboard from "./Pages/Auth/StudentDashboard";
import ResetPassword from "./Pages/Auth/ResetPassword";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="" element={<HomePage />}></Route>
              <Route path="/programs" element={<Programs />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/our-team" element={<OurTeam />}></Route>
              <Route path="/start" element={<Start />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/parent/login" element={<ParentLogin />}></Route>
              <Route path="/student/login" element={<StudentLogin />}></Route>
              <Route path="/parent/dashboard" element={<ParentDashboard />}></Route>
              <Route path="/student/dashboard" element={<StudentDashboard />}></Route>
              <Route path="/reset-password/:token" element={<ResetPassword />}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}
export default App;
