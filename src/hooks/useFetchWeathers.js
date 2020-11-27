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
  // const dispatch = useDispatchContext();
  const {state, dispatch} = useAppContext();
  // const dispatch = useDispatchContext();

  // console.log(state);
  // const [isLoading, setIsLoading] = useState(false);
  // const [weathers, setWeathers] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeathersData = async () => {
      try {
        // setIsLoading(true);
        dispatch({
          type: actionTypes.SET_LOADING_STATUS
        });
        const locationData = await getLocationData(locationName);

        if (locationData.length === 0) {
          // setWeathers([]);
          dispatch({
            type: actionTypes.SET_WEATHERS_RESPONSE,
            weathers: []
          });
          return;
        }

        const {woeid} = locationData[0];
        const weathersData = await getWeathersFromLocation(woeid);
        const weathers = mapWeathersData(weathersData);

        // setWeathers(weathers);
        dispatch({
          type: actionTypes.SET_WEATHERS_RESPONSE,
          weathers
        });
      } catch (error) {
        // setError(error);
        dispatch({
          type: actionTypes.SET_ERROR,
          error
        });
      } finally {
        // setIsLoading(false);
      }
    };

    if (!locationName) {
      // setWeathers([]);
      dispatch({
        type: actionTypes.SET_WEATHERS_RESPONSE,
        weathers: []
      });
      return;
    }

    fetchWeathersData();
  }, [locationName]);

  return state;

  // const state = useStateContext();

  // console.log(state, "AFTER");

  // return state;
};
