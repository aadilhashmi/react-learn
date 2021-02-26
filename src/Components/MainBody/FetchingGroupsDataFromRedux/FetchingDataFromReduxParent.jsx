import React, { useEffect, useState } from "react";
import FetchingDataFromReduxChild from "./FetchingDataFromReduxChild";
import { useSelector, useDispatch } from "react-redux";
import { getAllGroups } from "../../../State/selectors/groupSelector";
import { addNewGroup } from "../../../State/Action/groupAction";

const FetchingDataFromReduxParent = () => {
  const [groupData, setGroupData] = useState(); //second step
  const selector = useSelector(getAllGroups); //first step

  useEffect(() => {
    //THIRD STEP
    setGroupData(selector);
  }, [selector]);

  const [storedDataFromInputBox, setstoredDataFromInputBox] = useState();
  const dispatch = useDispatch();
  dispatch(addNewGroup(storedDataFromInputBox));
  const handleNewGroup = () => {};

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setstoredDataFromInputBox(e.target.value)}
        />
        <button onClick={handleNewGroup}>ADDGROUP</button>
      </div>
      <div>
        {groupData && //fourth maping
          groupData.map((fetchData) => {
            return <FetchingDataFromReduxChild Data={fetchData} />;
          })}
      </div>
    </>
  );
};

export default FetchingDataFromReduxParent;
