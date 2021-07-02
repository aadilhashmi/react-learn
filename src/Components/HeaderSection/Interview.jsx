import React from "react";
import { useState } from "react";
import { InterviewChild } from "./InterviewChild";
export const Interview = () => {
  const [count, setCount] = useState();

  return (
    <>
      <div>
        <h1>
          <InterviewChild />
          hiiiiiiii
        </h1>
      </div>
    </>
  );
};
