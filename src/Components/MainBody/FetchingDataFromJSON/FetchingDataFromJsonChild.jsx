import React from "react";
import { Card, Button } from "react-bootstrap";

const FetchingDataFromJsonChild = () => {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="img.jpg" width="300px" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FetchingDataFromJsonChild;
