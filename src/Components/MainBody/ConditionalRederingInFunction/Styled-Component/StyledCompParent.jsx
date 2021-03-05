import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  background-color: red;
  color: white;
`;
const StyledCompParent = () => {
  return (
    <div>
      <StyledH1>PICKUPBIZZ</StyledH1>
    </div>
  );
};

export default StyledCompParent;
