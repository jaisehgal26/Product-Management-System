import React, { Suspense, useRef, useState } from "react";

import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import Fade from "react-reveal/Fade";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

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
        <Fade bottom>
          <div className="container-xxl py-6">
            <div className="container">
              <div
                className="text-center mx-auto mb-5 "
                style={{ maxwidth: "500px" }}
              >
                <p className="text-primary text-uppercase mb-2">
                  # Update Profile
                </p>

                <h1 className="display-6 mb-4 Playfair">
                  Update Your Profile here
                </h1>
                {error && <div className="alert alert-danger">{error}</div>}
              </div>
              <div className="row g-0 justify-content-center">
                <div className="col-lg-8 ">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      ref={emailRef}
                      required
                      defaultValue={currentUser.email}
                      placeholder=""
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      ref={passwordRef}
                      defaultValue={currentUser.password}
                      placeholder="Leave blank to keep the same"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword1"
                      ref={passwordConfirmRef}
                      defaultValue={currentUser.password}
                      placeholder="Leave blank to keep the same"
                    />
                    <label for="floatingPassword1">Confirm Password</label>
                  </div>
                  <button
                    disabled={loading}
                    className="btn btn-primary form-control my-3"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Update
                  </button>
                </div>
                <div className="w-100 text-center mt-2">
                  <Link to="/">Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Suspense>
      <Footer />
    </>
  );
}
