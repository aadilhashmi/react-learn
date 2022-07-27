import React from "react";

const FilterCountry = (props) => {
  const { city, capital, flag, region } = props;
  return (
    <div>
      <p>
        <img
          src={flag}
          alt={city}
          style={{ width: "200px", height: "200px" }}
        />
      </p>
      <p>
        <h3>Name:-{city}</h3>
      </p>
      {/* <p>
        <h3>Capital:-{capital}</h3>
      </p>
      <p>
        <h3>Region:-{capital}</h3>
      </p> */}
    </div>
  );
};

export default FilterCountry;
