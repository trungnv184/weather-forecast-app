import React from "react";
import PropTypes from "prop-types";

const SearchCriteria = ({searchTerm}) => {
  return (
    <p className="title" data-testid="search-criteria">
      {searchTerm
        ? `Weather Forecast for location: ${searchTerm}`
        : "Please enter a location to get the weather forecast"}
    </p>
  );
};

SearchCriteria.propTypes = {
  searchTerm: PropTypes.string
};

export default SearchCriteria;
