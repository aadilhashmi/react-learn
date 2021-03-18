import React from "react";
import { Card, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

import { PlacementReducer } from "../../State/Reducers/PlacementRedeucer";

import "./Placement.css";

const Placement = () => {
  return (
    <>
      <Card className="place-Card">
        <Card.Img className="Card-Img" variant="top" src="khwaja.jpg" />
        <Card.Body>
          <b>
            <Card.Title>Mr. Mahesh Singh Bhatia</Card.Title>
          </b>
          <br />
          <Card.Title className="name">Training & Placement Officer</Card.Title>
          <br />
          <Button className="card-btn">View More</Button>
          <br />
          <Card.Text>
            Contact no. 8008887392/9052322951, 040-24576985 E-mail:
            placement@nsakcet.ac.in, nsakcet.placements@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
      {PlacementReducer.Placement.map((PlacementData) => {
        return (
          <>
            <h2 className="vission">
              <i class="fa fa-tags" aria-hidden="true"></i> Vission
            </h2>
            <p className="para">{PlacementData.discription}</p>
            <h2 className="vission">
              <i class="fa fa-tags" aria-hidden="true"></i> Mission
            </h2>
            <p className="para">{PlacementData.discription2}</p>
            <h2 className="vission">
              <i class="fa fa-tags" aria-hidden="true"></i>Training And
              Placement Office
            </h2>
            <p className="para">{PlacementData.discription3}</p>
          </>
        );
      })}
      <div>
        <Table className="tab">
          <thead className="head">
            <tr>
              <th>SrNo.</th>
              <th>Students Name</th>
              <th>Companey</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Placement;
