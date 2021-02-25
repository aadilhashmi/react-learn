import React, { useEffect, useState } from "react";
import FetchingDataFromReduxChild from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
import { getAllGroups } from "../../../State/selectors/groupSelector";

const FetchingDataFromReduxParent = () => {
  const selector = useSelector(getAllGroups);
  const [groupData, setGroupData] = useState();
  const [addNewGroup, setAddNewGroup] = useState();
  useEffect(() => {
    setGroupData(selector);
  }, [selector]);
  return (
    <>
      <div>
        {groupData &&
          groupData.map((fetchData) => {
            return (
              <FetchingDataFromReduxChild Data={fetchData} key={fetchData.id} />
            );
          })}
      </div>
      <div>
        <input type="text" />{" "}
        <button onChange={(e)=>}>ADDGROUP</button>
      </div>
    </>
  );
};

export default FetchingDataFromReduxParent;
