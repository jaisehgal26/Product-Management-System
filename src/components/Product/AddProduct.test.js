import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddProduct from "./AddProduct";

test("Add Product Existence", () => {
  shallow(<AddProduct />);
});

test("should render correctly", () => {
  const wrapper = toJson(shallow(<AddProduct />));
  expect(wrapper).toMatchSnapshot();
});
