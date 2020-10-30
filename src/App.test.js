import React from "react";
import {
  cleanup,
  waitForElementToBeRemoved,
  act,
  fireEvent,
  render
} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import App from "./App";
import * as WeatherServiceMock from "./services/weatherService";

jest.mock("./services/weatherService");

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

test("should display weathers data for five days when page initialize", async () => {
  render(<App />);

  await waitForElementToBeRemoved(() => screen.getByText(/Loading data/i));

  expect(screen.getByTestId("search-criteria")).toHaveTextContent(
    "Weather Forecast for location: Ho Chi Minh City"
  );
  expect(screen.queryAllByTestId("day").length).toBe(5);
  expect(screen.queryAllByTestId("min-temp").length).toBe(5);
  expect(screen.queryAllByTestId("max-temp").length).toBe(5);
});

test("should display empty weathers data when change location from input control and click on search button", async () => {
  render(<App />);

  await waitForElementToBeRemoved(() => screen.getByText(/Loading data/i));

  const inputControl = screen.getByPlaceholderText(/search/i);
  const searchButton = screen.getByText(/search/i);

  fireEvent.change(inputControl, {target: {value: "FAKE_LOCATION"}});
  fireEvent.click(searchButton);

  await act(() => WeatherServiceMock.getLocationData());

  expect(screen.getByTestId("search-criteria")).toHaveTextContent(
    "Weather Forecast for location: FAKE_LOCATION"
  );

  expect(screen.getByTestId("empty-result")).toHaveTextContent(
    "Weather data for this location not available. Please search another one!"
  );
});
