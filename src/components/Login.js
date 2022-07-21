import React, { Suspense, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { Link, useHistory, Prompt } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { useAuth } from "./contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };
  const PromptIfDirty = () => {
    const formik = useFormikContext();
    return (
      <Prompt
        when={formik.dirty && formik.submitCount === 0}
        message="Are you sure you want to leave..?"
      />
    );
  };
  const onSubmit = async (value, { resetForm }) => {
    try {
      setError("");
      setLoading(true);
      await login(value.email, value.password);
      Axios.post("http://localhost:3000/login", {
        email: value.email,
        password: value.password,
      });
      history.push("/");
    } catch {
      setError("Failed to Sign In Email or Password is Incorrect");
    }
    setLoading(false);
    resetForm({ value: "" });
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter valid Email").required("Required"),
    password: Yup.string().required("Required"),
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
                <p className="text-primary text-uppercase mb-2"># Login</p>
                <h1 className="display-6 mb-4 Playfair">
                  Login here to access other features
                </h1>
                {error && (
                  <div className="alert-danger" role="alert">
                    {error}
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
                      <PromptIfDirty />
                      <div className="row g-3">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                            />
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            <ErrorMessage name="password" />
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            className="btn btn-primary rounded-pill py-3 px-5 mx-3"
                            type="submit"
                            disabled={loading}
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12 text-center">
                          <Link to="/forgotpassword" className=" py-3 px-2 ">
                            Forgot Password?
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
