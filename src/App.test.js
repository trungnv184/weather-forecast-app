import React from "react";
import {cleanup} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import App from "./App";
import {renderComponentWithLocationProvider} from "./test/testUtils";

jest.mock("./hooks/useFetchWeathers");

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

test("should display weathers data for five days when page initialize", async () => {
  setupTest("Ho Chi Minh City");

  expect(screen.getByTestId("search-criteria")).toHaveTextContent(
    "Weather Forecast for location: Ho Chi Minh City"
  );
  expect(screen.queryAllByTestId("day").length).toBe(5);
  expect(screen.queryAllByTestId("min-temp").length).toBe(5);
  expect(screen.queryAllByTestId("max-temp").length).toBe(5);
});

const setupTest = (location) => {
  return renderComponentWithLocationProvider(<App />, {
    location,
    setLocation: () => {}
  });
};
