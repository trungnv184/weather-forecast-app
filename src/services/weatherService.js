const corsProxy = "https://cors-anywhere.herokuapp.com/";
const locationQueryUrl = "http://www.metaweather.com/api/location/search/?query=";
const weatherQueryUrl = "http://www.metaweather.com/api/location/";

export const getLocationData = (locationName) => {
  return fetch(corsProxy + locationQueryUrl + locationName).then((response) =>
    response.json()
  );
};

export const getWeathersFromLocation = (woeid) => {
  return fetch(corsProxy + weatherQueryUrl + woeid).then((response) => response.json());
};
