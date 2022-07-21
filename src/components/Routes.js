import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Product/AllProductsPage";
import Register from "./Register";
import Login from "./Login";
import "../App.css";
const ProductDetail = lazy(() => import("./Product/ProductDetail"));
const AddProduct = lazy(() => import("./Product/AddProduct"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ProfileDetails = lazy(() => import("./ProfileDetail"));
const UpdateProfile = lazy(() => import("./UpdateProfile"));
const EditProduct = lazy(() => import("./Product/EditProduct"));
const ContactMessage = lazy(() => import("./ContactMessage"));

export default function Routes() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="center spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/products/addproduct"
              component={AddProduct}
            ></Route>
            <Route
              exact
              path="/products/editproduct/:id"
              component={EditProduct}
            ></Route>
            <Route exact path="/products/:id" component={ProductDetail}></Route>

            <Route path="/about" component={About}></Route>

            <Route path="/contactmessages" component={ContactMessage}></Route>

            <Route path="/profile" component={ProfileDetails}></Route>
            <Route path="/forgotpassword" component={ForgotPassword}></Route>
            <Route path="/update-profile" component={UpdateProfile}></Route>
            <Route path="/signup" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </AuthProvider>
      </Suspense>
    </Router>
  );
}
