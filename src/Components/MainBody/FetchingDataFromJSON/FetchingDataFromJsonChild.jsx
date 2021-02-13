import React from "react";
import "./FetchingData.css";
import { Card, Button } from "react-bootstrap";

const FetchingDataFromJsonChild = ({ Data }) => {
  return (
    <div className="main">
      <Card className="card" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={Data.image} width="300px" />
        <Card.Body>
          <Card.Title>{Data.name}</Card.Title>
          <Card.Text>{Data.discription}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FetchingDataFromJsonChild;
