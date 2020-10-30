import React from "react";
import "./App.css";
import Weathers from "./containers/Weathers/Weathers";
import Layout from "./components/Layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import {LocationProvider} from "./contexts/LocationContext";

const App = () => {
  return (
    <div className="App">
      <LocationProvider>
        <Layout>
          <ErrorBoundary>
            <Weathers />
          </ErrorBoundary>
        </Layout>
      </LocationProvider>
    </div>
  );
};

export default App;
