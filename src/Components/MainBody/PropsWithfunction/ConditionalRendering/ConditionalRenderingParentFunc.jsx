import React, { useState } from "react";
import ConditionalRenderingChildFunc from "./ConditionalRenderingChildFunc";

const ConditionalRenderingParentFunc = () => {
  return (
    <div>
      <ConditionalRenderingChildFunc />
    </div>
  );
};

export default ConditionalRenderingParentFunc;
