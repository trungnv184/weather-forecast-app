import React from "react";
import {cleanup} from "@testing-library/react";
import {screen} from "@testing-library/dom";
import {renderComponentWithLocationProvider} from "../../test/testUtils";
import Header from "./Header";

beforeEach(() => {
  setupTest();
});

afterEach(cleanup);

test("should have default location when initalize component", () => {
  expect(screen.getByDisplayValue("Ho Chi Minh City")).toBeInTheDocument();
});

test("snapshot", () => {
  const {container} = setupTest();
  expect(container.firstChild).toMatchSnapshot();
});

const setupTest = (location) => {
  return renderComponentWithLocationProvider(<Header />, {
    location: location,
    setLocation: () => {}
  });
};
