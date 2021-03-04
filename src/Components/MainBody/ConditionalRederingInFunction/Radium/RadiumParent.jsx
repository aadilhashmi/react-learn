import React from "react";
import Radium from "radium";

const RadiumParent = () => {
  const styleButton = {
    backgroundColor: "Aquamarine",
    color: "black",
    boxShadow: "5px 10px 10px 0 black",
    fontSize: "30px",
    ":hover": {
      backgroundColor: "green",
    },
  };
  const styleDiv = {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "400px",
    height: "400px",
    borderRadius: "20px",
    position: "absolute",
    left: "35%",
    top: "25%",
    textAlign: "center",
    ":hover": {
      backgroundColor: "yellow",
    },
  };
  return (
    <div style={styleDiv}>
      <h1>hiiiiiiiiiiiiiii</h1>
      <br />
      <p>this is radium practice</p>
      <br />
      <i>first install radium :=== npm i radium --save</i>
      <br />
      <br />
      <button style={styleButton}>Radium</button>
    </div>
  );
};

export default Radium(RadiumParent);
