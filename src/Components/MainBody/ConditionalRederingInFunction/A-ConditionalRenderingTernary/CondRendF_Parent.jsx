import React, { useState } from "react";
import CondRendF_Child from "./CondRendF_Child";

const CondRendF_Parent = () => {
  const [showData, setShowData] = useState(false);
  const [UserData, setUserData] = useState({
    user: [
      { name: "Salman", age: 23 },
      { name: "rizwan", age: 24 },
      { name: "aamer", age: 20 },
    ],
  });
  // switch name handler
  const switchNameHandler = () => {
    setUserData({
      user: [
        { name: "AADIL", age: 23 },
        { name: "KHAWJA", age: 24 },
        { name: "MAZHAR", age: 25 },
      ],
    });
  };
  const toggleUserHandler = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <p>1.Conditional Rendering</p>
      <button onClick={toggleUserHandler}>Conditional Rendering</button>
      {showData && (
        <div>
          <CondRendF_Child
            name={UserData.user[0].name}
            age={UserData.user[0].age}
          />
          <CondRendF_Child
            name={UserData.user[1].name}
            age={UserData.user[1].age}
          />
          <CondRendF_Child
            name={UserData.user[2].name}
            age={UserData.user[2].age}
          />
        </div>
      )}
      <button onClick={switchNameHandler}>CHANGE STATE</button>
    </div>
  );
};

export default CondRendF_Parent;
