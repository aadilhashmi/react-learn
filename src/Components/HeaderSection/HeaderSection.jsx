import React, { useState } from "react";
import { PropsWithClassParent } from "../MainBody/PropsWithClassComponent/PropsWithClassParent";
import { ClassMates } from "../ClassMates/ClassMates";
import { Col, Row } from "react-bootstrap";
import { Parent } from "../MainBody/PropsWithfunction/Parent";
import ParentBind from "../MainBody/PropsWithBind/ParentBind";
import UseStateParentFunc from "../MainBody/PropsWithfunction/UseState/UseStateParentFunc";

import InlineCss from "../MainBody/PropsWithfunction/DirectCss/InlineCss";
import UseStateParentPractice from "../MainBody/PropsWithfunction/UseStatePractice/UseStateParentPractice";
import MapingPrent from "../MainBody/PropsWithfunction/Maping/MapingParent";
import FetchingDataFromJsonParent from "../MainBody/FetchingDataFromJSON/FetchingDataFromJsonParent";

const HeaderSection = () => {
  return (
    <div>
      <React.Fragment>
        <Row>
          <Col>
            {/* amjad sir class tutorial */}
            {/* <ClassMates /> */}
          </Col>
          <Col>
            {/* class components */}
            {/* <PropsWithClassParent /> */}
          </Col>
        </Row>
        {/* funtion components */}
        {/* <Parent /> */}
      </React.Fragment>
      {/* react binding tutorial */}
      {/* <ParentBind /> */}
      {/* usestate on click on change  tutorial starts  */}
      {/* <UseStateParentFunc /> */}
      {/* <UseStateParentPractice /> */}
      {/* <InlineCss /> */}
      {/* <MapingPrent /> */}
      <FetchingDataFromJsonParent />
    </div>
  );
};

export default HeaderSection;
