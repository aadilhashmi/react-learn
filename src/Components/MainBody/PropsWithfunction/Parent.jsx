import React from "react";
import { Child } from "./Child";

export const Parent = () => {
  const personName = "Aamer sir";
  return (
    <div>
      <Child name="aadil" age="25" friend={personName} />
      {/* <Child aadil={personName} /> */}
    </div>
  );
};
