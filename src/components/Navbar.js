import React, { useState } from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Logout");
    }
  }
  return (
    <>
      <nav className="navbar sticky-top navbar-dark navbar-expand-lg  py-lg-0 px-lg-5 fadeIn">
        <div className="container-fluid ">
          <Link className="navbar-brand nav-link selected" to="/">
            Bakingo
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {currentUser ? (
                <li className="nav-item dropdown">
                  <div
                    className="navbar-brand nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong style={{ color: "#eaa636" }}>
                      {currentUser.email}
                    </strong>
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/update-profile" className="dropdown-item">
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactmessages" className="dropdown-item">
                        Contact Messages
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="navbar-brand nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>

            <div>
              <div className=" d-none d-lg-flex">
                <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                  <i className="fa fa-phone text-primary"></i>
                </div>
                <div className="ps-3">
                  <small className="text-primary mb-0">Call Us</small>
                  <p className="text-light fs-5 mb-0">+012 345 6789</p>
                </div>
              </div>
            </div>
            <div>
              {error && (
                <div className="alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
