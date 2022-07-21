/* eslint-disable array-callback-return */
import React, { Suspense, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

import Fade from "react-reveal/Fade";
import Footer from "./Footer";
export default function ContactMessage() {
  const URL = "http://localhost:3000/contact";

  const [data, setData] = React.useState([]);
  const [query, setQuery] = useState("");

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setData(response.data);
  };
  var message = data
    .filter((p) => {
      if (query === "") {
        return p;
      } else if (p.name.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.email.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.subject.toLowerCase().includes(query.toLowerCase())) {
        return p;
      } else if (p.message.toLowerCase().includes(query.toLowerCase())) {
        return p;
      }
    })
    .map((p) => (
      <Fade bottom>
        <tr>
          <th scope="row">{p.id}</th>
          <td>{p.name}</td>
          <td>{p.email}</td>
          <td>{p.subject}</td>
          <td>{p.message}</td>
        </tr>
      </Fade>
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
          <div className="container-xxl py-6">
            <div className="container">
              <div
                className="text-center mx-auto mb-5 "
                style={{ maxwidth: "500px" }}
              >
                <p className="text-primary text-uppercase mb-2"># Contact Us</p>
                <h1 className="display-6 mb-4 Playfair">
                  Contact Us messages shown here
                </h1>
              </div>
              <div className="row g-0 justify-content-center">
                <div className="col-lg-8 ">
                  <div className="container my-4">
                    <div className="row height d-flex justify-content-center align-items-center">
                      <div className="col-md-6">
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
                    </div>
                  </div>
                </div>
              </div>

              <table className="table table-striped  container my-4">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">{message}</tbody>
              </table>
            </div>
          </div>
        </Fade>
      </Suspense>
      <Footer />
    </>
  );
}
