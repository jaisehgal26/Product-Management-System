import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Chart1 from "./Chart1";

test("renders Banner caption", () => {
  const wrapper = shallow(<Chart1 />);
  expect(wrapper.find("h6").text()).toContain("Our Top Selling Product");
});
it("includes one h6", () => {
  const wrapper = shallow(<Chart1 />);
  expect(wrapper.find("h6").length).toEqual(1);
});
test("should render correctly", () => {
  const wrapper = toJson(shallow(<Chart1 />));
  expect(wrapper).toMatchSnapshot();
});
