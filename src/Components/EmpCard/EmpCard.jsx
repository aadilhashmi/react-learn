import React from "react";
import { Card, Button, FormControl, Row, Col } from "react-bootstrap";
import "./EmpCard.css";

export const EmpCard = ({ ammu }) => {
  return (
    <div className="together">
      <Card className="personal">
        <Card.Img className="display" variant="top" src={ammu.pic} />
        <Card.Body className="watch">
          {/* <Card.Title>Name: {ammu.name}</Card.Title> */}
          {/* <Card.Title>Dept: {ammu.Dept}</Card.Title>
          <Card.Title>Exp: {ammu.Exp}</Card.Title> */}
          <Card.Text>
            <h2 className="label_person">
              <b>{ammu.name}</b>
            </h2>
          </Card.Text>
          <Card.Text>
            <b>Dept: {ammu.Dept}</b>
          </Card.Text>
          <Card.Text>
            <b>Exp: {ammu.Exp}</b>
          </Card.Text>
          <Card.Text>
            <b>Contact: {ammu.mob}</b>
          </Card.Text>
          <Button className="view" variant={ammu.color}>
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
