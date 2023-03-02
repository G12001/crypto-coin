import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/img/about.png";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="h-100">
              <h1 className="display-6 fw-bold">About Us</h1>
              <p
                style={{
                  color: "#16d5ff",
                }}
                className="fs-5 mb-4"
              >
                The Most Trusted Cryptocurrency Platform
              </p>
              <p style={{ color: "#9a9a9a" }}>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p style={{ color: "#9a9a9a" }} className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i
                  style={{
                    color: "#16d5ff",
                  }}
                  className="fa fa-check bg-light btn-sm-square rounded-circle me-3 fw-bold"
                ></i>
                <span style={{ color: "#9a9a9a" }}>
                  Tempor erat elitr rebum at clita
                </span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i
                  style={{
                    color: "#16d5ff",
                  }}
                  className="fa fa-check bg-light btn-sm-square rounded-circle me-3 fw-bold"
                ></i>
                <span style={{ color: "#9a9a9a" }}>
                  Tempor erat elitr rebum at clita
                </span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <i
                  style={{
                    color: "#16d5ff",
                  }}
                  className="fa fa-check bg-light btn-sm-square rounded-circle me-3 fw-bold"
                ></i>
                <span style={{ color: "#9a9a9a" }}>
                  Tempor erat elitr rebum at clita
                </span>
              </div>
              <Link
                style={{
                  backgroundColor: "#16d5ff",
                  border: "none",
                }}
                to={"/"}
                className="btn btn-primary py-3 px-4"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
