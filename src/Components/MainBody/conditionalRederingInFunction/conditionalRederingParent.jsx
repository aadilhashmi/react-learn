import React, { useState } from "react";
import conditionalRendringChild from "./conditionalRendringChild";

const conditionalRederingParent = () => {
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

  const handleDelete = () => {};
  return (
    <div>
      <button onClick={handleDelete}>DELETE</button>
      {employData.employe.map((fetchData) => {
        return <conditionalRendringChild passData={fetchData} />;
      })}
    </div>
  );
};

export default conditionalRederingParent;
