import { useState, useEffect, Suspense } from "react";
import "../../App.css";
import axios from "axios";
import Navbar from "../Navbar";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../Footer";
import { useIsMount } from "./UseIsMount";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const ProductDetail = ({ match }) => {
  const { currentUser } = useAuth();
  const isMount = useIsMount();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isMount) {
      fetchProduct();
    }
  });
  const removeData = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then(() => {});
  };

  const fetchProduct = () => {
    axios
      .get(`http://localhost:3000/products/?id=${match.params.id}`)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />

      <Suspense
        fallback={
          <div className="center spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        {data.map((p) => {
          return (
            <Fade bottom>
              <section className="golden mt-5">
                <div className="container py-5">
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                      <div className="card text-black border-4 shadow-lg ">
                        <div className="container">
                          <img
                            src={p.img}
                            className="card-img-top mt-4"
                            alt="Bakery item"
                          />
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <h5 className="card-title text-primary">
                              {p.productname}
                            </h5>
                            <p className="text-muted mb-4">{p.vendor}</p>
                          </div>
                          <h4 className="text-primary">Description</h4>
                          <hr />
                          <p className="text-muted mb-4">{p.description}</p>
                          <h4 className="text-primary">Ingredient's</h4>
                          <hr />
                          <div className="row pt-1">
                            <div className="col-6">
                              <ul>
                                <li>
                                  <p className="text-muted m-1">{p.ig1}</p>
                                </li>
                                <li>
                                  <p className="text-muted m-1">{p.ig2}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="col-6 mb-3">
                              <ul>
                                <li>
                                  <p className="text-muted m-1">{p.ig3}</p>
                                </li>
                                <li>
                                  <p className="text-muted m-1">{p.ig4}</p>
                                </li>
                              </ul>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between ">
                              <h6 className="text-primary">Contain's Egg</h6>
                              <span className="text-muted">{p.egg}</span>
                            </div>

                            <hr />
                            <div className="d-flex justify-content-between total font-weight-bold">
                              <h6 className="text-primary">Price</h6>
                              <span className="text-muted">${p.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    {currentUser ? (
                      <Link
                        className="btn btn-outline-warning mt-4 form-control"
                        to={`/products/editproduct/${p.id}/`}
                      >
                        Edit
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="col-6">
                    {currentUser ? (
                      <Link
                        className="btn btn-outline-danger mt-4 form-control"
                        to="/products"
                        onClick={() => {
                          removeData(p.id);
                        }}
                      >
                        Delete
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="text-center">
                    <Link
                      to="/products"
                      className="btn btn-warning text-white form-control mt-4 "
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
        {/* Animation */}
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Suspense>
      <Footer />
    </div>
  );
};
export default ProductDetail;
