import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Weather = ({day, min, max}) => {
  return (
    <Card bg="light">
      <Card.Header>{day}</Card.Header>
      <Card.Body>
        <Card.Text>Min: {min}</Card.Text>
        <Card.Text>Max: {max}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Weather.propTypes = {
  day: PropTypes.string.isRequired,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Weather;
