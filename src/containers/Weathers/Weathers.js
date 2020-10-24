import React from "react";
import Container from "react-bootstrap/Container";
import {useFetchWeathers} from "../../hooks/useFetchWeathers";
import {useLocationContext} from "../../contexts/LocationContext";
import Spinner from "../../components/Spinner/Spinner";
import SearchCriteria from "../../components/Search/SearchCriteria";
import SearchWeatherResult from "../../components/Search/SearchWeatherResult";

const Weathers = () => {
  const {location} = useLocationContext();
  const {isLoading, weathers, error} = useFetchWeathers(location);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container fluid>
      <SearchCriteria searchTerm={location} />
      <SearchWeatherResult weathers={weathers} error={error} />
    </Container>
  );
};

export default Weathers;
