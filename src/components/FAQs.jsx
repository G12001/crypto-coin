import React from "react";

const FAQs = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 fw-bold">FAQs</h1>
          <p
            style={{
              color: "#16d5ff",
            }}
            className="fs-5 mb-5"
          >
            Frequently Asked Questions
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ color: "#9a9a9a" }}
                  >
                    How to build a website?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ color: "#9a9a9a" }}
                  >
                    How long will it take to get a new website?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ color: "#9a9a9a" }}
                  >
                    Do you only create HTML websites?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                    style={{ color: "#9a9a9a" }}
                  >
                    Will my website be mobile-friendly?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    style={{ color: "#9a9a9a" }}
                  >
                    Will you maintain my site for me?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                    style={{ color: "#9a9a9a" }}
                  >
                    I’m on a strict budget. Do you have any low cost options?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                    style={{ color: "#9a9a9a" }}
                  >
                    Will you maintain my site for me?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                    style={{ color: "#9a9a9a" }}
                  >
                    I’m on a strict budget. Do you have any low cost options?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                >
                  <div style={{ color: "#9a9a9a" }} className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam
                    sed sed magna et magna diam aliquyam amet dolore ipsum erat
                    duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
