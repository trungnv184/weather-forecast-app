import {useEffect, useState} from "react";
import * as weatherService from "../services/weatherService";
import {getTemperatureFormat, getWeekDay} from "../utils/convertHelper";

const mapWeathersData = (weathersResponse) => {
  if (!weathersResponse) {
    return [];
  }

  const weathers = weathersResponse.consolidated_weather.splice(0, 5) || [];
  return weathers.map((weather) => ({
    id: weather.id,
    minTemp: getTemperatureFormat(weather.min_temp),
    maxTemp: getTemperatureFormat(weather.max_temp),
    applicableDate: getWeekDay(weather.applicable_date)
  }));
};

export const useFetchWeathers = (locationName) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weathers, setWeathers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeathersData = async () => {
      try {
        setIsLoading(true);
        const locationData = await weatherService.getLocationData(locationName);
        if (locationData.length === 0) {
          setWeathers([]);
          return;
        }

        const {woeid} = locationData[0];
        const weathersData = await weatherService.getWeathersFromLocation(woeid);
        const weathers = mapWeathersData(weathersData);

        setWeathers(weathers);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!locationName) {
      return;
    }

    fetchWeathersData();
  }, [locationName]);

  return {isLoading, weathers, error};
};
