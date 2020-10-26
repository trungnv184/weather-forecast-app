import React from "react";
import PropTypes from "prop-types";
import CardDeck from "react-bootstrap/CardDeck";
import Weather from "../Weather/Weather";

const SearchWeatherResult = ({weathers, error}) => {
  const isEmptyWeathers = () => {
    return !weathers || weathers.length === 0;
  };
  return error ? (
    <p data-testid="error-message">Something went wrong happened. Please try again !!!</p>
  ) : (
    <CardDeck data-testid="weathers-container" className="p-3">
      {isEmptyWeathers() ? (
        <p data-testid="empty-result">
          Weather data for this location not available. Please search another one!
        </p>
      ) : (
        weathers.map(({id, minTemp, maxTemp, applicableDate}) => (
          <Weather key={id} day={applicableDate} min={minTemp} max={maxTemp} />
        ))
      )}
    </CardDeck>
  );
};

SearchWeatherResult.propTypes = {
  weathers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      day: PropTypes.string,
      min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      max: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  error: PropTypes.instanceOf(Error)
};

export default SearchWeatherResult;
