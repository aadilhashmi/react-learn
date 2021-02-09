import React from "react";

const ConditionalRenderingChildFunc = (item) => {
  return (
    <div>
      <p onClick={item.Clicked}>
        My name {item.first} and my age {item.firstage}
      </p>
      <input type="text" onChange={item.inputchange} />
    </div>
  );
};

export default ConditionalRenderingChildFunc;
