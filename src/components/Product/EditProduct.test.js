import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EditProduct from "./EditProduct";

test("Add Product Existence", () => {
  shallow(<EditProduct />);
});
test("should render correctly", () => {
  const wrapper = toJson(shallow(<EditProduct />));
  expect(wrapper).toMatchSnapshot();
});
