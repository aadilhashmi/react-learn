import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  background-color: blue;
  color: white;
  width: 50%;
  margin-left: 20%;
  text-align: center;
  border-radius: 10px;
`;
const StyledCompParent = () => {
  return (
    <div>
      <StyledH1>PICKUPBIZZ</StyledH1>
    </div>
  );
};

export default StyledCompParent;
