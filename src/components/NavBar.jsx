import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="main">
          <img className="logo" src={Logo} alt="" />
          <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="menu">Menu</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
