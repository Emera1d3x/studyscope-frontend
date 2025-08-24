import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { UserProvider } from "./Context/UserContext";
import HomePage from "./Pages/Homepage";
import Programs from "./Pages/Programs";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";

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
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}
export default App;
