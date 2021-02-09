import React from "react";
import { PropsWithClassParent } from "../MainBody/PropsWithClassComponent/PropsWithClassParent";
import { ClassMates } from "../ClassMates/ClassMates";
import { Col, Row } from "react-bootstrap";
import { Parent } from "../MainBody/PropsWithfunction/Parent";
import ParentBind from "../MainBody/PropsWithBind/ParentBind";

const HeaderSection = () => {
  return (
    <div>
      <React.Fragment>
        <Row>
          <Col>
            {/* amjad sir class tutorial */}
            <ClassMates />
          </Col>
          <Col>
            {/* class components */}
            <PropsWithClassParent />
          </Col>
        </Row>
        {/* funtion components */}
        <Parent />
      </React.Fragment>
      {/* react binding tutorial */}
      <ParentBind />
    </div>
  );
};

export default HeaderSection;
