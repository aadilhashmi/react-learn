import React from "react";
import FetchingDataFromJsonChild from "./FetchingDataFromJsonChild";
import { PersonReducer } from "../../State/Reducers/PersonReducer";
const FetchingDataFromJsonParent = () => {
  return (
    <div>
      <FetchingDataFromJsonChild />
    </div>
  );
};

export default FetchingDataFromJsonParent;
