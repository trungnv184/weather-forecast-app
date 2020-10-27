import React from "react";
import {render, cleanup} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import SearchWeatherResult from "./SearchWeatherResult";
import {MockWeatherResultData} from "../../test/mockData";

afterEach(cleanup);

test("should display error message when search location return error", () => {
  const error = new Error("404 not found");
  render(<SearchWeatherResult error={error} />);
  expect(screen.getByTestId("error-message")).toHaveTextContent(
    "Something went wrong happened. Please try again !!!"
  );
});

test("should display empty result message when search location and return empty array", () => {
  render(<SearchWeatherResult weathers={[]} />);
  expect(screen.getByTestId("empty-result")).toHaveTextContent(
    "Weather data for this location not available. Please search another one!"
  );
});

test("should display weather forecast for five days", () => {
  render(<SearchWeatherResult weathers={MockWeatherResultData} />);
  expect(screen.queryAllByTestId("day").length).toBe(5);
  expect(screen.queryAllByTestId("min-temp").length).toBe(5);
  expect(screen.queryAllByTestId("max-temp").length).toBe(5);
});

test("snapshot", () => {
  const {container} = render(<SearchWeatherResult />);
  expect(container.firstChild).toMatchSnapshot();
});
