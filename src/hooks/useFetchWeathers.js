import {useEffect} from "react";
import {getLocationData, getWeathersFromLocation} from "../services/weatherService";
import {getTemperatureFormat, getWeekDay} from "../utils/convertHelper";
import * as actionTypes from "../contexts/store/appActions";
import {useAppContext} from "../contexts/store/store";

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
  const {state, dispatch} = useAppContext();
  useEffect(() => {
    const fetchWeathersData = async () => {
      try {
        dispatch({
          type: actionTypes.SET_LOADING_STATUS
        });
        const locationData = await getLocationData(locationName);

        if (locationData.length === 0) {
          dispatch({
            type: actionTypes.SET_WEATHERS_RESPONSE,
            weathers: []
          });
          return;
        }

        const {woeid} = locationData[0];
        const weathersData = await getWeathersFromLocation(woeid);
        const weathers = mapWeathersData(weathersData);

        dispatch({
          type: actionTypes.SET_WEATHERS_RESPONSE,
          weathers
        });
      } catch (error) {
        dispatch({
          type: actionTypes.SET_ERROR,
          error
        });
      }
    };

    if (!locationName) {
      dispatch({
        type: actionTypes.SET_WEATHERS_RESPONSE,
        weathers: []
      });
      return;
    }

    fetchWeathersData();
  }, [locationName, dispatch]);

  return state;
};
