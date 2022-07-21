import { Suspense, useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Navbar from "./Navbar";
import { useAuth } from "./contexts/AuthContext";
import Fade from "react-reveal/Fade";

import Footer from "./Footer";
import { useIsMount } from "./Product/UseIsMount";

const ProductDetail = ({ match }) => {
  const { currentUser } = useAuth();
  const isMount = useIsMount();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isMount) {
      fetchProduct();
    }
  });

  const fetchProduct = () => {
    axios
      .get(`http://localhost:3000/register/?email=${currentUser.email}`)

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
              <div
                className="text-center mx-auto mb-5 my-4"
                style={{ maxwidth: "500px" }}
              >
                <p className="text-primary text-uppercase mb-2"># Profile</p>
                <h1 className="display-6  Playfair">Profile Details</h1>
              </div>

              <div className="row mx-auto container">
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      bordertopleftradius: ".5rem",
                      borderbottomleftradius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h4>
                      {p.fname} {p.lname}
                    </h4>
                    <h6>Bakery Vendor</h6>
                    <h6 className="d-inline">Vendor ID: </h6>
                    {p.vid}
                    <h6 className="mt-2">
                      <i className="fas fa-map-marker-alt"></i> {p.location}
                    </h6>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6 className="Playfair">Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className="Playfair">Email</h6>
                          <p className="text-muted">{p.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="Playfair">Phone</h6>
                          <p className="text-muted">{p.phone_number}</p>
                        </div>
                      </div>
                      <h6 className="Playfair">Products</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <ul>
                            <li>
                              <p className="text-muted m-1">{p.product1}</p>
                            </li>
                            <li>
                              <p className="text-muted m-1">{p.product2}</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 mb-3">
                          <ul>
                            <li>
                              <p className="text-muted m-1">{p.product3}</p>
                            </li>
                            <li>
                              <p className="text-muted m-1">{p.product4}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </Suspense>
      <Footer />
    </div>
  );
};
export default ProductDetail;
