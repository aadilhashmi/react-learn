import React, { useEffect, useState } from "react";
import FetchingDataFromReduxChild from "./FetchingDataFromReduxChild";
import { useSelector, useDispatch } from "react-redux";
import { getAllGroups } from "../../../State/selectors/groupSelector";
import { addNewGroup } from "../../../State/Action/groupAction";

const FetchingDataFromReduxParent = () => {
  const [groupData, setGroupData] = useState();
  const [addNewGroups, setAddNewGroup] = useState();
  const selector = useSelector(getAllGroups);
  const dispatch = useDispatch;
  useEffect(() => {
    setGroupData(selector);
  }, [selector]);
  const handleNewGroup = () => {
    dispatch(addNewGroup(addNewGroups));
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
