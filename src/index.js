import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {LocationProvider} from "./contexts/LocationContext";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import {stopReportingRuntimeErrors} from "react-error-overlay";

if (process.env.NODE_ENV === "development") {
  stopReportingRuntimeErrors(); // disables error overlays
}

const RootApp = () => {
  return (
    <LocationProvider>
      <App />
    </LocationProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
