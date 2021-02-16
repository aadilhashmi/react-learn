import React from "react";
import "./FetchingData.css";
import { Card, Button } from "react-bootstrap";

const FetchingDataFromJsonChild = ({ Data }) => {
  return (
    <div className="main">
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Img className="img" variant="top" src={Data.image} />
        <Card.Body>
          <Card.Title className="title">{Data.name}</Card.Title>
          {Data.age}
          <Card.Text className="desc">{Data.discription}</Card.Text>
          <Button className="buttons" variant="primary">
            View More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FetchingDataFromJsonChild;
