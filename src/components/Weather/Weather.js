import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Weather = ({day, min, max}) => {
  return (
    <Card bg="light">
      <Card.Header data-testid="day">{day}</Card.Header>
      <Card.Body>
        <Card.Text data-testid="min-temp">Min: {min}</Card.Text>
        <Card.Text data-testid="max-temp">Max: {max}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Weather.propTypes = {
  day: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Weather;
