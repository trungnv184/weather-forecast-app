import {MockCities, MockWeathersData} from "../../test/mockData";

export const getLocationData = jest.fn((location) => {
  return Promise.resolve(location === MockCities[0].title ? MockCities : []);
});

export const getWeathersFromLocation = jest.fn((woeid) => {
  return Promise.resolve(woeid ? MockWeathersData : []);
});
