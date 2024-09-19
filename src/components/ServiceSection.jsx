import React from "react";

const ServiceSection = () => {
  return (
    <>
      <div className="bg-light text-dark py-5 mb-5">
        <div className="container">
          <div className="row">
            {/* Free Shipping */}
            <div className="col-lg-4 service-column d-flex align-items-center">
              <i class="bi bi-truck me-3 fs-1"></i>
              <div className="service-text">
                <h6 className="text-uppercase fw-bold mb-1">
                  Free shipping &amp; return
                </h6>
                <small className="text-muted fw-light text-sm mb-0">
                  Free Shipping over $300
                </small>
              </div>
            </div>
            {/* Money Back Guarantee */}
            <div className="col-lg-4 service-column d-flex align-items-center">
              <i class="bi bi-currency-exchange me-3 fs-1"></i>
              <div className="service-text">
                <h6 className="text-uppercase fw-bold mb-1">
                  Money back guarantee
                </h6>
                <small className="text-muted fw-light text-sm mb-0">
                  30 Days Money Back Guarantee
                </small>
              </div>
            </div>
            {/* Support */}
            <div className="col-lg-4 service-column d-flex align-items-center">
              <i class="bi bi-headset me-3 fs-1"></i>
              <div className="service-text">
                <h6 className="text-uppercase fw-bold mb-1">020-800-456-747</h6>
                <small className="text-muted fw-light text-sm mb-0">
                  24/7 Available Support
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;