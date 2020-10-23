import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useLocationContext} from "../../contexts/LocationContext";

const Search = () => {
  const [city, setCity] = useState("Ho Chi Minh City");
  const {setLocation} = useLocationContext();

  useEffect(() => {
    setLocation(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSearchTerm = (event) => {
    if (!event) {
      return;
    }

    setCity(event.target.value);
  };

  const handleSearchLocation = () => {
    setLocation(city);
  };

  const handleKeyPress = (event) => {
    var code = event.keyCode || event.which;

    if (code === 13) {
      setLocation(city);
    }
  };

  return (
    <Form inline>
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={city}
        onChange={handleChangeSearchTerm}
        onKeyPress={handleKeyPress}
      />
      <Button variant="outline-success" onSubmit={handleSearchLocation}>
        Search
      </Button>
    </Form>
  );
};

export default Search;
