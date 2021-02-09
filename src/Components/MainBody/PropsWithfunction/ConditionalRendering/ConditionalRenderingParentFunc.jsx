import React, { useState } from "react";
import ConditionalRenderingChildFunc from "./ConditionalRenderingChildFunc";

const ConditionalRenderingParentFunc = () => {
  const [personData, setPersonData] = useState({
    person: [
      { name: "Aamer ", age: 25 },
      { name: "asfan", age: 20 },
    ],
  });
  const changNameHandler = () => {
    setPersonData({
      person: [
        { name: "Aadil ", age: 25 },
        { name: "rizwan", age: 20 },
      ],
    });
  };

  return (
    <div>
      <ConditionalRenderingChildFunc
        first={personData.person[0].name}
        firstage={personData.person[0].age}
        Clicked={changNameHandler}
      />
    </div>
  );
};

export default ConditionalRenderingParentFunc;
