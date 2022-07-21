import React, { Suspense } from "react";
import about_1 from "../img/about-1.jpg";
import about_2 from "../img/about-2.jpg";

import Fade from "react-reveal/Fade";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Service = React.lazy(() => import("./Service"));
const ChefTeam = React.lazy(() => import("./ChefTeam"));

export default function About() {
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="center spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5">
              <Fade bottom>
                <div className="col-lg-6 animate__animated animate__fadeInUp">
                  <div className="row img-twice position-relative h-100">
                    <div className="col-6">
                      <img
                        className="img-fluid rounded"
                        src={about_1}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="col-6 align-self-end">
                      <img
                        className="img-fluid rounded"
                        src={about_2}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-6 animate__animated animate__fadeInUp">
                  <div className="h-100">
                    <p className="text-primary text-uppercase mb-2">
                      # About Us
                    </p>
                    <h1 className="display-6 mb-4 Playfair">
                      We Bake Every Item From The Core Of Our Hearts
                    </h1>
                    <p className="Roboto">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <div className="row g-2 mb-4">
                      <div className="col-sm-6">
                        <i className="fa fa-check text-primary me-2"></i>Quality
                        Products
                      </div>
                      <div className="col-sm-6">
                        <i className="fa fa-check text-primary me-2"></i>Custom
                        Products
                      </div>
                      <div className="col-sm-6">
                        <i className="fa fa-check text-primary me-2"></i>Online
                        Order
                      </div>
                      <div className="col-sm-6">
                        <i className="fa fa-check text-primary me-2"></i>Home
                        Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <ChefTeam />

        <Service />
      </Suspense>
      <Footer />
    </>
  );
}
