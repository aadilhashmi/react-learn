import React, { useState } from "react";

const UseStatePractice = () => {
  const [addnumber, setAddNumber] = useState(0);
  const handleCounter = () => {
    setAddNumber(addnumber + 1);
    setAddNumber(addnumber - 1);
  };

  return (
    <div>
      <p>numbner...</p>
      <button>{addnumber}</button>
      <br />
      <br />
      <button onClick={handleCounter}>Add number</button>
      <button onClick={handleCounter}>delete number</button>
    </div>
  );
};

export default UseStatePractice;
