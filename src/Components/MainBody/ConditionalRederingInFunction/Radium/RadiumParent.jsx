import React from "react";
import Radium from "radium";

const RadiumParent = () => {
  const styleButton = {
    backgroundColor: "Aquamarine",
    color: "black",
    boxShadow: "5px 10px 10px 0 black",
  };
  return (
    <div>
      <h1>hiiiiiiiiiiiiiii</h1>
      <p>this is radium practice</p>
      <i>first install radium :=== npm i radium --save</i>
      <br />
      <button style={styleButton}>Radium</button>
    </div>
  );
};

export default RadiumParent(RadiumParent);
