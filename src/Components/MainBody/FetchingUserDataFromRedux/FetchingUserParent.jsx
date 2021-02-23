import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../State/selectors/UserSelector";

const FetchingUserParent = () => {
  const selector = useSelector(getAllUser);
  const [UserData, setUserData] = useState();
  useEffect(() => {
    setUserData(selector);
  }, [selector]);
    return <div>
        {UserData &&
            UserData.map((fetchData) => {
                userData = (fetchData),
              key=(fetchData.id)
      }}
  </div>;
};

export default FetchingUserParent;
