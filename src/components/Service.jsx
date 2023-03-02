import React from "react";
import { Link } from "react-router-dom";
import {
  iconImg3,
  iconImg4,
  iconImg5,
  iconImg6,
  iconImg7,
  iconImg8,
} from "../assets/img/index";

const Service = () => {
  return (
    <div className="container-xxl bg-light py-5 my-5">
      <div className="container py-5">
        <div className="text-center mx-auto " style={{ maxWidth: "500px" }}>
          <h1 className="display-6 fw-bold">Services</h1>
          <p
            style={{
              color: "#16d5ff",
            }}
            className="fs-5 mb-5"
          >
            Buy, Sell And Exchange Cryptocurrency
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white p-5">
              <img className="img-fluid mb-4" src={iconImg3} alt="" />
              <h5 className="mb-3">Currency Wallet</h5>
              <p style={{ color: "#9a9a9a" }}>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <Link
                style={{
                  color: "#16d5ff",
                }}
                to={"/"}
                className="text-decoration-none"
              >
                Read More <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white p-5">
              <img className="img-fluid mb-4" src={iconImg4} alt="" />
              <h5 className="mb-3">Currency Transaction</h5>
              <p style={{ color: "#9a9a9a" }}>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <Link
                style={{
                  color: "#16d5ff",
                }}
                to={"/"}
                className="text-decoration-none"
              >
                Read More <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white p-5">
              <img className="img-fluid mb-4" src={iconImg5} alt="" />
              <h5 className="mb-3">Bitcoin Investment</h5>
              <p style={{ color: "#9a9a9a" }}>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <Link
                style={{
                  color: "#16d5ff",
                }}
                to={"/"}
                className="text-decoration-none"
              >
                Read More <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white p-5">
              <img className="img-fluid mb-4" src={iconImg6} alt="" />
              <h5 className="mb-3">Currency Exchange</h5>
              <p style={{ color: "#9a9a9a" }}>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <Link
                style={{
                  color: "#16d5ff",
                }}
                to={"/"}
                className="text-decoration-none"
              >
                Read More <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white p-5">
              <img className="img-fluid mb-4" src={iconImg7} alt="" />
              <h5 className="mb-3">Bitcoin Escrow</h5>
              <p style={{ color: "#9a9a9a" }}>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <Link
                style={{
                  color: "#16d5ff",
                }}
                to={"/"}
                className="text-decoration-none"
              >
                Read More <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white p-5">
              <img className="img-fluid mb-4" src={iconImg8} alt="" />
              <h5 className="mb-3">Token Sale</h5>
              <p style={{ color: "#9a9a9a" }}>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <Link
                style={{
                  color: "#16d5ff",
                }}
                to={"/"}
                className="text-decoration-none"
              >
                Read More <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
