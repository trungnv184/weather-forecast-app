import React from "react";
import {render, cleanup} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import Spinner from "./Spinner";

afterEach(cleanup);

test("should display loading data text", () => {
  render(<Spinner />);
  expect(screen.getByText(/Loading/i)).toHaveTextContent("Loading data ...");
});

test("snapshot", () => {
  const {container} = render(<Spinner />);
  expect(container.firstChild).toMatchSnapshot();
});
