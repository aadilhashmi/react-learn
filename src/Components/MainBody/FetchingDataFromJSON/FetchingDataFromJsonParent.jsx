import React from "react";
import FetchingDataFromJsonChild from "./FetchingDataFromJsonChild";
import { PersonReducer } from "../../State/Reducers/PersonReducer";
const FetchingDataFromJsonParent = () => {
  return (
    <div>
      {PersonReducer.personDetails.map((fecthData) => {
        return <FetchingDataFromJsonChild data={fecthData} />;
      })}
    </div>
  );
};

export default FetchingDataFromJsonParent;
