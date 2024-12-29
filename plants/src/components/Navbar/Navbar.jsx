import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-transparent"
      style={{ boxShadow: "0px 4px 2px -5px black" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold fs-5 d-flex align-items-center ms-3"
          to="home"
        >
          <FaLeaf className="mx-2" style={{ color: "#4CAF50" }} />
          <span className="green">FEED UR SEED</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto ms-auto">
            <li className="nav-item">
              <Link className="nav-link green" to="home" id="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link green" to="ImageRecognition">
                Recognition 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link green" to="shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link green"
                to="chatbot"
                style={{ position: "relative", display: "inline-block" }}
              >
                <span className="new-label">new</span>
                Chat with us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link green d-flex align-items-center"
                to="login"
              >
                <FaSignInAlt className="me-1" />
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link green d-flex align-items-center"
                to="register"
              >
                <FaUserPlus className="me-1" />
                Register
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link green d-flex align-items-center">
                <FaSignOutAlt className="me-1" />
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
