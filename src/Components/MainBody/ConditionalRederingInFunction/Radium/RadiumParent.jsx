import React from "react";
// import Radium, { StyleRoot } from "radium";

import styled from "styled-components";
const MyH1 = styled.h1`
  background-color: red;
  &:hover {
    background-color: green;
  }
`;
const MyButton = styled.button`
  background-color: red;
  &:hover {
    background-color: green;
  }
`;
const MyAnchor = styled.a`
  color: red;
  &:hover {
    background-color: green;
  }
`;

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

    '@media(min-width:"500px")': {
      color: "red",
    },
  };

  return (
    // <StyleRoot>
    <div style={styleDiv}>
      <h1>hiiiiiiiiiiiiiii</h1>
      <br />
      <p>this is radium practice</p>
      <br />
      <i>first install radium :=== npm i radium --save</i>
      <br />
      <br />
      <button style={styleButton}>Radium</button>
      <MyH1>aaaadil</MyH1>
      <MyButton>aaaadil</MyButton>
      <MyAnchor>aaaadil</MyAnchor>
    </div>

    // </StyleRoot>
  );
};

export default RadiumParent;
