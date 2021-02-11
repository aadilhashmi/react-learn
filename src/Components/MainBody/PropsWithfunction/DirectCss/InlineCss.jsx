import React from "react";

const InlineCss = () => {
  const button = {
    color: "blue",
  };
  return (
    <div>
      <button style={button}>onclick</button>
    </div>
  );
};

export default InlineCss;
