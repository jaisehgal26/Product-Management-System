import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ContactMessage from "./ContactMessage";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<ContactMessage />));
  expect(wrapper).toMatchSnapshot();
});
