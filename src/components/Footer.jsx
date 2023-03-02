import React from "react";
import { Link } from "react-router-dom";
import iconImg from "../assets/img/icon-1.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-light footer mt-5 pt-5 ">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <h1
              style={{
                color: "#16d5ff",
              }}
              className="mb-4"
            >
              <img
                className="img-fluid me-2"
                src={iconImg}
                alt=""
                style={{ width: "45px" }}
              />
              CryptoCoin
            </h1>
            <span style={{ color: "#9a9a9a" }}>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
              ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem
              et sit.
            </span>
          </div>
          <div className="col-md-6">
            <h5 className="mb-4">Newsletter</h5>
            <p style={{ color: "#9a9a9a" }}>
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
            </p>
            <div className="position-relative">
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
                style={{ color: "#9a9a9a" }}
              />
              <button
                style={{
                  backgroundColor: "#16d5ff",
                  border: "none",
                }}
                type="button"
                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Get In Touch</h5>
            <p style={{ color: "#9a9a9a" }}>
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
              USA
            </p>
            <p style={{ color: "#9a9a9a" }}>
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p style={{ color: "#9a9a9a" }}>
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Our Services</h5>
            <Link className="btn btn-link text-decoration-none">
              Currency Wallet
            </Link>
            <Link className="btn btn-link text-decoration-none">
              Currency Transaction
            </Link>
            <Link className="btn btn-link text-decoration-none">
              Bitcoin Investment
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Quick Links</h5>
            <Link className="btn btn-link text-decoration-none">About Us</Link>
            <Link className="btn btn-link text-decoration-none">
              Our Services
            </Link>
            <Link className="btn btn-link text-decoration-none">
              Terms & Condition
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex">
              <Link className="btn btn-square rounded-circle me-1">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="btn btn-square rounded-circle me-1">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="btn btn-square rounded-circle me-1">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link className="btn btn-square rounded-circle me-1">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
