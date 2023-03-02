import React from "react";
import {
  iconImg3,
  iconImg4,
  iconImg5,
  iconImg6,
  iconImg7,
  iconImg8,
} from "../assets/img/index";

const Feature = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto " style={{ maxWidth: "500px" }}>
          <h1 className="display-6 fw-bold">Why Us!</h1>
          <p
            style={{
              color: "#16d5ff",
            }}
            className="fs-5 mb-5"
          >
            The Best In The crypto Industry
          </p>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 ">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={iconImg3} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Easy To Start</h5>
                <span style={{ color: "#9a9a9a" }}>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={iconImg4} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Safe & Secure</h5>
                <span style={{ color: "#9a9a9a" }}>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={iconImg5} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Affordable Plans</h5>
                <span style={{ color: "#9a9a9a" }}>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={iconImg6} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Secure Storage</h5>
                <span style={{ color: "#9a9a9a" }}>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={iconImg7} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Protected By Insurance</h5>
                <span style={{ color: "#9a9a9a" }}>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={iconImg8} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">24/7 Support</h5>
                <span style={{ color: "#9a9a9a" }}>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
