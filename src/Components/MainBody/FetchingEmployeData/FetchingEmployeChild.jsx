import React from "react";
import "./FecthingEmploye.css";

const FetchingEmployeChild = ({ EmpData }) => {
  return (
    <div className="employe">
      <img src={EmpData.image} alt="" width="200px" height="200px" />
      <h1>{EmpData.name}</h1>
      <h2>{EmpData.id}</h2>
    </div>
  );
};

export default FetchingEmployeChild;
