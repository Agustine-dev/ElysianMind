import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Assets/logo1.png";
import "./Navbar.css";

function Navbar() {
   const [showMenu, setShowMenu] = useState(false);
   return (
      <nav className="navbar">
         <img src={logo} alt="logo" className="logo" />
         <div className="desktopMenu">
            <ScrollLink
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="desktopMenuListItem"
            >
               Home
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               About Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="howitworks"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               How We Work
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Resources
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="/therapist"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Our Therapist
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Contact Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="intro"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            ></ScrollLink>
         </div>
         <Link to="/therapist" className="desktopMenuListItem">
            Our Therapist
         </Link>

         <button
            className="desktopMenuBtn"
            onClick={() => {
               var imageElement =
                  document.getElementsByClassName("contactForm1");
               // fixed return null error
               if (imageElement.length > 0) {
                  imageElement[0].scrollIntoView({ behavior: "smooth" });
                }
            }}
         >
            {" "}
            <AccountCircleIcon /> Log In
         </button>

         <div className="mobMenu">
            <Menu onClick={() => setShowMenu(!showMenu)} />{" "}
         </div>
         <div
            className="navMenu"
            style={{ display: showMenu ? "flex" : "none" }}
         >
            <ScrollLink
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Home
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               About Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="skills"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Resources
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Our Therapists
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Contact Us
            </ScrollLink>
         </div>
      </nav>
   );
}

export default Navbar;
