import React from "react";
import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";
import PropTypes from "prop-types";

const Layout = ({children}) => {
  return (
    <Aux>
      <Header />
      <main>{children}</main>
    </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
export default Layout;
