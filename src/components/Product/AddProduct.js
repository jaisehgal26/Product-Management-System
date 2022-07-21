import React, { Suspense } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { Link, Prompt } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";
import Fade from "react-reveal/Fade";
import Navbar from "../Navbar";
import Carousel from "../Carousel";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";

function AddProduct() {
  const history = useHistory();
  const initialValues = {
    name: "",
    img: "",
    description: "",
    price: "",
    egg: "",
    vendor: "",
    ig1: "",
    ig2: "",
    ig3: "",
    ig4: "",
  };
  const onSubmit = (value, { resetForm }) => {
    Axios.post("http://localhost:3000/products", {
      productname: value.name,
      img: value.img,
      description: value.description,
      price: value.price,
      egg: value.egg,
      vendor: value.vendor,
      ig1: value.ig1,
      ig2: value.ig2,
      ig3: value.ig3,
      ig4: value.ig4,
    });
    history.push("/products");
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
    img: Yup.string()
      .matches(/((https?):\/\/)?(www.)?[a-z0-9]?$/, "Enter correct url!")
      .required("Please enter img URL"),
    price: Yup.number("Must be a number")
      .required("Required")
      .positive("Price can't be -ve"),
    description: Yup.string().required("Required"),
    egg: Yup.string().required("Required"),
    vendor: Yup.string().required("Required"),
    ig1: Yup.string().required("Required"),
    ig2: Yup.string().required("Required"),
    ig3: Yup.string().required("Required"),
    ig4: Yup.string().required("Required"),
  });
  return (
    <>
      <Navbar />
      <Carousel />
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
                  # Add Product
                </p>
                <h1 className="display-6 mb-4 Playfair">
                  If You want any other product, Please Add
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
                              Product Name
                            </label>
                            <ErrorMessage name="name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="price"
                              name="price"
                              className="form-control"
                            />
                            <label htmlFor="price" className="form-label">
                              Price
                            </label>
                            <ErrorMessage name="price" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="egg"
                              name="egg"
                              className="form-control"
                            />
                            <label htmlFor="egg" className="form-label">
                              Contains Egg(Yes/No)
                            </label>
                            <ErrorMessage name="egg" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="vendor"
                              name="vendor"
                              className="form-control"
                            />
                            <label htmlFor="vendor" className="form-label">
                              Vendor
                            </label>
                            <ErrorMessage name="vendor" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="img"
                              name="img"
                              className="form-control"
                            />
                            <label htmlFor="img" className="form-label">
                              Image URL
                            </label>
                            <ErrorMessage name="img" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="description"
                              name="description"
                              className="form-control"
                            />
                            <label htmlFor="description" className="form-label">
                              Description
                            </label>
                            <ErrorMessage name="description" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="ig1"
                              name="ig1"
                              className="form-control"
                            />
                            <label htmlFor="ig1" className="form-label">
                              Ingredient: 1
                            </label>
                            <ErrorMessage name="ig1" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="ig2"
                              name="ig2"
                              className="form-control"
                            />
                            <label htmlFor="ig2" className="form-label">
                              Ingredient: 2
                            </label>
                            <ErrorMessage name="ig2" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="ig3"
                              name="ig3"
                              className="form-control"
                            />
                            <label htmlFor="ig3" className="form-label">
                              Ingredient: 3
                            </label>
                            <ErrorMessage name="ig3" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="ig4"
                              name="ig4"
                              className="form-control"
                            />
                            <label htmlFor="ig4" className="form-label">
                              Ingredient: 4
                            </label>
                            <ErrorMessage name="ig4" />
                          </div>
                        </div>

                        <div className="col-12 text-center">
                          <button
                            className="form-control btn btn-primary rounded-pill py-3 px-5"
                            type="submit"
                          >
                            Add Product
                          </button>
                        </div>
                        <div className="w-100 text-center mt-2">
                          <Link to="/products">Cancel</Link>
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
export default AddProduct;
