import React from "react";
import Weather from "../../components/Weather/Weather";
import CardDeck from "react-bootstrap/CardDeck";
import {useFetchWeathers} from "../../hooks/useFetchWeathers";
import {useLocationContext} from "../../contexts/LocationContext";
import Spinner from "../../components/Spinner/Spinner";
import SearchCriteria from "../../components/SearchCriteria/SearchCriteria";
import Container from "react-bootstrap/Container";

const Weathers = () => {
  const {location} = useLocationContext();
  const {isLoading, weathers} = useFetchWeathers(location);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container fluid>
      <SearchCriteria searchTerm={location} />
      <CardDeck className="p-3">
        {weathers.length > 0 &&
          weathers.map(({id, minTemp, maxTemp, applicableDate}) => (
            <Weather key={id} day={applicableDate} min={minTemp} max={maxTemp} />
          ))}
      </CardDeck>
    </Container>
  );
};

export default Weathers;
