import React from "react";

const FilterCountry = (props) => {
  const { name, capital, flag, region } = props;
  return (
    <div>
      <p>
        <img
          src={flag}
          alt={name}
          style={{ width: "200px", height: "200px" }}
        />
      </p>
      <p>
        <h3>Name:-{name}</h3>
      </p>
      <p>
        <h3>Capital:-{capital}</h3>
      </p>
      <p>
        <h3>Region:-{capital}</h3>
      </p>
    </div>
  );
};

export default FilterCountry;
