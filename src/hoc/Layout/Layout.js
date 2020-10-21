import React from "react";
import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";

const Layout = (prop) => {
  return (
    <Aux>
      <Header />
      <main>{prop.children}</main>
    </Aux>
  );
};
export default Layout;
