import React from "react";
import "./App.css";
import Weathers from "./containers/Weathers/Weathers";
import Layout from "./hoc/Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Weathers />
      </Layout>
    </div>
  );
};

export default App;
