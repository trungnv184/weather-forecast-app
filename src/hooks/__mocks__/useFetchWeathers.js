import {MockWeatherResultData} from "../../test/mockData";
export const useFetchWeathers = jest.fn().mockImplementation(() => {
  return {
    isLoading: false,
    error: null,
    weathers: MockWeatherResultData
  };
});
