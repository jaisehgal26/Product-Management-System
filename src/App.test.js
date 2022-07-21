import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<App />));
  expect(wrapper).toMatchSnapshot();
});
