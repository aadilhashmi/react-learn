import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SentDataToParent } from "./SentDataToParent";

export const RecievedDataFromChild = () => {
    const [dataFromChild, setDataFromChild] = useState([]);
  console.log("hello", dataFromChild);
  return (
    <div>
      <SentDataToParent setDataFromChild={setDataFromChild} />
      <ul>
        {dataFromChild &&
          dataFromChild.map((item, index) => {
            return <li key={index}>{item.email}</li>;
          })}
      </ul>
    </div>
  );
};
