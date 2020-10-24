import React from "react";
import "./App.css";
import Weathers from "./containers/Weathers/Weathers";
import Layout from "./components/Layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <ErrorBoundary>
          <Weathers />
        </ErrorBoundary>
      </Layout>
    </div>
  );
};

export default App;
