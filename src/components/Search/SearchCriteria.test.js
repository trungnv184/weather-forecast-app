import React from "react";
import {render, cleanup} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import SearchCriteria from "./SearchCriteria";

afterEach(cleanup);

test("should display search criteria when weather api response data", () => {
  render(<SearchCriteria searchTerm="Ho Chi Minh City" />);
  expect(screen.getByTestId("search-criteria")).toHaveTextContent(
    "Weather Forecast for location: Ho Chi Minh City"
  );
});

test("should display message remind user input location to search", () => {
  render(<SearchCriteria />);
  expect(screen.getByTestId("search-criteria")).toHaveTextContent(
    "Please enter a location to get the weather forecast"
  );
});

test("snapshot", () => {
  const {container} = render(<SearchCriteria />);
  expect(container.firstChild).toMatchSnapshot();
});
