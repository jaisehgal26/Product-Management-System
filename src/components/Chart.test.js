import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Chart from "./Chart";

test("renders Banner caption", () => {
  const wrapper = shallow(<Chart />);
  expect(wrapper.find("h6").text()).toContain("Products Pricing in USD$");
});
it("includes one h6", () => {
  const wrapper = shallow(<Chart />);
  expect(wrapper.find("h6").length).toEqual(1);
});
test("should render correctly", () => {
  const wrapper = toJson(shallow(<Chart />));
  expect(wrapper).toMatchSnapshot();
});
