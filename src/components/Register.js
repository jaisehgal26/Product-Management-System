import React, { Suspense, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { Link, useHistory, Prompt } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "./contexts/AuthContext";

import Fade from "react-reveal/Fade";
import Footer from "./Footer";

export default function Register() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    location: "",
    product1: "",
    product2: "",
    product3: "",
    product4: "",
    vid: "",
  };
  const PromptIfDirty = () => {
    const formik = useFormikContext();
    return (
      <Prompt
        when={formik.dirty && formik.submitCount === 0}
        message="Are you sure you want to leave? You have with unsaved changes."
      />
    );
  };
  const onSubmit = async (value, { resetForm }) => {
    if (value.password !== value.confirm_password) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(value.email, value.password);
      Axios.post("http://localhost:3000/register", {
        fname: value.fname,
        lname: value.lname,
        email: value.email,
        password: value.password,
        confirm_password: value.confirm_password,
        phone_number: value.phone_number,
        location: value.location,
        product1: value.product1,
        product2: value.product2,
        product3: value.product3,
        product4: value.product4,
        vid: value.vid,
      });
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
    resetForm({ value: "" });
  };
  const validationSchema = Yup.object({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string().email("Enter valid Email").required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string().required("Required"),
    phone_number: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    product1: Yup.string().required("Required"),
    product2: Yup.string().required("Required"),
    product3: Yup.string().required("Required"),
    product4: Yup.string().required("Required"),
    vid: Yup.string().required("Required"),
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
                <p className="text-primary text-uppercase mb-2"># Register</p>

                <h1 className="display-6 mb-4">Register for new User</h1>
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
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <PromptIfDirty />
                            <Field
                              type="text"
                              id="fname"
                              name="fname"
                              className="form-control"
                            />
                            <label htmlFor="fname" className="form-label">
                              First Name
                            </label>
                            <ErrorMessage name="fname" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="lname"
                              name="lname"
                              className="form-control"
                            />
                            <label htmlFor="lname" className="form-label">
                              Last Name
                            </label>
                            <ErrorMessage name="lname" />
                          </div>
                        </div>
                        <div className="col-6">
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
                        <div className="col-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="vid"
                              name="vid"
                              className="form-control"
                            />
                            <label htmlFor="vid" className="form-label">
                              Vender ID
                            </label>
                            <ErrorMessage name="vid" />
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
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="password"
                              id="confirm_password"
                              name="confirm_password"
                              className="form-control"
                            />
                            <label
                              htmlFor="confirm_password"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <ErrorMessage name="confirm_password" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="number"
                              id="phone_number"
                              name="phone_number"
                              className="form-control"
                              maxLength="10"
                            />
                            <label
                              htmlFor="phone_number"
                              className="form-label"
                            >
                              Phone Number
                            </label>
                            <ErrorMessage name="phone_number" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="location"
                              id="location"
                              name="location"
                              className="form-control"
                            />
                            <label htmlFor="location" className="form-label">
                              location
                            </label>
                            <ErrorMessage name="location" />
                          </div>
                        </div>{" "}
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="product1"
                              name="product1"
                              className="form-control"
                            />
                            <label htmlFor="product1" className="form-label">
                              Product
                            </label>
                            <ErrorMessage name="product1" />
                          </div>
                        </div>{" "}
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="product2"
                              name="product2"
                              className="form-control"
                            />
                            <label htmlFor="product2" className="form-label">
                              Product
                            </label>
                            <ErrorMessage name="product2" />
                          </div>
                        </div>{" "}
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="product3"
                              name="product3"
                              className="form-control"
                            />
                            <label htmlFor="product3" className="form-label">
                              Product
                            </label>
                            <ErrorMessage name="product3" />
                          </div>
                        </div>{" "}
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="product4"
                              name="product4"
                              className="form-control"
                            />
                            <label htmlFor="product4" className="form-label">
                              Product
                            </label>
                            <ErrorMessage name="product4" />
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            className="btn btn-primary rounded-pill py-3 px-5"
                            type="submit"
                            disabled={loading}
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="col-12 text-center">
                          Already have an account -
                          <Link to="/login" className=" py-3 px-2">
                            Login
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
