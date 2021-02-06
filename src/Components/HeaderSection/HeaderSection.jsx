import React from "react";
import { PropsWithClassParent } from "../MainBody/PropsWithClassComponent/PropsWithClassParent";
import { ClassMates } from "../ClassMates/ClassMates";
import { Col, Row } from "react-bootstrap";

const HeaderSection = () => {
  return (
    <div>
      <React.Fragment>
        <Row>
          <Col>
            <ClassMates />
          </Col>
          <Col>
            <PropsWithClassParent />
          </Col>
        </Row>
      </React.Fragment>
    </div>
  );
};

export default HeaderSection;
