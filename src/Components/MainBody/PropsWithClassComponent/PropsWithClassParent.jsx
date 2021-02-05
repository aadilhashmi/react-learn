import React, { Component } from "react";
import { PropsWithClassChild } from "./PropsWithClassChild";

export class PropsWithClassParent extends Component {
  state = {
    person: [
      { name: "Thor", age: 25 },
      { name: "Superman", age: 25 },
      { name: "wonderwomen", age: 30 },
    ],
  };
  changNameHandler = () => {
    this.setState({
      person: [
        { name: "AADIL", age: 10 },
        { name: "RIZWAN", age: 20 },
        { name: "TAUSEEF", age: 34 },
      ],
    });
  };
  changNameHandler1 = () => {
    this.setState({
      person: [
        { name: "khawaja", age: 10 },
        { name: "aamer", age: 20 },
        { name: "salman", age: 34 },
      ],
    });
  };

  render() {
    return (
      <div>
        <PropsWithClassChild
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <PropsWithClassChild
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <PropsWithClassChild
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
        <button onClick={this.changNameHandler}> ON CLICK EVENT</button>
        <br />
        <button onClick={this.changNameHandler1}> ON CLICK EVENT</button>
      </div>
    );
  }
}
