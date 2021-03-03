import React, { useState } from "react";
import DeletingStateChild from "./DeletingStateChild";

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
const DeletingStateParent = () => {
  const [employData, setEmployeData] = useState(employe);

  const handleDelete = (index) => {
    const newEmployeData = [...employData];
    newEmployeData.splice(index, 1);
    setEmployeData(newEmployeData);
  };
  const styleButton = {
    backgroundColor: "pink",
  };
  return (
    <div>
      <button onClick={handleDelete} style={styleButton}>
        DELETE
      </button>
      {employData.map((fetchData) => {
        return <DeletingStateChild passData={fetchData} />;
      })}
    </div>
  );
};

export default DeletingStateParent;
