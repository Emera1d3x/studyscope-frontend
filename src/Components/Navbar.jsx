import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Assets/StudyScopeLogo.png";
import LogoNight from "../Assets/StudyScopeLogoNight.png";
import HamIcon from "../Assets/Icons/HamIcon.png";

function Navbar({ type = 0 }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
	
  return (
		<>
			<nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
				<div>
					<Link to="/">
						<img className="navbar-logo" src={scrolled? LogoNight : Logo} alt="Logo" />
					</Link>
				</div>

				<div className="navbar-menu">
					<Link className="navbar-link" to="/programs">Programs</Link>
					<Link className="navbar-link" to="/about-us">About Us</Link>
					<Link className="navbar-link" to="/contact">Contact</Link>
					<Link className="navbar-link" to="/our-team">Our Team</Link>
				</div>

				<div className="navbar-actions">
					{type === 0 ? (
						// Not logged in
						<>
							<div className="navbar-loggedout"
									onMouseEnter={() => setDropdownOpen(true)}
									onMouseLeave={() => setDropdownOpen(false)}>
								<div>
									<Link to="/signup" className="navbar-signup">Sign Up</Link>
									{dropdownOpen && (
										<div className="navbar-dropdown">
											<Link to="/parent/login" className="navbar-dropdown-link">Parent Login</Link>
											<Link to="/student/login" className="navbar-dropdown-link">Student Login</Link>
										</div>
									)}
								</div>
							</div>
							<Link to="/start" className="navbar-register">Get Started!</Link>
						</>
					) : type === 1 ? (
						// Logged in student
						<>
							<div className="navbar-loggedin"
									onMouseEnter={() => setDropdownOpen(true)}
									onMouseLeave={() => setDropdownOpen(false)}>
								<div className="navbar-hello">Hello S</div>
								{dropdownOpen && (
									<div className="navbar-dropdown">
										<Link to="/logout" className="navbar-dropdown-link">Logout</Link>
									</div>
								)}
							</div>
							<Link to="/student/dashboard" className="navbar-dashboard"> Student Dashboard</Link>
						</>
					) : (
						// Logged in parent
						<>
							<div className="navbar-loggedin"
									onMouseEnter={() => setDropdownOpen(true)}
									onMouseLeave={() => setDropdownOpen(false)}>
								<div className="navbar-hello">Hello P</div>
								{dropdownOpen && (
									<div className="navbar-dropdown">
										<Link to="/logout" className="navbar-dropdown-link">Logout</Link>
									</div>
								)}
							</div>
							<Link to="/parent/dashboard" className="navbar-dashboard">Parent Dashboard</Link>
						</>
					)}
				</div>
				<div className="navbar-hamburger" onClick={() => {setMenuOpen(!menuOpen); setScrolled(true);}}>
					<img src={HamIcon} className="hamburger-box" />
				</div>
			</nav>
			{menuOpen && (
				<div className="navbar-dropped">
					<div className="navbar-dropped-menu">
						<div><Link className="navbar-dropped-link" to="/programs">Programs</Link></div>
						<div><Link className="navbar-dropped-link" to="/about-us">About Us</Link></div>
						<div><Link className="navbar-dropped-link" to="/contact">Contact</Link></div>
						<div><Link className="navbar-dropped-link" to="/our-team">Our Team</Link></div>
					</div>
					<div className="navbar-dropped-actions">
						{type === 0 ? (
							// Not logged in
							<>
								<div className="navbar-dropped-loggedout">
									<div>
										<Link to="/signup" className="navbar-signup">Sign Up</Link>
									</div>
								</div>
								<Link to="/start" className="navbar-register">Get Started!</Link>
							</>
						) : type === 1 ? (
							// Logged in student
							<>
								<div className="navbar-dropped-loggedin">
									<div className="navbar-hello">Hello S</div>
								</div>
								<Link to="/student/dashboard" className="navbar-dashboard"> Student Dashboard</Link>
							</>
						) : (
							// Logged in parent
							<>
								<div className="navbar-dropped-loggedin">
									<div className="navbar-hello">Hello P</div>
								</div>
								<Link to="/parent/dashboard" className="navbar-dashboard">Parent Dashboard</Link>
							</>
						)}
					</div>
				</div>
			)}
		</>
  );
}

export default Navbar;
