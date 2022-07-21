import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import About from "./About";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<About />));
  expect(wrapper).toMatchSnapshot();
});
