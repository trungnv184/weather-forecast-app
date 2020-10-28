import React from "react";
import {
  cleanup,
  waitForElementToBeRemoved,
  fireEvent,
  act,
  render
} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import App from "./App";
import {renderComponentWithLocationProvider} from "./test/testUtils";

jest.mock("./services/weatherService");
jest.mock("./contexts/LocationContext");

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

test("should display weathers data for five days when page initialize", async () => {
  setupTest("Ho Chi Minh City");

  await waitForElementToBeRemoved(() => screen.getByText(/Loading Data/i));
  expect(screen.getByTestId("search-criteria")).toHaveTextContent(
    "Weather Forecast for location: Ho Chi Minh City"
  );
  expect(screen.queryAllByTestId("day").length).toBe(5);
  expect(screen.queryAllByTestId("min-temp").length).toBe(5);
  expect(screen.queryAllByTestId("max-temp").length).toBe(5);
});

test.only("should display empty list and message inform to user when input wrong location", async () => {
  render(<App />);

  // await waitForElementToBeRemoved(() => screen.getByText(/Loading Data/i));

  const searchInput = screen.getByPlaceholderText(/search/i);
  const searchButton = screen.queryByText(/search/i);

  act(() => {
    fireEvent.change(searchInput, {
      target: {value: "Fake Location"}
    });

    // fireEvent.keyDown(searchInput, {key: "Enter", code: "Enter"});

    fireEvent.click(searchButton);
  });

  await waitForElementToBeRemoved(() => screen.getByText(/Loading Data/i));
  // console.log(screen.debug());
});

const setupTest = (location) => {
  return renderComponentWithLocationProvider(<App />, {
    location,
    setLocation: () => {}
  });
};
