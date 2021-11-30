import React from "react";
// import "./country.css";
const Country = ({ stats }) => {
  return (
    <div className="country">
      <h2>{stats.Country}</h2>
      <div className="describe">
        <p>{`Active : ${stats.Active}`}</p>
        <p>{`Confirmed : ${stats.Confirmed}`}</p>
        <p>{`Deaths : ${stats.Deaths}`}</p>
        <p>{`Recovered : ${stats.Recovered}`}</p>
      </div>
    </div>
  );
};

export default Country;
