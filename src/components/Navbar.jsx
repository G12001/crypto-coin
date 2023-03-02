import React from "react";
import { Link } from "react-router-dom";
import iconImg1 from "../assets/img/icon-1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light Small shadow position-sticky top-0 z-3 p-0 px-4 px-lg-5">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <h2 style={{ color: "#16d5ff" }} className="m-0">
          <img
            className="img-fluid me-2"
            src={iconImg1}
            alt=""
            style={{ width: "45px" }}
          />
          CryptoCoin
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-4 py-lg-0">
          <Link to={"/"} className="nav-item nav-link">
            Home
          </Link>
          <Link to={"/"} className="nav-item nav-link">
            About
          </Link>
          <Link to={"/"} className="nav-item nav-link">
            Service
          </Link>
          <Link to={"/"} className="nav-item nav-link">
            Feature
          </Link>
          <Link to={"/"} className="nav-item nav-link">
            FAQs
          </Link>
          <Link to={"/"} className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
