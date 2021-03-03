import React, { useState } from "react";

const CondRendF_Parent = () => {
  const [UserData, setUserData] = useState({
    user: [
      { name: "Salman", age: 23 },
      { name: "rizwan", age: 24 },
      { name: "aamer", age: 20 },
    ],
  });
  return (
    <div>
      <p>1.Conditional Rendering</p>
      <button>Conditional Rendering</button>
    </div>
  );
};

export default CondRendF_Parent;
