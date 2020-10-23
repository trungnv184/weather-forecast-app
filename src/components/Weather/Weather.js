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
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default Weather;
