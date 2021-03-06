import React from "react";
import "./PlacementOverview.css";
import { Table } from "react-bootstrap";

const PlacementOverview = () => {
  return (
    <div>
      <h1 className="heading">
        <u> Placement OverView : </u>
      </h1>
      <Table className="tab2">
        <thead className="head2">
          <tr>
            <th className="tab-R">Placement Overview</th>
            <th>Corporate Visits</th>
            <th>Avg. Package of B.Tech</th>
            <th>Avg. Package of M. TECH</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019-20</td>
            <td>125+</td>
            <td>INR 5 LPA</td>
            <td>INR 10 LPA</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PlacementOverview;
