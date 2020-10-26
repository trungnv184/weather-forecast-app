import React from "react";
import {render, cleanup} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import Weather from "./Weather";

afterEach(cleanup);

test("should display all data of weather when input all props", () => {
  render(<Weather day="Monday" min={25} max={30} />);
  expect(screen.getByTestId("day")).toHaveTextContent("Monday");
  expect(screen.getByTestId("min-temp")).toHaveTextContent("Min: 25");
  expect(screen.getByTestId("max-temp")).toHaveTextContent("Max: 30");
});

test("should display empty day when forgot input day prop", () => {
  render(<Weather min={25} max={30} />);
  expect(screen.getByTestId("day")).toBeEmpty();
  expect(screen.getByTestId("min-temp")).toHaveTextContent("Min: 25");
  expect(screen.getByTestId("max-temp")).toHaveTextContent("Max: 30");
});

test("snapshot", () => {
  const {container} = render(<Weather />);
  expect(container.firstChild).toMatchSnapshot();
});
