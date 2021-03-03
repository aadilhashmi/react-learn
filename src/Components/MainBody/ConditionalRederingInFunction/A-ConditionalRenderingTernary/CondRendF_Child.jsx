import React from "react";

const CondRendF_Child = (item) => {
  return (
    <div>
      <h5>
        I am {item.name} and My Job is {item.age}
      </h5>
      <input type="text" onChange={item.change} />
    </div>
  );
};

export default CondRendF_Child;
