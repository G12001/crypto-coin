import React from "react";
import iconImg9 from "../assets/img/icon-9.png";
import iconImg10 from "../assets/img/icon-10.png";
import iconImg2 from "../assets/img/icon-2.png";

const Facts = () => {
  return (
    <div className="container-xxl bg-light py-5 my-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 text-center">
            <img className="img-fluid mb-4" src={iconImg9} alt="" />
            <h1 className="display-4 fw-bold" data-toggle="counter-up">
              64834
            </h1>
            <p
              style={{
                color: "#16d5ff",
              }}
              className="fs-5 mb-0"
            >
              Today Transactions
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <img className="img-fluid mb-4" src={iconImg10} alt="" />
            <h1 className="display-4 fw-bold" data-toggle="counter-up">
              67933496
            </h1>
            <p
              style={{
                color: "#16d5ff",
              }}
              className="fs-5 mb-0"
            >
              Monthly Transactions
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <img className="img-fluid mb-4" src={iconImg2} alt="" />
            <h1 className="display-4 fw-bold" data-toggle="counter-up">
              7939603366
            </h1>
            <p
              style={{
                color: "#16d5ff",
              }}
              className="fs-5 mb-0"
            >
              Total Transactions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
