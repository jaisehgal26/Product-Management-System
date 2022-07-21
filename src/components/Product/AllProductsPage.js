/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, Suspense } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "../../App.css";
import { useIsMount } from "./UseIsMount";
import Navbar from "../Navbar";
import Fade from "react-reveal/Fade";
import Footer from "../Footer";
const Chart = React.lazy(() => import("../Chart"));
const Chart1 = React.lazy(() => import("../Chart1"));

export default function Products() {
  const { currentUser } = useAuth();
  const URL = "http://localhost:3000/products";
  const isMount = useIsMount();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [ascending, setAscending] = useState(false);
  const [vendor, setVendor] = useState("");
  const [vendorlist, setVendorlist] = useState([]);
  const [price, setPrice] = useState(true);
  const [quantity, setQuantity] = useState(true);

  React.useEffect(() => {
    if (isMount) {
      getData();
    }

    let vendorName = [];
    let vendors = [];
    products.forEach((element) => {
      vendorName.push(element.vendor);
    });
    vendors = [...new Set(vendorName)];
    setVendorlist(vendors);
  }, [products]);

  const getData = async () => {
    const response = await axios.get(URL);
    setProducts(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then(() => {
      const del = products.filter((employee) => id !== employee.id);
      setProducts(del);
    });
  };
  const onViewed = (value) => {
    axios.post("http://localhost:3000/productviewed", {
      productname: value,
    });
  };
  var productNodes = products

    .sort((a, b) => {
      const aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
      const bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
      if (ascending) {
        return aPrice - bPrice;
      } else {
        return bPrice - aPrice;
      }
    })
    .filter((a) => {
      if (vendor === "") {
        return a;
      } else if (a.vendor.toLowerCase().includes(vendor.toLowerCase())) {
        return a;
      }
    })
    .filter((p) => {
      if (query === "") {
        return p;
      } else if (p.productname.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.description.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.price.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.vendor.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.ig1.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.ig2.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.ig3.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.ig4.toLowerCase().includes(query.toLowerCase())) {
        return p;
      }
    })
    .map((p) => (
      <>
        <Fade bottom>
          <div
            key={p.id}
            className="col-lg-4 col-md-6 col-sm-12"
            maxheight={250}
          >
            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
              <div className="text-center p-4">
                {price ? (
                  <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
                    ${p.price}
                  </div>
                ) : (
                  <></>
                )}
                <h3 className="mb-3 Playfair">{p.productname}</h3>
                <span className="text-muted">Vendor: {p.vendor}</span>
                {quantity ? (
                  <span className="text-muted d-block">
                    Quantity- {p.quantity}
                  </span>
                ) : (
                  <></>
                )}
              </div>

              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  style={{ height: "17rem", width: "355rem" }}
                  src={p.img}
                  alt=""
                />

                <div className="product-overlay">
                  {currentUser ? (
                    <Link
                      className="mx-5"
                      to={`/products/editproduct/${p.id}/`}
                    >
                      <i className="fas fa-edit text-primary"></i>
                    </Link>
                  ) : (
                    <></>
                  )}

                  <Link
                    onClick={() => onViewed(p.productname)}
                    className="mx-5"
                    to={`/products/${p.id}`}
                  >
                    <i className="fa fa-eye text-primary"></i>
                  </Link>
                  {currentUser ? (
                    <>
                      <Link
                        className="  bg-transparent mx-5"
                        to="#"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to delete this item?"
                            ) === true
                          ) {
                            removeData(p.id);
                          }
                        }}
                      >
                        <i className="fas fa-trash text-primary"></i>
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </>
    ));
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
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Chart />
              </div>
              <div className="col-6">
                <Chart1 />
              </div>
            </div>
          </div>
          <div
            className="container-xxl bg-light my-6 py-6 pt-0"
            style={{ margin: "12rem auto" }}
          >
            <div
              className="text-center mx-auto mb-5 "
              style={{ maxwidth: " 500px" }}
            >
              <p className="text-primary text-uppercase mb-2">
                # Bakery Products
              </p>
              <h1 className="display-6 mb-4 Playfair">
                Explore The Categories Of Our Bakery Products
              </h1>

              <div className="container">
                <div className="row height d-flex align-items-center ">
                  <div className="col-6">
                    <div className="form">
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Search anything..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>
                  </div>
                  <div
                    class="btn-group col-6"
                    role="group"
                    aria-label="Basic example"
                  >
                    <div className="btn-group dropdown col-4">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Filter by vendor
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => setVendor("")}
                          >
                            All Vendors
                          </button>
                        </li>

                        {vendorlist.map((p) => {
                          return (
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => setVendor(p)}
                              >
                                {p}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="btn-group dropdown col-4">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => setAscending(true)}
                          >
                            Price: Low to High
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => setAscending(false)}
                          >
                            Price: High to Low
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group dropdown col-4">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Custom Fields
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked={price}
                              onChange={(e) => setPrice(e.target.checked)}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Price
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked={quantity}
                              onChange={(e) => setQuantity(e.target.checked)}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Quantity
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <>
                  {currentUser ? (
                    <div
                      className="container-xxl bg-light pt-0"
                      style={{ margin: "1rem auto" }}
                    >
                      <div className="row g-4 mt-4 mb-4">
                        <Link
                          className="btn btn-outline-secondary form-control"
                          to="/products/addproduct"
                        >
                          Add Product
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              </div>
            </div>
            <div className="container">
              <div className="row g-4">{productNodes}</div>
            </div>
          </div>
        </Fade>
      </Suspense>
      <Footer />
    </>
  );
}
