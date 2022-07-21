/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Suspense } from "react";
import Navbar from "../Navbar";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";

export default function EditProduct({ match }) {
  const history = useHistory();

  const [id, setID] = useState(null);
  const [productName, setProductName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [egg, setEgg] = useState("");
  const [vendor, setVendor] = useState("");
  const [ig1, setIg1] = useState("");
  const [ig2, setIg2] = useState("");
  const [ig3, setIg3] = useState("");
  const [ig4, setIg4] = useState("");

  const getData = async (e) => {
    await axios
      .get(`http://localhost:3000/products/?id=${match.params.id}`)
      .then((res) =>
        res.data.map((p) => {
          return (
            setID(p.id),
            setProductName(p.productname),
            setDescription(p.description),
            setPrice(p.price),
            setImg(p.img),
            setEgg(p.egg),
            setVendor(p.vendor),
            setIg1(p.ig1),
            setIg2(p.ig2),
            setIg3(p.ig3),
            setIg4(p.ig4)
          );
        })
      );
  };
  React.useEffect(() => {
    getData();
  }, []);

  const setData = async () => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, {
        productname: productName,
        img: img,
        description: description,
        price: price,
        egg: egg,
        vendor: vendor,
        ig1: ig1,
        ig2: ig2,
        ig3: ig3,
        ig4: ig4,
      });
      history.push("/products");
    } catch (e) {
      console.log(e);
    }
  };
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
                  # Edit Product
                </p>
                <h1 className="display-6 mb-4 Playfair">
                  Edit your favorite products here
                </h1>
              </div>
              <form>
                <div className="row g-0 justify-content-center">
                  <div className="col-lg-8 ">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                          />
                          <label htmlFor="name" className="form-label">
                            Product Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="price"
                            name="price"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                          <label htmlFor="price" className="form-label">
                            Price
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="egg"
                            name="egg"
                            className="form-control"
                            value={egg}
                            onChange={(e) => setEgg(e.target.value)}
                          />
                          <label htmlFor="egg" className="form-label">
                            Contains Egg(Yes/No)
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="vendor"
                            name="vendor"
                            className="form-control"
                            value={vendor}
                            onChange={(e) => setVendor(e.target.value)}
                          />
                          <label htmlFor="vendor" className="form-label">
                            Vendor
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="img"
                            name="img"
                            className="form-control"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                          />
                          <label htmlFor="img" className="form-label">
                            Image URL
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="description"
                            name="description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="ig1"
                            name="ig1"
                            className="form-control"
                            value={ig1}
                            onChange={(e) => setIg1(e.target.value)}
                          />
                          <label htmlFor="ig1" className="form-label">
                            Ingredient: 1
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="ig2"
                            name="ig2"
                            className="form-control"
                            value={ig2}
                            onChange={(e) => setIg2(e.target.value)}
                          />
                          <label htmlFor="ig2" className="form-label">
                            Ingredient: 2
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="ig3"
                            name="ig3"
                            className="form-control"
                            value={ig3}
                            onChange={(e) => setIg3(e.target.value)}
                          />
                          <label htmlFor="ig3" className="form-label">
                            Ingredient: 3
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="ig4"
                            name="ig4"
                            className="form-control"
                            value={ig4}
                            onChange={(e) => setIg4(e.target.value)}
                          />
                          <label htmlFor="ig4" className="form-label">
                            Ingredient: 4
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          className="form-control btn btn-primary rounded-pill py-3 px-5"
                          onClick={setData}
                        >
                          Edit
                        </button>
                      </div>

                      <div className="w-100 text-center mt-2">
                        <Link to="/products">Cancel</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Suspense>
      <Footer />
    </>
  );
}
