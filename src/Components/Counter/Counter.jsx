import React from "react";
import { useState } from "react";

let adjustTime = undefined;
export const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isEnable, setIsEnable] = useState(false);
  const Increment = () => {
    adjustTime = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setIsEnable(true);
  };
  const decrement = () => {
    clearInterval(adjustTime);
    setIsEnable(false);
  };
  const handleReset = () => {
    setSeconds(0);
    clearInterval(adjustTime);
    setIsEnable(false);
  };
  const handleDecrement = () => {
    adjustTime = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setIsEnable(true);
  };
  return (
    <div>
      <button disabled={isEnable} onClick={Increment}>
        start
      </button>
      <button onClick={decrement}>stop</button>
      <button onClick={handleReset}>Reset</button>
      <button disabled={isEnable} onClick={handleDecrement}>
        decrease
      </button>
      <div>
        <p id="counter">{seconds}</p>
      </div>
    </div>
  );
};
