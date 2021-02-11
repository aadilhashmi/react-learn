import React, { useState } from "react";

const InlineCss = () => {
  const button = {
    color: "blue",
    fontSize: "20px",
  };
  const [addImage, setImage] = useState(0);
  const handleImage = () => {
    setImage(<img src="logo192.png" />);
  };
  return (
    <div>
      <button onClick={handleImage} style={button}>
        onclick
      </button>
    </div>
  );
};

export default InlineCss;
