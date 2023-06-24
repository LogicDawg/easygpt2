import React from "react";
import { render } from "@testing-library/react";
import Request from "./Requests";

it("matches snapshot", function () {
  const { asFragment } = render(<Request />);
  expect(asFragment()).toMatchSnapshot();
});
