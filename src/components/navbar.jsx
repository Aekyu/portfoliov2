import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <ul id="left">
          <li id="hideName">
            <Link to={"/"}>Baptiste Couloumies</Link>
          </li>
        </ul>
        <ul id="right">
          <li>
            <Link to={"/about"}>À propos</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
