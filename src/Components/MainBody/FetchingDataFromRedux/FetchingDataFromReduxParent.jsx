import React, { useEffect, useState } from "react";
import FetchingDataFromReduxChild from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
import { getAllGroups } from "../../../State/selectors/groupSelector";
import { useDispatch } from "react-redux";

const FetchingDataFromReduxParent = () => {
  const selector = useSelector(getAllGroups);
  const [groupData, setGroupData] = useState();
  const [addNewGroup, setAddNewGroup] = useState();
  const dispatch = useDispatch;
  useEffect(() => {
    setGroupData(selector);
  }, [selector]);
  const handleNewGroup = () => {
    dispatch;
  };
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
        <input type="text" onChange={(e) => setAddNewGroup(e.target.value)} />
        <button onClick={handleNewGroup}>ADDGROUP</button>
      </div>
    </>
  );
};

export default FetchingDataFromReduxParent;
