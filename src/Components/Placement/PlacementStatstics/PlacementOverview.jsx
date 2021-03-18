import React from "react";
import "./PlacementOverview.css";
import { Table } from "react-bootstrap";

const PlacementOverview = () => {
  return (
    <div>
      <Table className="tab">
        <thead className="head">
          <tr>
            <th>Placement Overview</th>
            <th>Corporate Visits</th>
            <th>Avg. Package of B.Tech</th>
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
  );
};

export default PlacementOverview;
