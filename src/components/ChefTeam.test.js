import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ChefTeam from "./ChefTeam";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<ChefTeam />));
  expect(wrapper).toMatchSnapshot();
});
