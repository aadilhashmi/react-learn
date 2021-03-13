import React from "react";
import { Card, Button } from "react-bootstrap";

import { PlacementReducer } from "../../State/Reducers/PlacementRedeucer";

import "./Placement.css";

const Placement = () => {
  return (
    <>
      {PlacementReducer.Placement.map((PlacementData) => {
        return (
          <>
            <div>
              <p>{PlacementData.discription}</p>
              <p>{PlacementData.discription2}</p>
              <p>{PlacementData.discription3}</p>
            </div>
          </>
        );
      })}
      <Card className="place-Card" style={{ width: "20rem", height: "20rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Placement;
