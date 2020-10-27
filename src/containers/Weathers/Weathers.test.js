import React from "react";
import {cleanup, waitForElementToBeRemoved} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import Weathers from "./Weathers";
import {renderComponentWithLocationProvider} from "../../test/testUtils";
import * as weatherServiceMock from "../../services/weatherService";

jest.mock("../../services/weatherService");

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

test("should display the default location and weather for fiveday at initial", async () => {
  setupTest("Ho Chi Minh City");
  await waitForElementToBeRemoved(() => screen.getByText(/Loading data/i));

  expect(weatherServiceMock.getLocationData).toHaveBeenCalledTimes(1);
  expect(weatherServiceMock.getWeathersFromLocation).toHaveBeenCalledTimes(1);
  expect(screen.getByTestId("search-criteria")).toHaveTextContent(
    "Weather Forecast for location: Ho Chi Minh City"
  );
  expect(screen.queryAllByTestId("day").length).toBe(5);
  expect(screen.queryAllByTestId("min-temp").length).toBe(5);
  expect(screen.queryAllByTestId("max-temp").length).toBe(5);
});

test("should display empty search result when input wrong location", async () => {
  const fakeWrongLocation = "Location Wrong";
  setupTest(fakeWrongLocation);
  await waitForElementToBeRemoved(() => screen.getByText(/Loading data/i));

  expect(weatherServiceMock.getLocationData).toHaveBeenCalledTimes(1);
  expect(weatherServiceMock.getWeathersFromLocation).toHaveBeenCalledTimes(0);
  expect(screen.getByTestId("empty-result")).toHaveTextContent(
    "Weather data for this location not available. Please search another one!"
  );
});

test("should display warning message when call api get location data failure", async () => {
  weatherServiceMock.getLocationData.mockImplementationOnce(() => {
    return Promise.reject(new Error("API_NOT_FOUND"));
  });

  setupTest("Ho Chi Minh City");
  await waitForElementToBeRemoved(() => screen.getByText(/Loading data/i));

  expect(weatherServiceMock.getLocationData).toHaveBeenCalledTimes(1);
  expect(weatherServiceMock.getWeathersFromLocation).toHaveBeenCalledTimes(0);
  expect(screen.getByTestId("error-message")).toHaveTextContent(
    "Something went wrong happened. Please try again !!!"
  );
});

const setupTest = (location) => {
  return renderComponentWithLocationProvider(<Weathers />, {
    location,
    setLocation: () => {}
  });
};
