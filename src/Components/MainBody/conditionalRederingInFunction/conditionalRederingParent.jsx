import React, { useState } from "react";
import ConditionalRendringChild from "./ConditionalRendringChild";

const employe = [
  {
    name: "rizwan",
    job: " php developer",
  },
  {
    name: "rizwan 2",
    job: " php developer",
  },
  {
    name: "rizwan 3",
    job: " php developer",
  },
];
const ConditionalRederingParent = () => {
  const [employData, setEmployeData] = useState(employe);

  const handleDelete = (index) => {
    const newEmployeData = [...employData];
    newEmployeData.splice(index, 1);
    setEmployeData(newEmployeData);
  };
  return (
    <div>
      <button onClick={handleDelete}>DELETE</button>
      {employData.map((fetchData, index) => {
        return <ConditionalRendringChild passData={fetchData} />;
      })}
    </div>
  );
};

export default ConditionalRederingParent;
