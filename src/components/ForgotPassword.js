import React, { Suspense, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Footer from "./Footer";
import { useAuth } from "./contexts/AuthContext";
import Navbar from "./Navbar";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = React.useState(false);

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (value, { resetForm }) => {
    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(value.email);
      setMessage("Check your inbox for further details");
    } catch {
      setError("Failed to reset the Password");
    }
    setLoading(false);
    resetForm({ value: "" });
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter valid Email").required("Required"),
  });
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
                  # Reset Password
                </p>
                <h1 className="display-6 mb-4">
                  Forgot your Password we got you Covered
                </h1>
                {error && (
                  <div className="alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {message && (
                  <div className="alert-success" role="alert">
                    {message}
                  </div>
                )}
              </div>

              <div className="row g-0 justify-content-center">
                <div className="col-lg-8 ">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="form-floating">
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                            />
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <ErrorMessage name="email" />
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            className="btn btn-primary rounded-pill py-3 px-5 mx-3"
                            type="submit"
                            disabled={loading}
                          >
                            Reset Password
                          </button>
                        </div>
                        <div className="col-12 text-center">
                          Have an account -
                          <Link to="/login" className=" py-3 px-2 ">
                            Login
                          </Link>
                        </div>
                        <div className="col-12 text-center">
                          Need an Account -
                          <Link to="/signup" className=" py-3 px-2 ">
                            Create Account
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </Formik>
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
