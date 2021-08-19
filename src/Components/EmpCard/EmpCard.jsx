import React from "react";
import { Card, Button, FormControl, Row, Col } from "react-bootstrap";
import "./EmpCard.css";

export const EmpCard = () => {
  return (
    <div className="together">
      <Card className="personal">
        <Card.Img className="display" variant="top" src="1.png" />
        <Card.Body className="watch">
          {/* <Card.Title>Name: {ammu.name}</Card.Title> */}
          {/* <Card.Title>Dept: {ammu.Dept}</Card.Title>
          <Card.Title>Exp: {ammu.Exp}</Card.Title> */}
          <Card.Text>
            <h2 className="label_person">
              <b>Aadil</b>
            </h2>
          </Card.Text>
          <Card.Text>
            <b>Dept: IT</b>
          </Card.Text>
          <Card.Text>
            <b>Exp: 3 year</b>
          </Card.Text>
          <Card.Text>
            <b>Contact: 7020212528</b>
          </Card.Text>
          <Button className="view">View</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
