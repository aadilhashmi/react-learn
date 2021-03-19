import React from "react";
import { Table } from "react-bootstrap";
import "./PlacementStats.css";

const PlacementStats = () => {
  return (
    <React.Fragment>
      <div>
        <Table className="tab">
          <thead className="head">
            <tr>
              <th className="stats-head">SrNo.</th>
              <th>Students Name</th>
              <th>
                Placed In <br /> (Company)
              </th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>2014</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>2015</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>twitter</td>
              <td>2016</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Jacob</td>
              <td>@twitter</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Jacob</td>
              <td>@twitter</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Jacob</td>
              <td>@twitter</td>
              <td>2018</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};

export default PlacementStats;
