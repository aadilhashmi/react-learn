import React from "react";

const FetchingDataFromReduxChild = ({ Data }) => {
  return (
    <div style={{ display: "inline-block", padding: "20px" }}>
      <h1>{Data.name}</h1>
      <img
        style={{ width: "200px", height: "200px" }}
        src={Data.image}
        alt="Error"
      />
    </div>
  );
};

export default FetchingDataFromReduxChild;
