import React, { useState } from "react";
import ConditionalRendringChild from "./ConditionalRendringChild";

const ConditionalRederingParent = () => {
  const [employData, setEmployeData] = useState({
    employe: [
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
    ],
  });

  const handleDelete = (index) => {
    const newEmployeData = [...employData];
    newEmployeData.splice(index, 1);
  };
  return (
    <div>
      <button onClick={handleDelete}>DELETE</button>
      {employData.employe.map((fetchData) => {
        return <ConditionalRendringChild passData={fetchData} />;
      })}
    </div>
  );
};

export default ConditionalRederingParent;
