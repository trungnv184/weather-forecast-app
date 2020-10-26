import React from "react";
import {render} from "@testing-library/react";
import {LocationContext} from "../contexts/LocationContext";

export const renderComponentWithLocationProvider = (wrapperComponent, options) => {
  const utils = render(
    <LocationContext.Provider value={options}>
      {wrapperComponent}
    </LocationContext.Provider>
  );

  return {...utils};
};
