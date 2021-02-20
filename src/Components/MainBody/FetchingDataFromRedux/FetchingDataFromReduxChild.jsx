import React from "react";

const FetchingDataFromReduxChild = ({ Data }) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "30px",
        border: "1px solid black",
      }}
    >
      <img
        style={{ width: "200px", height: "200px" }}
        src={Data.image}
        alt="Error"
      />
      <h1>{Data.name}</h1>
    </div>
  );
};

export default FetchingDataFromReduxChild;
