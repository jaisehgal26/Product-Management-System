import React from "react";
import { Link } from "react-router-dom";
import team_1 from "../img/team-1.jpg";
import team_2 from "../img/team-2.jpg";
import team_3 from "../img/team-3.jpg";
import team_4 from "../img/team-4.jpg";
import Fade from "react-reveal/Fade";
import "../App.css";
export default function ChefTeam() {
  return (
    <>
      <div className="container-xxl py-6">
        <Fade bottom>
          <div className="container">
            <div
              className="text-center mx-auto mb-5 "
              style={{ maxwidth: " 500px" }}
            >
              <p className="text-primary text-uppercase mb-2">#Our Team</p>
              <h1 className="display-6 mb-4 Playfair">
                We're Super Professional At Our Skills
              </h1>
            </div>
            <div className="row g-4">
              <Fade bottom>
                <div className="col-lg-3 col-md-6 ">
                  <div className="team-item text-center rounded overflow-hidden">
                    <img
                      className="img-fluid"
                      src={team_1}
                      alt=""
                      loading="lazy"
                    />
                    <div className="team-text">
                      <div className="team-title">
                        <h5>Ernest Fraley</h5>
                        <span>Station Chef</span>
                      </div>
                      <div className="team-social">
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-3 col-md-6 ">
                  <div className="team-item text-center rounded overflow-hidden">
                    <img
                      className="img-fluid"
                      src={team_2}
                      alt=""
                      loading="lazy"
                    />
                    <div className="team-text">
                      <div className="team-title">
                        <h5>Camille Moreno</h5>
                        <span>Deputy Chef</span>
                      </div>
                      <div className="team-social">
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-3 col-md-6 ">
                  <div className="team-item text-center rounded overflow-hidden">
                    <img
                      className="img-fluid"
                      src={team_3}
                      alt=""
                      loading="lazy"
                    />
                    <div className="team-text">
                      <div className="team-title">
                        <h5>Floyd Matthews</h5>
                        <span>Deputy Chef</span>
                      </div>
                      <div className="team-social">
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-3 col-md-6 ">
                  <div className="team-item text-center rounded overflow-hidden">
                    <img
                      className="img-fluid"
                      src={team_4}
                      alt=""
                      loading="lazy"
                    />
                    <div className="team-text">
                      <div className="team-title">
                        <h5>Harold Mcdaniel</h5>
                        <span>Executive Chef</span>
                      </div>
                      <div className="team-social">
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                          className="btn btn-square btn-light rounded-circle"
                          to=""
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
