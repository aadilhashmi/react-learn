import React from "react";
import { Table } from "react-bootstrap";
import "./PlacementStats.css";

const PlacementStats = () => {
  return (
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
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>
              <a href="#"></a>Thornton
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Larry the Bird</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Larry the Bird</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Jacob</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Larry the Bird</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Larry the Bird</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Jacob</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Jacob</td>
            <td>
              <a href="#"></a>@twitter
            </td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PlacementStats;
