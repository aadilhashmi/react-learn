import React from "react";

const ConditionalRendringChild = ({ passData }) => {
  return (
    <div>
      <h1>
        i am {passData.name} profession {passData.job}
      </h1>
    </div>
  );
};

export default ConditionalRendringChild;
