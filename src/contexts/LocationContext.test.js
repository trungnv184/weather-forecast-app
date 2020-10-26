import React from "react";
import {renderHook, cleanup} from "@testing-library/react-hooks";
import {useLocationContext, LocationContext} from "./LocationContext";

afterEach(cleanup);

test("should get default value from location context", () => {
  const {result} = renderHook(() => useLocationContext());
  const value = result.current;
  expect(value).toBe("");
});

test("should get value from location context provider", () => {
  const initValue = {
    location: "Ho Chi Minh",
    setLocation: jest.fn()
  };
  const wrapper = ({children}) => (
    <LocationContext.Provider value={initValue}>{children}</LocationContext.Provider>
  );

  const {result} = renderHook(() => useLocationContext(), {wrapper});
  expect(result.current.location).toBe("Ho Chi Minh");
});
