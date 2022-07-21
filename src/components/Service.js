import React from "react";
import Fade from "react-reveal/Fade";
import service_1 from "../img/service-1.jpg";
import service_2 from "../img/service-2.jpg";
import "../App.css";

export default function Service() {
  return (
    <div className="container-xxl py-6">
      <Fade bottom>
        <div className="container">
          <div className="row g-5">
            <Fade bottom>
              <div className="col-lg-6 animate__animated animate__fadeInUp">
                <p className="text-primary text-uppercase mb-2">
                  # Our Services
                </p>
                <h1 className="display-6 mb-4 Playfair">
                  What Do We Offer For You?
                </h1>
                <p className="mb-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row gy-5 gx-4">
                  <Fade bottom>
                    <div className="col-sm-6 animate__animated animate__fadeInUp">
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                          <i className="fa fa-bread-slice text-white"></i>
                        </div>
                        <h5 className="mb-0 Playfair">Quality Products</h5>
                      </div>
                      <span>
                        Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      </span>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="col-sm-6 animate__animated animate__fadeInUp">
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                          <i className="fa fa-birthday-cake text-white"></i>
                        </div>
                        <h5 className="mb-0 Playfair">Custom Products</h5>
                      </div>
                      <span>
                        Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      </span>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="col-sm-6 animate__animated animate__fadeInUp">
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                          <i className="fa fa-cart-plus text-white"></i>
                        </div>
                        <h5 className="mb-0 Playfair">Online Order</h5>
                      </div>
                      <span>
                        Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      </span>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="col-sm-6 animate__animated animate__fadeInUp">
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                          <i className="fa fa-truck text-white"></i>
                        </div>
                        <h5 className="mb-0 Playfair">Home Delivery</h5>
                      </div>
                      <span>
                        Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      </span>
                    </div>
                  </Fade>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-lg-6 animate__animated animate__fadeInUp">
                <div className="row img-twice position-relative h-100">
                  <div className="col-6">
                    <img
                      className="img-fluid rounded"
                      src={service_1}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="col-6 align-self-end">
                    <img
                      className="img-fluid rounded"
                      src={service_2}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
}
