import React from "react";
import PropTypes from "prop-types";

const SearchCriteria = ({searchTerm}) => {
  const getSearchCriteria = () => {
    return searchTerm
      ? `Weather Forecast for location: ${searchTerm}`
      : "Please enter a location to get the weather forecast";
  };

  return <p className="title">{getSearchCriteria()}</p>;
};

SearchCriteria.propTypes = {
  searchTerm: PropTypes.string
};

export default SearchCriteria;
