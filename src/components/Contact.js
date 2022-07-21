import React, { Suspense } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import Navbar from "./Navbar";
import { Prompt } from "react-router-dom";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";

export default function Contact() {
  const initialValues = { name: "", email: "", subject: "", message: "" };
  const onSubmit = (value, { resetForm }) => {
    Axios.post("http://localhost:3000/contact", {
      name: value.name,
      email: value.email,
      subject: value.subject,
      message: value.message,
    });
    resetForm({ value: "" });
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
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Enter valid Email").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
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
                <p className="text-primary text-uppercase mb-2"># Contact Us</p>
                <h1 className="display-6 mb-4 Playfair">
                  If You Have Any Query, Please Contact Us
                </h1>
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
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                            />
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <ErrorMessage name="name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
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
                        <div className="col-12">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="subject"
                              name="subject"
                              className="form-control"
                            />
                            <label htmlFor="subject" className="form-label">
                              Subject
                            </label>
                            <ErrorMessage name="subject" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="message"
                              name="message"
                              className="form-control"
                              style={{ height: "5rem" }}
                            />
                            <label htmlFor="message" className="form-label">
                              Message
                            </label>
                            <ErrorMessage name="message" />
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            className="btn btn-primary rounded-pill py-3 px-5"
                            type="submit"
                          >
                            Send Message
                          </button>
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
