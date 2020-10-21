import React from "react";
import Weather from "../../components/Weather/Weather";
import CardDeck from "react-bootstrap/CardDeck";

const Weathers = () => {
  return (
    <CardDeck className="p-3">
      <Weather day="Monday" min={22.5} max={30} />
      <Weather day="Tuesday" min={23} max={35} />
      <Weather day="Wednesday" min={30} max={35} />
      <Weather day="Thursday" min={26} max={30} />
      <Weather day="Friday" min={28} max={30} />
    </CardDeck>
  );
};

export default Weathers;
