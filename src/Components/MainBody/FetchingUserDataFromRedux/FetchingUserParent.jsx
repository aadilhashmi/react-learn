import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../State/selectors/UserSelector";
import FetchingUserChild from "./FetchingUserChild";

const FetchingUserParent = () => {
  const selector = useSelector(getAllUser);
  const [UserData, setUserData] = useState();
  useEffect(() => {
    setUserData(selector);
  }, [selector]);
  return (
    <div>
      {UserData &&
        UserData.map((fetchdata) => {
          return <FetchingUserChild userData={fetchdata} key={fetchdata.id} />;
        })}
    </div>
  );
};
export default FetchingUserParent;
