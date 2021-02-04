import React, { Component } from "react";
import PropsWithClassChild from "./PropsWithClassChild";

class PropsWithClassParent extends Component {
  state = {
    person: [
      { name: "thor", age: 25 },
      { name: "Superman", age: 25 },
      { name: "wonderwomen", age: 30 },
    ],
  };

  render() {
    return (
      <div>
        <PropsWithClassChild name="aamer khan" age="56" />
        <PropsWithClassChild name="salman khan" age="56" />
            <PropsWithClassChild name="shahruk khan khan" age="56" />
            <PropsWithClassChild    name={this.state.}>
      </div>
    );
  }
}

export default PropsWithClassParent;
