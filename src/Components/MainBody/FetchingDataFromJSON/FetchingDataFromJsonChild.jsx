import React from "react";
import "./FetchingData.css";
import { Card, Button } from "react-bootstrap";

const FetchingDataFromJsonChild = ({ Data }) => {
  return (
    <div className="main">
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={Data.image} width="200px" height="200px" />
        <Card.Body>
          <Card.Title>{Data.name}</Card.Title>
          {Data.age}
          <Card.Text>{Data.discription}</Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FetchingDataFromJsonChild;
