import {cleanup, renderHook, act} from "@testing-library/react-hooks";
import {useFetchWeathers} from "./useFetchWeathers";
import * as weatherServiceMock from "../services/weatherService";
jest.mock("../services/weatherService");

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test("should return weathers data for five days", async () => {
  const {result, waitForNextUpdate} = renderHook(() =>
    useFetchWeathers("Ho Chi Minh City")
  );

  await act(() => waitForNextUpdate());

  expect(weatherServiceMock.getLocationData).toHaveBeenCalledTimes(1);
  expect(weatherServiceMock.getWeathersFromLocation).toHaveBeenCalledTimes(1);
  expect(result.current.isLoading).toBeFalsy();
  expect(result.current.error).toBeNull();
  expect(result.current.weathers.length).toBe(5);
});

test("should return error and empty array when call api failure", async () => {
  weatherServiceMock.getLocationData.mockImplementationOnce(() => {
    return Promise.reject(new Error("API_NOT_FOUND"));
  });

  const {result, waitForNextUpdate} = renderHook(() =>
    useFetchWeathers("Ho Chi Minh City")
  );

  await act(() => waitForNextUpdate());

  expect(weatherServiceMock.getLocationData).toHaveBeenCalledTimes(1);
  expect(weatherServiceMock.getWeathersFromLocation).toHaveBeenCalledTimes(0);
  expect(result.current.isLoading).toBeFalsy();
  expect(result.current.error).not.toBeNull();
  expect(result.current.weathers.length).toBe(0);
});
