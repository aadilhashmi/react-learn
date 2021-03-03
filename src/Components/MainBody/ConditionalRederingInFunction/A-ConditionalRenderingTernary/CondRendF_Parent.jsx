import React, { useState } from "react";
import CondRendF_Child from "./CondRendF_Child";

const CondRendF_Parent = () => {
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
        { name: "Node", age: 23 },
        { name: "Backend", age: 24 },
        { name: "UI", age: 25 },
      ],
    });
  };
  const toggleUserHandler = () => {};

  return (
    <div>
      <p>1.Conditional Rendering</p>
      <button onClick={toggleUserHandler}>Conditional Rendering</button>
      <div>
        <CondRendF_Child
          name={UserData.user[0].name}
          age={UserData.user[0].age}
        />
      </div>

      <button onClick={switchNameHandler}>CHANGE STATE</button>
    </div>
  );
};

export default CondRendF_Parent;
