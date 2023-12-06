import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, area, population, flags } = props.country;
  // console.log(props.country);
  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <h3>Area: {area}</h3>
      <h3>Population: {population}</h3>
    </div>
  );
};

export default Country;
