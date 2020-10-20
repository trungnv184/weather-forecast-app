import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Search from "../../containers/Search/Search";

const Header = () => {
  return (
    <header className="p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Navbar expand="lg">
        <Search />
      </Navbar>
    </header>
  );
};

export default Header;
