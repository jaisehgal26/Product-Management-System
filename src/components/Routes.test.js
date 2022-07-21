import React from "react";
import { Route } from "react-router";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Routes from "./Routes";
import Home from "./Home";
import About from "./About";
import Products from "./Product/AllProductsPage";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<Routes />));
  expect(wrapper).toMatchSnapshot();
});

test("renders correct route home", () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap["/"]).toBe(Home);
});
test("renders correct route about", () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap["/about"]).toBe(About);
});
test("renders correct route products", () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap["/products"]).toBe(Products);
});
test("renders correct route contact", () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap["/contact"]).toBe(Contact);
});
test("renders correct route register", () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap["/signup"]).toBe(Register);
});
test("renders correct route login", () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap["/login"]).toBe(Login);
});
