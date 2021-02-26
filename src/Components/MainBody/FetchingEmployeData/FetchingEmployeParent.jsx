import React, { useEffect, useState } from "react";
import { getAllEmploye } from "../../../State/selectors/EmployeSelector";
import { useSelector } from "react-redux";
import FetchingEmployeChild from "./FetchingEmployeChild";

const FetchingEmployeParent = () => {
  const selector = useSelector(getAllEmploye);
  const [EmployeData, setEmployeData] = useState();
  useEffect(() => {
    setEmployeData(selector);
  }, [selector]);
  return (
    <div>
      {EmployeData &&
        EmployeData.map((fetchEmpData) => {
          console.log("empDataaa==>", fetchEmpData);
          return <FetchingEmployeChild EmpData={fetchEmpData} />;
        })}
    </div>
  );
};

export default FetchingEmployeParent;
