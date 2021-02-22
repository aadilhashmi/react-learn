import React from "react";

const FetchingEmployeChild = ({ EmpData }) => {
  return (
    <div>
      <img src={EmpData.image} alt="" width="200px" height="200px" />
      <h1>{EmpData.name}</h1>
      <h2>{EmpData.id}</h2>
    </div>
  );
};

export default FetchingEmployeChild;
