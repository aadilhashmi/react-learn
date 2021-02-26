import React, { useEffect, useState } from "react";
import FetchingDataFromReduxChild from "./FetchingDataFromReduxChild";
import { useSelector, useDispatch } from "react-redux";
import { getAllGroups } from "../../../State/selectors/groupSelector";

const FetchingDataFromReduxParent = () => {
  const [groupData, setGroupData] = useState(); //second step
  const selector = useSelector(getAllGroups); //first step
  console.log("testing......", selector);
  useEffect(() => {
    setGroupData(selector);
  }, [selector]);
  return (
    <>
      <div>
        <input type="text" />
        <button>ADDGROUP</button>
      </div>
      <div>
        {groupData &&
          groupData.map((fetchData) => {
            return (
              <FetchingDataFromReduxChild Data={fetchData} key={fetchData.id} />
            );
          })}
      </div>
    </>
  );
};

export default FetchingDataFromReduxParent;
