import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Contact from "./Contact";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<Contact />));
  expect(wrapper).toMatchSnapshot();
});
