import React from "react";

const FilterCountry = (props) => {
  const { name, flag } = props;
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
        <h3>{name}</h3>
      </p>
    </div>
  );
};

export default FilterCountry;
