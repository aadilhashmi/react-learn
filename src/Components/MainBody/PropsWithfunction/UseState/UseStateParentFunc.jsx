import React, { useState } from "react";
import UseStateChildFunc from "./UseStateChildFunc";

const UseStateParentFunc = () => {
  const [personData, setPersonData] = useState({
    person: [
      { name: "Aamer ", age: 25 },
      { name: "asfan", age: 20 },
    ],
  });
  const changNameHandler = (nameone, nametwo) => {
    setPersonData({
      person: [
        { name: nameone, age: 25 },
        { name: nametwo, age: 20 },
      ],
    });
  };
  const onchangeHandler = (e) => {
    setPersonData({
      person: [
        { name: e.target.value, age: 30 },
        { name: "mazhar", age: 25 },
      ],
    });
  };

  return (
    <div>
      <UseStateChildFunc
        first={personData.person[0].name}
        firstage={personData.person[0].age}
        Clicked={changNameHandler}
        inputchange={onchangeHandler}
        Click={() => changNameHandler("dhoni")}
      />
      <UseStateChildFunc
        first={personData.person[1].name}
        firstage={personData.person[1].age}
        Clicked={changNameHandler}
        Click={() => changNameHandler("rohit")}
      />
    </div>
  );
};

export default UseStateParentFunc;
